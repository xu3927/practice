// worker 中的计算
let t_created = +new Date()
console.log('inWorker 创建完成:', t_created)

self.postMessage({
    type: 'created'
})

function fnStrToFn(args, body) {
    var fn = new Function(args, body)
    return fn
}

self.addEventListener('message', function(event) {
    if (!event.data) return

    let { type, data } = event.data
    if (type == 'transfer') {
        console.log(`inWorker: ${type}`)
        let transferType =
            data.buffers instanceof ArrayBuffer ? 'buffer' : 'string'
        let length =
            data.buffers instanceof ArrayBuffer
                ? data.buffers.byteLength / 2
                : data.str.length
        console.log(
            `[inworker]传输完成, 形式${transferType}: worker 创建耗时: ${t_created -
                data.t_start_create}ms, 传输耗时 ${+new Date() -
                data.t_start_transfer}ms, 传输长度 ${length / 1000}K`
        )
    }
    self.postMessage({
        type
    })
    // 错误处理
    if (event.data == 'error') {
        throw new Error('worker 中发出错误')
    }
})
