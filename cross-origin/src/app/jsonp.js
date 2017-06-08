// jsonp 跨域. 利用script标签可以跨域请求资源的特性, 把函数的调用放在服务端的文件中.把函数的定义放在本地. 来获取数据
export default function Jsonp () {
    // 封装通用jsonp函数
    function jsonp (url, callbackName, callback) {
        callbackName = callbackName || 'callbackName';
        window[callbackName] = function (data) {
            callback(data);
        };
        const scriptEle = document.createElement('script');
        document.body.appendChild(scriptEle);
        scriptEle.src = url + callbackName;
        document.body.removeChild(scriptEle);
    }
    // 测试jsonp跨域轮子
    jsonp('http://sub.localhost.com/jsonp?callback=', 'haha', function (res) {
        console.log('res:', res);
    });
}