/**
 * worker子线程中
 * self 表示子线程自身
 * 监听message事件, 可以与父线程通信. 参数的data属性含有所传递的消息
 * postMessage 方法来发送消息
 */
self.addEventListener('message', function(event) {
    console.log('子线程收到消息:', event.data);
    self.postMessage('我是子线程, 我收到了你的消息:' + event.data);
    // 错误处理
    if (event.data == 'trigger error') {
        throw new Error('worker 中发出错误');
    }
});
console.log('我是worker线程');

/**
 * 加载脚本
 */

importScripts('foo1.js');

console.log('访问加载的脚本中的数据 - 变量:', data);
console.log('访问加载的脚本中的数据 - 函数:', add);
