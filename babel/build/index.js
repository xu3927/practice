'use strict';

require("babel-polyfill"); // polyfill 需要在开始引用
// 在起始入口引入该register文件后, 会添加一个require钩子, 之后require的模块都会经过babel编译
require('babel-core/register');
var A = require('./A.js'); // 该模块会被编译
A();

// import * as X from './A.js'
// console.log('X', X);

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