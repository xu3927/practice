/**
 * 参考 http://nodejs.cn/api/buffer.html, https://zhuanlan.zhihu.com/p/24429470?refer=sishu
 * buffer 是node中用来读取操作二进制数据流的类, 在es6的TypedArray引入之前, js中没有操作二进制的机制. 因此node引入了buffer类, 是全局对象的属性.
 * Buffer 类的实例类似于整型数组，不过缓冲区的大小在创建时确定，不能调整。Buffer 对象不同之处在于它不经 V8 的内存分配机制，Buffer 是一个 JavaScript 和 C++ 结合的模块，内存由 C++ 申请，JavaScript 分配。
 * API:
 Buffer.from()
 Buffer.alloc()
 Buffer.allocUnsafe()

 三个单独的，职责清晰的函数处理实例化 Buffer 的工作。

 Buffer.from(array)：返回一个内容包含所提供的字节副本的 Buffer，数组中每一项是一个表示八位字节的数字，所以值必须在 0 ~ 255 之间，否则会取模
 Buffer.from(arrayBuffer)：返回一个与给定的 ArrayBuffer 共享内存的新 Buffer
 Buffer.from(buffer)：返回给定 Buffer 的一个副本 Buffer
 Buffer.from(string [, encoding])：返回一个包含给定字符串的 Buffer
 Buffer.alloc(size [, fill [, encoding]])：返回指定大小并且“已填充”的 Buffer
 Buffer.allocUnsafe(size)：返回指定大小的 Buffer，内容必须用 buf.fill(0) 等方法填充

 Buffer.allocUnsafe() 的执行会快于 Buffer.alloc() 看名字很不安全，确实也不安全。

 当调用 Buffer.allocUnsafe() 时分配的内存段尚未初始化（不归零），这样分配内存速度很块，但分配到的内存片段可能包含旧数据。如果在使用的时候不覆盖这些旧数据就可能造成内存泄露，虽然速度快，尽量避免使用。

 Buffer 支持以下几种编码格式

 ascii
 utf8
 utf16le
 base64
 binary
 hex

 */
// 0x 表示 16 进制

Buffer.from([1, 2, 3]) // [0x1, 0x2, 0x3]

Buffer.from('test', 'utf-8') // [0x74, 0x65, 0x73, 0x74]

Buffer.alloc(5, 1) // [0x1, 0x1, 0x1, 0x1, 0x1]

Buffer.allocUnsafe(5); // 值不确定，后面详谈

// 中文
var bfData = Buffer.from('我是中文', 'utf-8'); // 得到12位, 每个中文占3位, 每位以8进制表示. [230, 136, 145, 230, 152, 175, 228, 184, 173, 230, 150, 135]
var str = bfData.toString('utf-8', 3, 12); // 把buffer数据转为中文, bfData.toString(encoding, [strat, end])

// 拼接
var bfData1 = Buffer.from('我是令狐冲', 'utf-8');
var bfData2 = Buffer.from('我会独孤九剑', 'utf-8');
var length1 = bfData1.length;
var length2 = bfData2.length;
var l = length1 + length2;
var bfDataConcat = Buffer.concat([bfData1, bfData2], l); // Buffer.concat(list[, totalLength]) 连接多个buffer数据, list buffer数据数组, totallength是几个buffer的长度之和, 若不提供该值, 会需要多执行一个循环来计算该值.
var strConcat = bfDataConcat.toString('utf-8'); // 将buffer转为字符串
console.log(bfDataConcat);
console.log('strConcat:', strConcat);

// 新建buffer Buffer.alloc(size[, fill[, encoding]])
var buf = Buffer.alloc(5, 1, 'utf8'); // 新建一个buffer数据, 并填充1, 默认会以0填充
console.log(buf);

// Buffer.allocUnsafe(size) 新建固定长度的 buffer, 不用0填充
// 以这种方式创建的 Buffer 实例的底层内存是未初始化的。 新创建的 Buffer 的内容是未知的，且可能包含敏感数据。 可以使用 buf.fill(0) 初始化 Buffer 实例为0。
var buf2 = Buffer.allocUnsafe(5);
console.log('buf2', buf2);
