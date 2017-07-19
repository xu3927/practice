'use strict';

var _A = require('./A.js');

var X = _interopRequireWildcard(_A);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

// require("babel-polyfill"); // polyfill 需要在开始引用
// 在起始入口引入该register文件后, 会添加一个require钩子, 之后require的模块都会经过babel编译
require('babel-core/register');
var A = require('./A.js'); // 该模块会被编译
A();

console.log('X', X);

var arr = [1, 2, 3, 4, 5];
var arr2 = arr.filter(function (item) {
	return item > 2;
});
console.log(arr2);

var obj = {
	foo: function foo() {
		console.log('111');
	}
};
console.log(obj.foo());

var a = 3,
    b = 4,
    c = 5;
var obj2 = { a: a, b: b, c: c };
console.log(obj2);