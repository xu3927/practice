# IndexDB

文档 https://developer.mozilla.org/zh-CN/docs/Web/API/IndexedDB_API

##  Basic concepts 基本概念

https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API/Basic_Concepts_Behind_IndexedDB#About_this_document

### Big concepts 主要概念

1. IndexedDB 存储 key-value 对

value 可以是复杂对象, 可以使用任意 key 作为索引用于快速查询或排序. keys 可以是二进制对象(binary objects)

2. IndexedDB 基于事务型数据库模型构建

对 IdexedDB 的操作, 总是会在处于  transaction 上下文中. IndexedDB 的 API 提供的 indexes, tables, cursors 都是与具体的某个 transaction 相联系的. 因此不能脱离事务打开 cursors. Transactions 具有生命周期, 会自动提交, 不需要手动操作, 因此如果事务提交之后再调用会报错.

3. 大部分接口都是异步

操作完成后触发回调函数

4. IndexedDB uses a lot of requests

Requests 对象有 onsuccess and onerror 事件, 以及 readyState, result, and errorCode 属性

5. IndexedDB 使用 DOM 事件通知结果.

拥有success" or "error", target 属性. success 事件不会冒泡, 也不能取消. Error 事件 会冒泡, 可以被 caceled. 错误事件会阻止当前事务的运行, 除非捕获错误并取消该错误.

6. IndexedDB 是面向对象的

IndexedDB 是非关系型数据库. 表里不是存放 rows 和 columns 的集合. value 通常是持久化的 JS 对象

7. IndexedDB 不使用 SQL 语法

它创建一个 cursor, 用于遍历结果

8. IndexedDB 遵守同源策略

### Database

#### database

一个数据库, 包含 name 和 版本 属性

- Name: 字符串, 可以是空字符串
- Current version: 首次创建时值默认是 1, 每个 database 同一时间只能有一个版本

#### durable

当系统被告知可以写的时候就会触发 IDBTransaction.oncomplete 事件. 此时数据尚未保存到硬盘, 若出现系统 crash, 则会丢失数据.

#### object store

即数据库中存储的数据对象. 以键值对保存, 同时以 keys 的升序排列

每个 object store 都必须有一个唯一的 name. key 生成器和 key path 是可选的. 如果设置了  key path, 就会使用 in-line keys. 否则就使用 out-of-line keys

#### version

database 首次创建时, 默认是 1, 也可以指定. 每个 database 在同一时间只能有1个版本. 
升级版本则需要以一个更大的版本打开数据库, 此时会进入 versionchange 事务, 并触发  upgradeneeded 事件. 在该事件中可以更新版本

#### database connection

一个数据库可以同时有多个连接

#### transaction 事务

对 database 进行的查询或更新的原子操作. 也是与 database 进行的数据交互. 实际上任何读写操作都建立在一个事务上

一个数据库可以同时存在多个活跃的事务

一个事务应该是快速的, 对于耗时太久的事务会被浏览器终止. 可以自己中止事务, 此时该事务对数据库的改动会回滚.

事务有3种: readwrite, readonly, and versionchange


事务的生命周期: 创建事务后, 当退出事件循环后, 事务就会失活, 只要有待处理的请求, 事务都会保持活跃


#### request

是对database的读写操作

#### index 索引

一个对象仓库，专门用来查找另一个对象仓库（object store）中的记录，其中被查找的对象仓库被称为引用对象仓库。索引（index）是一个稳定的键值对（key-value）存储，其记录中的值（value）是引用对象仓库记录中的键（key）。当引用对象仓库中的记录新增、更新或删除时，索引中的记录会自动的进行粒子性增加。索引中的每一条记录只能指向引用对象仓库中的一条记录，但多个索引可以引用同一个对象仓库。当对象仓库发生改变时，所有引用该对象仓库的引用均会自动更新。

可选地，你也可以适用键（key）再对象仓库中查找记录。

### Key and value

#### key

类型可以是  string, date, float, a binary blob, and array. 
For arrays, the key can range from an empty value to infinity. And you can include an array within an array.

也可以使用 index 查找对象

#### 键生成器  key generator

用于按序生成新的key, 如果对象仓库不包含 key generator,, 那么必须指定 key

生成器在仓库之间并不共享。

#### 内键 in-line key

A key that is stored as part of the stored value. It is found using a key path. An in-line key can be generated using a generator. After the key has been generated, it can then be stored in the value using the key path or it can also be used as a key.

作为值的一部分的 key, 通过 key path 获取. 行内 key 生成后,  保存在 value 中, 即可以使用 key path, 也可以作为 key


#### 外键 out-of-line key

与 value 分开保存成的 key

#### key path

定义 key 的查找路径, 是从对象中还是 index 中查找. 

可以是以下类型
 
an empty string, a JavaScript identifier, or multiple JavaScript identifiers separated by periods or an array containing any of those. It cannot include spaces.

#### value

每项记录都有 value, 类型可以是

 boolean, number, string, date, object, array, regexp, undefined, and null.
 
 ### Range and scope 范围和作用域
 
 #### 作用域 scope
 
 事务所作用的一组对象仓库或索引。只读事务的作用域可以相互重叠并同时执行操作。但写操作事务的作用域不可以相互重叠。但你仍然可以同时开启多个拥有相同作用域的事务，只要保证他们的操作不会同时执行。
 
 
#### 游标（cursor）

在键的某个范围内迭代查询多条记录的机制。游标有一个指向正在被迭代的对象仓库或索引的源。它处于该范围内的一个位置，并按照键的顺序正向或逆向的移动。有关游标的参考文档，查看 IDBCursor 或 IDBCursorSync。
 
#### 键范围 key range

用做键的数据类型上的连续的间隔。使用键或键的某个范围可以从对象仓库和索引中读取记录。你可以通过上限和下限设置和筛选范围。比如，你可以遍历 x 和 y 之间所有的键值。

有关键范围的参考文档，查看 IDBKeyRange.

