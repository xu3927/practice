/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = crossByiframe;
// 通过iframe跨域
function crossByiframe() {
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
    };
    var contetEle = document.querySelector("#content");
    var iframe = document.createElement('iframe');
    iframe.name = 'childIframe';
    iframe.src = 'http://sub.localhost.com/huashan.html';
    contetEle.appendChild(iframe);
    iframe.ondload = function () {
        // 调用子frame中的方法
        window.childIframe.window.childFn();
    };

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
     * 案例同 location.hash
     */
    var iframeByName = document.createElement('iframe');
    var origin = document.location.origin;
    iframeByName.src = 'http://sub.localhost.com/byName.html';
    iframeByName.onload = function () {
        console.log('iframeByName:', iframeByName.contentWindow && iframeByName.contentWindow.name);
    };
    setTimeout(function () {
        iframeByName.src = origin + '/proxy.html';
    }, 2000);
    document.body.appendChild(iframeByName);
}

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = Jsonp;
// jsonp 跨域. 利用script标签可以跨域请求资源的特性, 把函数的调用放在服务端的文件中.把函数的定义放在本地. 来获取数据
function Jsonp() {
    // 封装通用jsonp函数
    function jsonp(url, callbackName, callback) {
        callbackName = callbackName || 'callbackName';
        window[callbackName] = function (data) {
            callback(data);
        };
        var scriptEle = document.createElement('script');
        document.body.appendChild(scriptEle);
        scriptEle.src = url + callbackName;
        document.body.removeChild(scriptEle);
    }
    // 测试jsonp跨域轮子
    jsonp('http://sub.localhost.com/jsonp?callback=', 'haha', function (res) {
        console.log('res:', res);
    });
}

/***/ }),
/* 2 */,
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _iframe = __webpack_require__(0);

var _iframe2 = _interopRequireDefault(_iframe);

var _jsonp = __webpack_require__(1);

var _jsonp2 = _interopRequireDefault(_jsonp);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * 跨域练习
 * 可以通过在chrome的插件switchOmega 中配置域名转发来测试跨域
 */
(0, _iframe2.default)();
(0, _jsonp2.default)();

exports.default = {
  a: '啊啊啊'
};

/***/ })
/******/ ]);