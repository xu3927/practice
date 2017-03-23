/**
 * stream 是js中封装的用来处理数据流的对象
 * stream 有四种类型
 * readable, writable, duplex, transform
 */
let fs = require('fs');
let stream_read = './config_readStream.json';
let stream_write = './config_writeStream.json';

// fs 模块中封装了stream, 可以利用fs模块来创建读, 写流
// 创建读取流
let rs = fs.createReadStream(stream_read);
console.log('rs:', rs);
// 写入流
let ws = fs.createWriteStream(stream_write);
// 设置流
rs.pipe(ws);

// let ev = require('stream');