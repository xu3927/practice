// 通过iframe跨域
export default function crossByiframe () {
    //noinspection JSAnnotator
    /**
     * 同源的 iframe 可以获取对方的window对象, 及其中的方法. 并相互操作对方的属性. 非同源的iframe不可以.
     * 因此通过将二级域名不同的请求设置为相同的domain, 可以实现该目的.
     * 只适用于根域名相同, 二级域名不同的情况
     */
    // 设置domian, 父页面及ifram子页面均需要设置. document.domain 仅可以设置为同域的基础域名或当期域名, 不可以设置为其他域名或二级域名.
    document.domain = 'localhost.com';
    window.parentFn = function () {
        console.log('我是父页面中的Fn');
    }
    let contetEle = document.querySelector("#content");
    let iframe = document.createElement('iframe');
    iframe.name = 'childIframe';
    iframe.src = 'http://sub.localhost.com/huashan.html';
    contetEle.appendChild(iframe);
    iframe.ondload = () => {
        // 调用子frame中的方法
        window.childIframe.window.childFn();
    }

    /**
     * 通过 location.hash 传递数据
     * 如: haha.com/a.html 要与 xixi.com/x.html 传递数据
     * 步骤:
     * 1. haha.com/a.html 中新建一个iframe, src 为 xixi.com/x.html
     * 2. xixi.com/x.html 中新建一个iframe src 为 haha.com/b.html#hash=val,  并通过 hash 来传递数据.
     * 因为跨域x.html 不能直接设置 a.html 的 location. 所以通过再建一个与 a.html 同域的iframe来实现对 a.html的操作
     * 3. b.html 中通过 window.parent.parent.location.hash = 'message' 或 window.top.location.hash = 'message' 可以把信息传递给 a.html 对象.
     * 4. 在 a.html 中监听 hashchange 事件就可以获取到 b.html 传递的信息.
     * 注意: 在测试的时候 http://localhost.com 中的孙子iframe地址是 http://localhost.com/haha.html. 在该文件中操作 top iframe的location提示跨域, 不能操作. 具体原因尚未查出来.
     */

    // 打开 http://sub.localhost.com/a.html 看通过hash传递参数的效果

    /**
     * 通过 window.name 属性传递数据
     * 有两种方式: 1. 案例同 location.hash. 在子Iframe中再新建一个同域的孙子iframe.
     * 2. 先把iframe的src设置为跨域的页面, 然后在跨域的子iframe中设置window.name.
     * 然后再把Iframe.src 设置为一个同域的页面, 此时可以通过 iframeEle.contentWindow.name 来获取到上个页面设置的name.
     * 达到数据传输的目的
     */

    // 案例打开 http://sub.localhost.com/a.html

    /**
     原理: window对象有个name属性，该属性有个特征：
     即在一个窗口(window)的生命周期内,窗口载入的所有的页面都是共享一个window.name的，
     每个页面对window.name都有读写的权限，window.name是持久存在一个窗口载入过的所有页面中的。
     window.name属性的神奇之处在于name 值在不同的页面（甚至不同域名）加载后依旧存在
    （如果没修改则值不会变化），并且可以支持非常长的 name 值（2MB）。
    */

    // 案例打开 http://localhost.com/static/iframe.html

    /**
     * 通过 H5 的 postMessage 传递信息
     * iframeEle.contentWindow.postMessage(msg, url) 来向子域名发送消息,
     * iframe中 window.onmessage(fn) 来监听消息, 并通过 window.parent.postMessage(msg, '*') 来向父页面发送消息
     * 父页面通过 window.onmessage(fn) 来监听子页面发的消息,
     */
    let iii = 0;
    let popupWin;
    window.addEventListener('message', function (event) {
        let msg = event.data; // message数据
        let source = event.source; // 源窗口对象
        let origin = event.origin; // 源url地址
        if (msg && msg.type === 'popup') {
            let _popupmsg = {
                type: 'popup',
                data: '我是popup父窗口',
                num: 777
            };
            console.log('source:', source);
            source.postMessage(_popupmsg, '*');
        } else if (msg && msg.type === 'iframe') {
            let msg = {
                type: 'iframe',
                data: iii++
            }
            iframePostMsg.contentWindow.postMessage(msg, 'http://sub.localhost.com/postMsg.html');
        }
    });
    const iframePostMsg = window.iframePostMsg = document.createElement('iframe');
    iframePostMsg.src = 'http://sub.localhost.com/postMsg.html';
    iframePostMsg.onload = function () {
        // iframePostMsg.contentWindow.postMessage('hello, 我是父页面', 'http://sub.localhost.com/postMsg.html');
    }
    document.body.appendChild(iframePostMsg);

    // 跨窗口通信, 新建的跨域的窗口无法监听到新窗口的 onload事件, 因此要给子窗口postMessage, 可以通过设置一个延时来实现.
    // 或者在子窗口中监听页面的onload事件, 然后给父窗口发个postMessage通知自己加载完成.
    popupWin = window.popupWin = window.open('http://sub.localhost.com/postMsg.html');
    let _popupmsg = {
        type: 'popup',
        data: '我是popup父窗口',
        num: 0
    };
    setTimeout(function () {
        popupWin.postMessage(_popupmsg, '*');
    }, 5000);
    console.log('popupWin:', popupWin);
}