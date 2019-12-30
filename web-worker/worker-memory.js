// worker 中的计算
self.postMessage({
    type: 'created'
})

function fnStrToFn(args, body) {
    var fn = new Function(args, body)
    return fn
}

self.addEventListener('message', function(event) {
    if (!event.data) return

    let { type, ...restData } = event.data

    if (type === 'general') {
        const {
            data,
            handler: { args, body }
        } = restData
        let res = fnStrToFn(args, body)(data)
        self.postMessage({
            type,
            data: res
        })
        return
    }

    // 错误处理
    if (event.data == 'error') {
        throw new Error('worker 中发出错误')
    }
})
