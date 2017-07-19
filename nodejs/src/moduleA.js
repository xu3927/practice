var B = require('./moduleB.js')
B()
console.log('AAA');

/**
* 模块循环引用
* A 引用B, B与C相互引用
* A <-- B <--> C
* 如果遇到循环引用, 会解析失败, 引入的模块是个空对象. 
*/