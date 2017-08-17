require("babel-polyfill"); // polyfill 需要在开始引用
// 在起始入口引入该register文件后, 会添加一个require钩子, 之后require的模块都会经过babel编译
require('babel-core/register')
const A = require('./A.js') // 该模块会被编译
A()

// import * as X from './A.js'
// console.log('X', X);

let arr = [1, 2, 3, 4, 5]
const arr2 = arr.filter(item => {
	return item > 2
})
console.log(arr2);

const obj = {
	foo () {
		console.log('111');
	}
}
console.log(obj.foo());

const a = 3, b = 4, c = 5;
const obj2 = {a, b, c}
console.log(obj2);
