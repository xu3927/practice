let log1 = require('debug')('test:type1')
let log2 = require('debug')('test:type2')
let log3 = require('debug')('test:type3')

/**
 * debug 库用来给输出添加颜色
 * 可以给特定输出定义一个类型，然后调用该类型输出。 执行时通过指定环境变量输出特定的 log
 * 如 log1 = require('debug')('test:type1') 定义一种 log
 * 执行 DEBUG=test:type1 node debug-output-style.js 则输出 log1 的内容
 * 设置 DEBUG 变量的值可以用通配符  DEBUG=test:type* node debug-output-style.js 则3种类型都会输出
 */

log1('test1:', 111)
log1('test2:', 222)
log1('test3:', 333)
log2('test1:', 111)
log2('test2:', 222)
log2('test3:', 333)
log3('test1:', 111)
log3('test2:', 222)
log3('test3:', 333)

