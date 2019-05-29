let Metalsmith = require('metalsmith')
let path = require('path')

let consolidate = require('consolidate')
console.log(consolidate.ejs)

let render = consolidate.ejs.render;

// 用来处理静态文件，以插件的形式处理。
/**
 * 该文件测试 node src/metasmith/index.js
 * 文档 https://www.npmjs.com/package/metalsmith
 * 主要流程
 * 1. 从 source 目录读取文件
 * 2. 通过插件处理各文件
 * 3. 把结果写入 dest 目录
 */

let srcpath = path.resolve(__dirname, './src-file/')
let destpath = path.resolve(__dirname, './dest-file/')
let metalsmith = new Metalsmith(srcpath)

metalsmith.use(function (files, metalsmith, done) {
    console.log(111)
    // console.log(files, metalsmith)
    done()
})

metalsmith.use(function (files, metalsmith, done) {
    console.log(2222)
    Object.keys(files).forEach(file => {
        const str = files[file].contents.toString();
        render(str, { pkgName: '哈哈哈' })
            .then(res => {
                console.log(res)
                files[file].contents = Buffer.from(res, 'utf-8')
            })
    })

    done()
})

metalsmith.clean()
metalsmith.source('.')
metalsmith.destination(destpath)

metalsmith.build((err, files) => {
    console.log('构建完成')
    if (err) {
        console.error(err)
    }
});