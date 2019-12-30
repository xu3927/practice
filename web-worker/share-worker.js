/**
 * 共享 worker
 */

let data = [6, 8, 9]

function add(a, b) {
    return a + b
}

// 打开端口
console.log('子共享 worker 打开端口')

// 建立连接
onconnect = function(connectEvent) {
    console.log('共享 worker onconnect:', connectEvent)
    // ports 获取端口, 通过 port 实例设置消息事件监听
    var port = connectEvent.ports[0]

    port.onmessage = function(event) {
        console.log('shared worker 内部收到消息:', event.data)
        if (event.data == 'error') {
            throw new Error('子 sw 中的错误')
        } else {
            port.postMessage(`子 shared worker 收到信息: ${event.data}`)
        }
    }
}

self.onerror = function(e) {
    console.log('sw 中内部 onerror 收到错误:', e)
}
