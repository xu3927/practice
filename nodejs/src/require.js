/**
* require用来引用module
* 可以require(moduleName/path)
* require有3个属性
* require.cache. 对象, key是各个模块的绝对路径地址. 模块会有缓存. 通过该属性可以获取到缓存的模块内容. delete require.cache(moduleName) 可以删除缓存, 下个require会重新加载模块
* require.resolve() 解析模块路径, 不加载模块, 返回解析后的路径
*/
var path = require('path')
var M = require('./require-export.js')
console.log(M)
// 解析模块的路径
console.log('resolve:', require.resolve('./require-export.js'));
// 得到模块的缓存
console.log(require.cache[path.resolve(__dirname, './require-export.js')]);
// 清除模块缓存
delete require.cache[path.resolve(__dirname, './require-export.js')]
