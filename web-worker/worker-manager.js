window.WorkerCompute = (function() {
    // 回收器状态, init, created, waiting, running
    const collectorStateEnum = {
        init: 0,
        waiting: 1,
        running: 2
    }

    // worker 的状态, init, created 已创建, 收到回复消息, waiting, running, terminated
    const workerStateEnum = {
        init: 0,
        created: 1,
        waiting: 2,
        running: 3,
        terminated: 4
    }

    class WorkerManager {
        constructor(workerScriptUrl) {
            this.workers = []
            this.workerScriptUrl = workerScriptUrl || 'worker-compute.js'
            // worker 回收器
            this.collector = null // 回收期实例
            this.createCollector() // 创建回收期
        }
        // 创建新 worker
        create = () => {
            return new Promise((resolve, reject) => {
                const worker = new Worker(this.workerScriptUrl)
                worker.state = workerStateEnum.init

                worker.onmessage = event => {
                    let msgType = event.data ? event.data.type : ''
                    if (msgType === 'created') {
                        worker.state = workerStateEnum.created
                        resolve(worker)
                        return
                    }
                    worker.state = workerStateEnum.waiting
                    if (typeof worker.successCallback === 'function') {
                        worker.successCallback(event.data && event.data.data)
                    }
                }
                worker.onerror = event => {
                    console.error('ParallelCompute中收到worker错误:', event)
                    if (typeof worker.errorCallback === 'function')
                        worker.errorCallback()
                    reject()
                }
                this.workers.push(worker)
                this.createCollector()
            })
        }
        // 获取一个 worker, 如果没有可以使用的 worker 就创建新的 worker
        getWorker = () => {
            return new Promise((resolve, reject) => {
                let worker = this.workers.find(
                    item => item.state === workerStateEnum.waiting
                )
                if (!worker) {
                    this.create().then(resWorker => {
                        if (resWorker instanceof Worker) {
                            resolve(resWorker)
                        }
                    })
                } else {
                    resolve(worker)
                }
            })
        }
        // 计算
        compute = msg => {
            return new Promise((resolve, reject) => {
                this.getWorker().then(worker => {
                    worker.state = workerStateEnum.running

                    worker.postMessage(msg)
                    worker.successCallback = data => {
                        resolve(data)
                    }
                    worker.errorCallback = event => {
                        reject(event)
                    }
                })
            })
        }
        // 创建 worker 回收器, 回收周期
        createCollector = () => {
            let that = this
            // 回收周期
            let period = 1000 * 30
            if (!this.collector) {
                this.collector = {
                    state: collectorStateEnum.init,
                    period: period, // 回收周期
                    interval: null // 回收器定时器
                }
            }

            if (this.collector.state <= collectorStateEnum.waiting) {
                createInterval()
            }

            function createInterval() {
                that.collector.interval = setInterval(function() {
                    if (that.workers.length == 0 && that.collector) {
                        window.clearInterval(that.collector.interval)
                        that.collector.state = collectorStateEnum.waiting
                    }
                    that.workers = that.workers.filter(item => {
                        if (item && item.state === workerStateEnum.waiting) {
                            item && item.terminate()
                            item.state = workerStateEnum.terminated
                            return false
                        }
                        return true
                    })
                }, that.collector.period)
                that.collector.state = collectorStateEnum.running
            }
        }
    }

    const workerManager = new WorkerManager()

    // 一次性 worker, 用完即销毁
    function onceWorker(data, handler) {
        return new Promise((resolve, reject) => {
            const worker = new Worker('worker-compute.js')
            if (data.buffers instanceof ArrayBuffer) {
                worker.postMessage(
                    {
                        type: 'general',
                        data: data,
                        handler: fn_string(handler)
                    },
                    [data.buffers]
                )
            } else {
                worker.postMessage({
                    type: 'general',
                    data: data,
                    handler: fn_string(handler)
                })
            }

            worker.onmessage = event => {
                if (event.data && event.data['type'] == 'created') {
                    console.log('onceWorker created')
                } else if (event.data && event.data['type'] !== 'created') {
                    resolve(event.data)
                    setTimeout(() => {
                        worker.terminate()
                    }, 1000)
                } else {
                    reject()
                }
            }
            worker.onerror = event => {
                reject(event)
                worker.terminate()
            }
        })
    }
    function fn_string(fn) {
        var name = ''
        if (typeof fn === 'function') {
            name = fn.name
            fn = fn.toString()
        }

        return {
            name: name,
            args: fn.substring(fn.indexOf('(') + 1, fn.indexOf(')')),
            body: fn.substring(fn.indexOf('{') + 1, fn.lastIndexOf('}'))
        }
    }

    // 数组相关方法
    const array = {}

    let _keys = [
        'map',
        'filter',
        'find',
        'findIndex',
        'some',
        'every',
        'includes',
        'reduce',
        'reduceRight'
    ].forEach(key => {
        if (key === 'reduce' || key === 'reduceRight') {
            array[key] = async function(data, handler, initValue) {
                return await workerManager.compute({
                    type: key,
                    data: data,
                    handler: fn_string(handler),
                    initValue
                })
            }
        } else {
            array[key] = async function(data, handler) {
                return await workerManager.compute({
                    type: key,
                    data: data,
                    handler: fn_string(handler)
                })
            }
        }
    })

    // 通用处理函数
    const general = async function(data, handler) {
        return await workerManager.compute({
            type: 'general',
            data: data,
            handler: fn_string(handler)
        })
    }

    return {
        WorkerManager,
        general,
        array,
        onceWorker
    }
})()
