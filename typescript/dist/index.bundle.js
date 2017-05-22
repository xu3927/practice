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
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function basicType() {
    var str = '我是string';
    var num = 999;
    /** 数组类型 **/
    // 定义数组有2种形式
    var arr = [1, 2, 3]; // 元素类型 + []
    var arr2 = ['哈哈', '嘻嘻', '么么哒']; // Array + 元素类型
    // Tuple 类型数组
    var tuple1; // 指定原数组类型, 超出定义的元素会遵循格式 [string|number]
    tuple1 = ['华山派', 99]; // 正确定义
    // tuple1 = [999, '华山派']; 错误, 第0位定义的是string, 第1位定义的是number.
    var _s = tuple1[0].substr(0); // 正确, string有substr方法
    // let _s = tuple1[0].substr(1); // 错误, number类型没有substr方法
    tuple1 = ['华山派', 99, 8766, '嵩山派']; // 正确
    var tuple2; // 指定元素是string或number
    tuple2 = ['华山派', 99]; // 正确定义
    tuple2 = [999, '华山派']; // 正确定义
    console.log(str, num, arr, arr2, tuple1, tuple2);
    /**
     * Enum 枚举类型 **
     * 枚举类型可以用来定义一组有名的数值常量 (enum is helpful to standard a set of datatypes)
     * 可以通过name来获取数值, 也可以通过数值来获取该值的name
     * enum类型下标默认从0开始, 递增, 也可以给成员指定下标
     */
    var Color;
    (function (Color) {
        Color[Color["Red"] = 0] = "Red";
        Color[Color["Blue"] = 888] = "Blue";
        Color[Color["Green"] = 889] = "Green";
    })(Color || (Color = {}));
    ;
    var r = Color.Red; // 0
    var b = Color.Blue; // 888
    var g = Color.Green; // 889 没有指定的值会递增
    var ColorName = Color[888]; // 通过值获取名称 Blue
    console.log(b, g, ColorName);
    ;
    var d = 0 /* Sunday */;
    console.log('d:', d);
    /**
     * Any 类型
     * 不指定类型, 在编译时确定, 可以赋值为任何类型, 该类型可以很好的适配js.
     */
    var notSure = 999;
    notSure = '九阴真经';
    notSure = true;
    console.log('notSure:', notSure);
    /**
     * Void 类型, 只能被赋值为null 或 undefined.
     * 对于没有返回值的函数可以使用该类型
     */
    function noValReturn(a, b) {
        console.log(a + b);
    }
    noValReturn(2, 6);
    var unusable = null;
    unusable = undefined;
    console.log('unusable', unusable);
    /**
     * Null and undefined
     * 其他基本类型如string / number 等可以被赋值为null / undefined
     */
    var n = null;
    var u = undefined;
    // n = undefined; // 报错
    var s = '九阴真经';
    s = undefined; // 正确
    s = null; // 正确
    console.log(n, u, s);
    /**
     * Type assertion
     */
    var activity = '华山论剑';
    // <>语法
    var len = activity.length;
    // as 语法
    var len2 = activity.length;
    console.log(len, len2);
}
exports.default = basicType;


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var content_tpl_js_1 = __webpack_require__(4);
__webpack_require__(6);
document.querySelector('#content').innerHTML = content_tpl_js_1.default;


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * destructuring 解构 和 spread operator 扩展运算符
 * 可以对数组或对象解构
 */
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
function destructuring() {
    // 数组解构
    var menpai = ['华山派', '嵩山派', '衡山派', '少林寺'];
    var huashan = menpai[0], songshan = menpai[1], rest = menpai.slice(2); // 利用解构语法创建了3个新的变量huashan, songshan, rest
    console.log(huashan, songshan, rest); // 输出: 华山派 嵩山派 ["衡山派", "少林寺"]
    // 只获取需要的值
    var str1 = menpai[1], str2 = menpai[3];
    console.log('str1:', str1, 'str2:', str2); // 输出: str1: 嵩山派 str2: 少林寺
    // 对象解构
    var linghuchong = {
        name: '令狐冲',
        sex: 'male',
        age: 19,
        skill: '独孤九剑'
    };
    var name = linghuchong.name, age = linghuchong.age; // 创建2个新的变量 name, age
    console.log('name', name, 'age', age); // 输出:  name 令狐冲 age 19
    // 对象也可以使用rest语法
    var sex = linghuchong.sex, restVal = __rest(linghuchong, ["sex"]);
    console.log('sex:', sex, 'restVal:', restVal); // 输出: sex: male ; restVal: {name: "令狐冲", age: 19, skill: "独孤九剑"}
    // spread operator 扩展运算符 ...
    // 数组
    var skill1 = ['独孤九剑', '易筋经'];
    var skill2 = ['吸星大法', '冲灵剑法'];
    var skillAll = skill1.concat(skill2);
    console.log(skillAll);
    /**
     * 扩展object
     * 后面的属性会覆盖前面的属性
     * 只能扩展自身的可枚举的(enumerable)属性, 不会扩展原型链上的.
     */
    var man = {
        name: 'man',
        arms: 2
    };
    var newPerson = __assign({}, man, linghuchong);
    var newPerson2 = __assign({}, linghuchong, man);
    console.log('newPerson:', newPerson); // 输出: {name: "令狐冲", arms: 2, sex: "male", age: 19, skill: "独孤九剑"}
    console.log('newPerson2:', newPerson2); // 输出: {name: "man", sex: "male", age: 19, skill: "独孤九剑", arms: 2}
    var People = (function () {
        function People() {
            this.name = 'people';
        }
        People.prototype.say = function () {
            console.log('I am ' + this.name);
        };
        return People;
    }());
    var instance = new People();
    console.log('newObject:', __assign({}, instance, linghuchong)); // 输出 {name: "令狐冲", sex: "male", age: 19, skill: "独孤九剑"}, 无法扩展 say 方法
}
exports.default = destructuring;


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/** 接口 **/
function interfaces() {
    // 接口类型检测的简单实例
    // 接口只说明所需的属性及其类型. 不关心多余的值
    function say(people) {
        console.log('my name is' + people.name);
    }
    var linghuchong = { name: '令狐冲', age: 19 };
    say(linghuchong);
    function say2(people) {
        console.log('my name is' + people.name);
    }
    say2(linghuchong);
}
exports.default = interfaces;


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var tpl = "<div class=\"content\">\n    <h3>\u6211\u662F\u5185\u5BB9</h3>\n    <h3>\u5357\u65E0\u963F\u5F25\u9640\u4F5B</h3>\n</div>";
exports.default = tpl;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _basicType = __webpack_require__(0);

var _basicType2 = _interopRequireDefault(_basicType);

var _destructuring = __webpack_require__(2);

var _destructuring2 = _interopRequireDefault(_destructuring);

var _interfaces = __webpack_require__(3);

var _interfaces2 = _interopRequireDefault(_interfaces);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

__webpack_require__(1);


// basicType();
// destructuring();
(0, _interfaces2.default)();

module.exports = {
    name: '哈哈'
};

/***/ }),
/* 6 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZjczOTEyYWUxZmI4OTc2MDZiZDgiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Jhc2ljLXR5cGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnRlbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Rlc3RydWN0dXJpbmcudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ludGVyZmFjZXMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnRlbnQudHBsLmpzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29udGVudC5zY3NzIl0sIm5hbWVzIjpbInRwbCIsInJlcXVpcmUiLCJtb2R1bGUiLCJleHBvcnRzIiwibmFtZSJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxtREFBMkMsY0FBYzs7QUFFekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7O0FDaEVBO0lBQ0ksSUFBSSxHQUFHLEdBQVcsVUFBVSxDQUFDO0lBQzdCLElBQUksR0FBRyxHQUFXLEdBQUcsQ0FBQztJQUN0QixZQUFZO0lBQ1osWUFBWTtJQUNaLElBQUksR0FBRyxHQUFhLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLFlBQVk7SUFDM0MsSUFBSSxJQUFJLEdBQWtCLENBQUMsSUFB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QUNWO0lBQ0ksY0FBYztJQUNkLDBCQUEwQjtJQUMxQixhQUFjLE1BQXNCO1FBQ2hDLE9BQU8sQ0FBQyxHQUFHLENBQUMsWUFBWSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM1QyxDQUFDO0lBQ0QsSUFBSSxXQUFXLEdBQUcsRUFBQyxJQUFJLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUMsQ0FBQztJQUN6QyxHQUFHLENBQUMsV0FBVyxDQUFDLENBQUM7SUFNakIsY0FBZ0IsTUFBTTtRQUNsQixPQUFPLENBQUMsR0FBRyxDQUFDLFlBQVksR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDNUMsQ0FBQztJQUNELElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztBQUN0QixDQUFDO0FBQ0Qsa0JBQWUsVUFBVSxDQUFDOzs7Ozs7Ozs7Ozs7O0FDbkIxQixJQUFNQSxpSUFBTjtrQkFJZUEsRzs7Ozs7Ozs7O0FDSGY7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7QUFIQSxtQkFBQUMsQ0FBUSxDQUFSOzs7QUFLQTtBQUNBO0FBQ0E7O0FBRUFDLE9BQU9DLE9BQVAsR0FBaUI7QUFDYkMsVUFBTTtBQURPLENBQWpCLEM7Ozs7OztBQ1RBLHlDIiwiZmlsZSI6ImluZGV4LmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGlkZW50aXR5IGZ1bmN0aW9uIGZvciBjYWxsaW5nIGhhcm1vbnkgaW1wb3J0cyB3aXRoIHRoZSBjb3JyZWN0IGNvbnRleHRcbiBcdF9fd2VicGFja19yZXF1aXJlX18uaSA9IGZ1bmN0aW9uKHZhbHVlKSB7IHJldHVybiB2YWx1ZTsgfTtcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gNSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgZjczOTEyYWUxZmI4OTc2MDZiZDgiLCJmdW5jdGlvbiBiYXNpY1R5cGUgKCkge1xuICAgIGxldCBzdHI6IHN0cmluZyA9ICfmiJHmmK9zdHJpbmcnO1xuICAgIGxldCBudW06IG51bWJlciA9IDk5OTtcbiAgICAvKiog5pWw57uE57G75Z6LICoqL1xuICAgIC8vIOWumuS5ieaVsOe7hOaciTLnp43lvaLlvI9cbiAgICBsZXQgYXJyOiBudW1iZXJbXSA9IFsxLCAyLCAzXTsgLy8g5YWD57Sg57G75Z6LICsgW11cbiAgICBsZXQgYXJyMjogQXJyYXk8c3RyaW5nPiA9IFsn5ZOI5ZOIJywgJ+WYu+WYuycsICfkuYjkuYjlk5InXTsgLy8gQXJyYXkgKyDlhYPntKDnsbvlnotcbiAgICAvLyBUdXBsZSDnsbvlnovmlbDnu4RcbiAgICBsZXQgdHVwbGUxOiBbc3RyaW5nLCBudW1iZXJdOyAvLyDmjIflrprljp/mlbDnu4TnsbvlnossIOi2heWHuuWumuS5ieeahOWFg+e0oOS8mumBteW+quagvOW8jyBbc3RyaW5nfG51bWJlcl1cbiAgICB0dXBsZTEgPSBbJ+WNjuWxsea0vicsIDk5XTsgLy8g5q2j56Gu5a6a5LmJXG4gICAgLy8gdHVwbGUxID0gWzk5OSwgJ+WNjuWxsea0viddOyDplJnor68sIOesrDDkvY3lrprkuYnnmoTmmK9zdHJpbmcsIOesrDHkvY3lrprkuYnnmoTmmK9udW1iZXIuXG4gICAgbGV0IF9zID0gdHVwbGUxWzBdLnN1YnN0cigwKTsgLy8g5q2j56GuLCBzdHJpbmfmnIlzdWJzdHLmlrnms5VcbiAgICAvLyBsZXQgX3MgPSB0dXBsZTFbMF0uc3Vic3RyKDEpOyAvLyDplJnor68sIG51bWJlcuexu+Wei+ayoeaciXN1YnN0cuaWueazlVxuICAgIHR1cGxlMSA9IFsn5Y2O5bGx5rS+JywgOTksIDg3NjYsICfltanlsbHmtL4nXTsgLy8g5q2j56GuXG4gICAgbGV0IHR1cGxlMjogW3N0cmluZ3xudW1iZXJdOyAvLyDmjIflrprlhYPntKDmmK9zdHJpbmfmiJZudW1iZXJcbiAgICB0dXBsZTIgPSBbJ+WNjuWxsea0vicsIDk5XTsgLy8g5q2j56Gu5a6a5LmJXG4gICAgdHVwbGUyID0gWzk5OSwgJ+WNjuWxsea0viddOyAvLyDmraPnoa7lrprkuYlcbiAgICBjb25zb2xlLmxvZyhzdHIsIG51bSwgYXJyLCBhcnIyLCB0dXBsZTEsIHR1cGxlMik7XG5cbiAgICAvKipcbiAgICAgKiBFbnVtIOaemuS4vuexu+WeiyAqKlxuICAgICAqIOaemuS4vuexu+Wei+WPr+S7peeUqOadpeWumuS5ieS4gOe7hOacieWQjeeahOaVsOWAvOW4uOmHjyAoZW51bSBpcyBoZWxwZnVsIHRvIHN0YW5kYXJkIGEgc2V0IG9mIGRhdGF0eXBlcylcbiAgICAgKiDlj6/ku6XpgJrov4duYW1l5p2l6I635Y+W5pWw5YC8LCDkuZ/lj6/ku6XpgJrov4fmlbDlgLzmnaXojrflj5bor6XlgLznmoRuYW1lXG4gICAgICogZW51beexu+Wei+S4i+agh+m7mOiupOS7jjDlvIDlp4ssIOmAkuWiniwg5Lmf5Y+v5Lul57uZ5oiQ5ZGY5oyH5a6a5LiL5qCHXG4gICAgICovXG4gICAgZW51bSBDb2xvciB7UmVkLCBCbHVlID0gODg4LCBHcmVlbn07XG4gICAgbGV0IHI6IENvbG9yID0gQ29sb3IuUmVkOyAvLyAwXG4gICAgbGV0IGI6IENvbG9yID0gQ29sb3IuQmx1ZTsgLy8gODg4XG4gICAgbGV0IGc6IENvbG9yID0gQ29sb3IuR3JlZW47IC8vIDg4OSDmsqHmnInmjIflrprnmoTlgLzkvJrpgJLlop5cbiAgICBsZXQgQ29sb3JOYW1lID0gQ29sb3JbODg4XTsgLy8g6YCa6L+H5YC86I635Y+W5ZCN56ewIEJsdWVcbiAgICBjb25zb2xlLmxvZyhiLCBnLCBDb2xvck5hbWUpO1xuICAgIC8vIOW4uOaVsOaemuS4vuexu+Weiywg5Zyo57yW6K+R5ZCO5p6a5Li+5a6a5LmJ5Lya6KKr5Yig6ZmkLCDlj6rkv53nlZnmiJDlkZjlvJXnlKjnmoTlgLwuXG4gICAgY29uc3QgZW51bSBXZWVrIHtcbiAgICAgICAgU3VuZGF5LFxuICAgICAgICBNb25kYXksXG4gICAgICAgIFR1ZXNkYXksXG4gICAgICAgIFNhdHVyZGF5ID0gNlxuICAgIH07XG4gICAgbGV0IGQ6V2VlayA9IFdlZWsuU3VuZGF5O1xuICAgIGNvbnNvbGUubG9nKCdkOicsIGQpO1xuXG4gICAgLyoqXG4gICAgICogQW55IOexu+Wei1xuICAgICAqIOS4jeaMh+Wumuexu+Weiywg5Zyo57yW6K+R5pe256Gu5a6aLCDlj6/ku6XotYvlgLzkuLrku7vkvZXnsbvlnossIOivpeexu+Wei+WPr+S7peW+iOWlveeahOmAgumFjWpzLlxuICAgICAqL1xuICAgIGxldCBub3RTdXJlOiBhbnkgPSA5OTk7XG4gICAgbm90U3VyZSA9ICfkuZ3pmLTnnJ/nu48nO1xuICAgIG5vdFN1cmUgPSB0cnVlO1xuICAgIGNvbnNvbGUubG9nKCdub3RTdXJlOicsIG5vdFN1cmUpO1xuXG4gICAgLyoqXG4gICAgICogVm9pZCDnsbvlnossIOWPquiDveiiq+i1i+WAvOS4um51bGwg5oiWIHVuZGVmaW5lZC5cbiAgICAgKiDlr7nkuo7msqHmnInov5Tlm57lgLznmoTlh73mlbDlj6/ku6Xkvb/nlKjor6XnsbvlnotcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBub1ZhbFJldHVybiAoYSwgYik6IHZvaWQge1xuICAgICAgICBjb25zb2xlLmxvZyhhICsgYik7XG4gICAgfVxuICAgIG5vVmFsUmV0dXJuKDIsIDYpO1xuICAgIGxldCB1bnVzYWJsZTogdm9pZCA9IG51bGw7XG4gICAgdW51c2FibGUgPSB1bmRlZmluZWQ7XG4gICAgY29uc29sZS5sb2coJ3VudXNhYmxlJywgdW51c2FibGUpO1xuXG4gICAgLyoqXG4gICAgICogTnVsbCBhbmQgdW5kZWZpbmVkXG4gICAgICog5YW25LuW5Z+65pys57G75Z6L5aaCc3RyaW5nIC8gbnVtYmVyIOetieWPr+S7peiiq+i1i+WAvOS4um51bGwgLyB1bmRlZmluZWRcbiAgICAgKi9cbiAgICBsZXQgbjogbnVsbCA9IG51bGw7XG4gICAgbGV0IHU6IHVuZGVmaW5lZCA9IHVuZGVmaW5lZDtcbiAgICAvLyBuID0gdW5kZWZpbmVkOyAvLyDmiqXplJlcbiAgICBsZXQgczogc3RyaW5nID0gJ+S5nemYtOecn+e7jyc7XG4gICAgcyA9IHVuZGVmaW5lZDsgLy8g5q2j56GuXG4gICAgcyA9IG51bGw7IC8vIOato+ehrlxuICAgIGNvbnNvbGUubG9nKG4sIHUsIHMpO1xuICAgIC8qKlxuICAgICAqIFR5cGUgYXNzZXJ0aW9uXG4gICAgICovXG4gICAgbGV0IGFjdGl2aXR5OiBhbnkgPSAn5Y2O5bGx6K665YmRJztcbiAgICAvLyA8PuivreazlVxuICAgIGxldCBsZW46IG51bWJlciA9ICAoPHN0cmluZz5hY3Rpdml0eSkubGVuZ3RoO1xuICAgIC8vIGFzIOivreazlVxuICAgIGxldCBsZW4yOiBudW1iZXIgPSAoYWN0aXZpdHkgYXMgc3RyaW5nKS5sZW5ndGg7XG4gICAgY29uc29sZS5sb2cobGVuLCBsZW4yKTtcbn1cbmV4cG9ydCBkZWZhdWx0ICBiYXNpY1R5cGU7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9zb3VyY2UtbWFwLWxvYWRlciEuL3NyYy9iYXNpYy10eXBlLnRzIiwiaW1wb3J0IHRwbCBmcm9tICcuL2NvbnRlbnQudHBsLmpzJztcbmltcG9ydCAnLi9jb250ZW50LnNjc3MnO1xuXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpLmlubmVySFRNTCA9IHRwbDtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3NvdXJjZS1tYXAtbG9hZGVyIS4vc3JjL2NvbnRlbnQudHMiLCIvKipcbiAqIGRlc3RydWN0dXJpbmcg6Kej5p6EIOWSjCBzcHJlYWQgb3BlcmF0b3Ig5omp5bGV6L+Q566X56ymXG4gKiDlj6/ku6Xlr7nmlbDnu4TmiJblr7nosaHop6PmnoRcbiAqL1xuXG5mdW5jdGlvbiBkZXN0cnVjdHVyaW5nICgpOiB2b2lkIHtcbiAgICAvLyDmlbDnu4Top6PmnoRcbiAgICBsZXQgbWVucGFpOiBzdHJpbmdbXSA9IFsn5Y2O5bGx5rS+JywgJ+W1qeWxsea0vicsICfooaHlsbHmtL4nLCAn5bCR5p6X5a+6J107XG4gICAgbGV0IFtodWFzaGFuLCBzb25nc2hhbiwgLi4ucmVzdF0gPSBtZW5wYWk7IC8vIOWIqeeUqOino+aehOivreazleWIm+W7uuS6hjPkuKrmlrDnmoTlj5jph49odWFzaGFuLCBzb25nc2hhbiwgcmVzdFxuICAgIGNvbnNvbGUubG9nKGh1YXNoYW4sIHNvbmdzaGFuLCByZXN0KTsgLy8g6L6T5Ye6OiDljY7lsbHmtL4g5bWp5bGx5rS+IFtcIuihoeWxsea0vlwiLCBcIuWwkeael+WvulwiXVxuICAgIC8vIOWPquiOt+WPlumcgOimgeeahOWAvFxuICAgIGxldCBbLCBzdHIxLCAsIHN0cjJdID0gbWVucGFpO1xuICAgIGNvbnNvbGUubG9nKCdzdHIxOicsIHN0cjEsICdzdHIyOicsIHN0cjIpOyAvLyDovpPlh7o6IHN0cjE6IOW1qeWxsea0viBzdHIyOiDlsJHmnpflr7pcbiAgICAvLyDlr7nosaHop6PmnoRcbiAgICBsZXQgbGluZ2h1Y2hvbmcgPSB7XG4gICAgICAgIG5hbWU6ICfku6Tni5DlhrInLFxuICAgICAgICBzZXg6ICdtYWxlJyxcbiAgICAgICAgYWdlOiAxOSxcbiAgICAgICAgc2tpbGw6ICfni6zlraTkuZ3liZEnXG4gICAgfTtcbiAgICBsZXQge25hbWUsIGFnZX0gPSBsaW5naHVjaG9uZzsgLy8g5Yib5bu6MuS4quaWsOeahOWPmOmHjyBuYW1lLCBhZ2VcbiAgICBjb25zb2xlLmxvZygnbmFtZScsIG5hbWUsICdhZ2UnLCBhZ2UpOyAvLyDovpPlh7o6ICBuYW1lIOS7pOeLkOWGsiBhZ2UgMTlcbiAgICAvLyDlr7nosaHkuZ/lj6/ku6Xkvb/nlKhyZXN06K+t5rOVXG4gICAgbGV0IHtzZXgsIC4uLnJlc3RWYWx9ID0gbGluZ2h1Y2hvbmc7XG4gICAgY29uc29sZS5sb2coJ3NleDonLCBzZXgsICdyZXN0VmFsOicsIHJlc3RWYWwpOyAvLyDovpPlh7o6IHNleDogbWFsZSA7IHJlc3RWYWw6IHtuYW1lOiBcIuS7pOeLkOWGslwiLCBhZ2U6IDE5LCBza2lsbDogXCLni6zlraTkuZ3liZFcIn1cblxuICAgIC8vIHNwcmVhZCBvcGVyYXRvciDmianlsZXov5DnrpfnrKYgLi4uXG4gICAgLy8g5pWw57uEXG4gICAgbGV0IHNraWxsMTogc3RyaW5nW10gPSBbJ+eLrOWtpOS5neWJkScsICfmmJPnrYvnu48nXTtcbiAgICBsZXQgc2tpbGwyOiBzdHJpbmdbXSA9IFsn5ZC45pif5aSn5rOVJywgJ+WGsueBteWJkeazlSddO1xuICAgIGxldCBza2lsbEFsbDogQXJyYXk8c3RyaW5nPiA9IFsuLi5za2lsbDEsIC4uLnNraWxsMl07XG4gICAgY29uc29sZS5sb2coc2tpbGxBbGwpO1xuICAgIC8qKlxuICAgICAqIOaJqeWxlW9iamVjdFxuICAgICAqIOWQjumdoueahOWxnuaAp+S8muimhuebluWJjemdoueahOWxnuaAp1xuICAgICAqIOWPquiDveaJqeWxleiHqui6q+eahOWPr+aemuS4vueahChlbnVtZXJhYmxlKeWxnuaApywg5LiN5Lya5omp5bGV5Y6f5Z6L6ZO+5LiK55qELlxuICAgICAqL1xuICAgIGxldCBtYW4gPSB7XG4gICAgICAgIG5hbWU6ICdtYW4nLFxuICAgICAgICBhcm1zOiAyXG4gICAgfTtcbiAgICBsZXQgbmV3UGVyc29uID0gey4uLm1hbiwgLi4ubGluZ2h1Y2hvbmd9O1xuICAgIGxldCBuZXdQZXJzb24yID0gey4uLmxpbmdodWNob25nLCAuLi5tYW59O1xuICAgIGNvbnNvbGUubG9nKCduZXdQZXJzb246JywgbmV3UGVyc29uKTsgLy8g6L6T5Ye6OiB7bmFtZTogXCLku6Tni5DlhrJcIiwgYXJtczogMiwgc2V4OiBcIm1hbGVcIiwgYWdlOiAxOSwgc2tpbGw6IFwi54us5a2k5Lmd5YmRXCJ9XG4gICAgY29uc29sZS5sb2coJ25ld1BlcnNvbjI6JywgbmV3UGVyc29uMik7IC8vIOi+k+WHujoge25hbWU6IFwibWFuXCIsIHNleDogXCJtYWxlXCIsIGFnZTogMTksIHNraWxsOiBcIueLrOWtpOS5neWJkVwiLCBhcm1zOiAyfVxuICAgIGNsYXNzIFBlb3BsZSB7XG4gICAgICAgIG5hbWUgPSAncGVvcGxlJztcbiAgICAgICAgc2F5ICgpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdJIGFtICcgKyB0aGlzLm5hbWUpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGxldCBpbnN0YW5jZSA9IG5ldyBQZW9wbGUoKTtcbiAgICBjb25zb2xlLmxvZygnbmV3T2JqZWN0OicsIHsuLi5pbnN0YW5jZSwgLi4ubGluZ2h1Y2hvbmd9KTsgLy8g6L6T5Ye6IHtuYW1lOiBcIuS7pOeLkOWGslwiLCBzZXg6IFwibWFsZVwiLCBhZ2U6IDE5LCBza2lsbDogXCLni6zlraTkuZ3liZFcIn0sIOaXoOazleaJqeWxlSBzYXkg5pa55rOVXG59XG5cbmV4cG9ydCBkZWZhdWx0IGRlc3RydWN0dXJpbmc7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9zb3VyY2UtbWFwLWxvYWRlciEuL3NyYy9kZXN0cnVjdHVyaW5nLnRzIiwiLyoqIOaOpeWPoyAqKi9cbmZ1bmN0aW9uIGludGVyZmFjZXMgKCk6IHZvaWQge1xuICAgIC8vIOaOpeWPo+exu+Wei+ajgOa1i+eahOeugOWNleWunuS+i1xuICAgIC8vIOaOpeWPo+WPquivtOaYjuaJgOmcgOeahOWxnuaAp+WPiuWFtuexu+Weiy4g5LiN5YWz5b+D5aSa5L2Z55qE5YC8XG4gICAgZnVuY3Rpb24gc2F5IChwZW9wbGU6IHtuYW1lOiBzdHJpbmd9KSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdteSBuYW1lIGlzJyArIHBlb3BsZS5uYW1lKTtcbiAgICB9XG4gICAgbGV0IGxpbmdodWNob25nID0ge25hbWU6ICfku6Tni5DlhrInLCBhZ2U6IDE5fTtcbiAgICBzYXkobGluZ2h1Y2hvbmcpO1xuXG4gICAgLy8g5L2/55SoaW50ZXJmYWNlXG4gICAgaW50ZXJmYWNlIHBlb3BsZSB7XG4gICAgICAgIG5hbWU6IHN0cmluZ1xuICAgIH1cbiAgICBmdW5jdGlvbiAgc2F5MiAocGVvcGxlKTp2b2lkIHtcbiAgICAgICAgY29uc29sZS5sb2coJ215IG5hbWUgaXMnICsgcGVvcGxlLm5hbWUpO1xuICAgIH1cbiAgICBzYXkyKGxpbmdodWNob25nKTtcbn1cbmV4cG9ydCBkZWZhdWx0IGludGVyZmFjZXM7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9zb3VyY2UtbWFwLWxvYWRlciEuL3NyYy9pbnRlcmZhY2VzLnRzIiwiY29uc3QgdHBsID0gYDxkaXYgY2xhc3M9XCJjb250ZW50XCI+XG4gICAgPGgzPuaIkeaYr+WGheWuuTwvaDM+XG4gICAgPGgzPuWNl+aXoOmYv+W8pemZgOS9mzwvaDM+XG48L2Rpdj5gO1xuZXhwb3J0IGRlZmF1bHQgdHBsO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb250ZW50LnRwbC5qcyIsInJlcXVpcmUoJy4vY29udGVudC50cycpO1xuaW1wb3J0IGJhc2ljVHlwZSBmcm9tICcuL2Jhc2ljLXR5cGUudHMnO1xuaW1wb3J0IGRlc3RydWN0dXJpbmcgZnJvbSAnLi9kZXN0cnVjdHVyaW5nLnRzJztcbmltcG9ydCBpbnRlcmZhY2VzIGZyb20gJy4vaW50ZXJmYWNlcy50cyc7XG5cbi8vIGJhc2ljVHlwZSgpO1xuLy8gZGVzdHJ1Y3R1cmluZygpO1xuaW50ZXJmYWNlcygpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgICBuYW1lOiAn5ZOI5ZOIJ1xufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvaW5kZXguanMiLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2NvbnRlbnQuc2Nzc1xuLy8gbW9kdWxlIGlkID0gNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9