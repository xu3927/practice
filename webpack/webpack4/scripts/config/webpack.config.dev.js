const path = require('path')
const fs = require('fs')
var HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const TestPlugin = require('./webpack-test-plugn')
const paths = require('./paths')

const appDirectory = fs.realpathSync(process.cwd())
const resolveApp = (relativePath) => path.resolve(appDirectory, relativePath)

module.exports = {
    mode: 'development',
    /**
     * entry是入口，会生成一个 bundle 文件，有三种形式, object | string | Array<string>
     * 如果是字符串，如 entry: 'path/to/file.js' 则等同于 entry: { main: 'path/to/file.js' }
     *
     */
    // 值为字符串, 需要时 node require 函数的参数字符串，如文件路径或模块名
    // 值为字符串文件路径
    entry: ['react-hot-loader/patch', resolveApp('src/index.js')],
    //  值为模块名字符串
    // entry: {
    //     'my-lodash': 'lodash'
    // },
    // 值为数组, 使用了2个入口文件 a.js, b.js 但是会打包为一个文件 main.js
    // entry: [resolveApp('src/module/a.js'), resolveApp('src/module/b.js')],
    // 值为对象, key 是 output 中的 filename
    //
    // entry: {
    //     index: resolveApp('src/index.js'),
    //     home: resolveApp('src/home.js'),
    // },
    // key 还可以是路径字符串，如下，则会在 dist/path/to 目录下 生成 main.js 文件
    // entry: {
    //     'path/to/main': resolveApp('src/index.js')
    // },
    output: {
        // 导出的目录, 绝对路径
        path: paths.appBuild,
        // library 的使用与libraryTarget的值有关.  libraryTarget 默认值是 'var', 则 library 的值会作为文件导出的变量
        // library: 'libName',
        /**
         * 配置库的导出方式.
         * 1. 直接导出变量: 值可以为 'var' | 'assign'
         * 2. 导出并赋值给对象属性: 值可以为
         * - 'this' 赋值给 this
         * - 'window' 赋值给 window
         * - 'global' 赋值给 global对象
         * - 'commonjs' 赋值给 exports 对象
         * 3. 作为模块系统导出
         * - 'commonjs2' 导出的对象赋值给  module.exports
         * - 'amd' 导出为AMD模块
         * - 'amd-require'
         * - 'umd' 导出为 umd 模块
         */
        libraryTarget: 'umd',
    },
    devtool: 'source-map',
    // 最后输出的模块模式，可以是 web | node 等
    target: 'web',
    // 默认false. 监听文件改变. 只监听 resolved 的文件. 在 webpack-dev-server 中 watch 默认开启
    watch: true,
    // 配置
    watchOptions: {
        // 单位ms. 文件改动后多久执行build
        aggregateTimeout: 200,
        // false | number 多久执行一次文件变动的检查, NFS系统和虚拟机中文件监听无效
        poll: 1000,
        // String | RegExp | Array<String | RegExp>忽略的文件. 使用了 anymatch 库解析
        ignored: /node_modules/,
        // 或多个路径
        // ignored: ['files/**/*.js', 'node_modules/**'],
        //  'none' | 'info' | 'verbose' 默认info.  log 的级别
        // 'info-verbosity': 'info',
    },
    // 引用外部库的方式
    externals: {
        lodash: {
            commonjs: 'lodash',
            commonjs2: 'lodash',
            amd: 'lodash',
            root: '_',
        },
        react: {
            commonjs: 'React',
            commonjs2: 'React',
            amd: 'React',
            root: 'React',
        },
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                include: [paths.appSrc],
                exclude: [paths.appNodeModules],
                loader: 'babel-loader',
                options: {
                    cacheDirectory: true,
                    presets: ['@babel/preset-react', '@babel/preset-env'],
                    plugins: [
                        ['react-hot-loader/babel'],
                        [
                            'wildcard',
                            {
                                useCamelCase: true,
                            },
                        ],
                        // Stage 2
                        ['@babel/plugin-proposal-decorators', { legacy: true }],
                        '@babel/plugin-proposal-function-sent',
                        '@babel/plugin-proposal-export-namespace-from',
                        '@babel/plugin-proposal-numeric-separator',
                        '@babel/plugin-proposal-throw-expressions',

                        // Stage 3
                        '@babel/plugin-syntax-dynamic-import',
                        '@babel/plugin-syntax-import-meta',
                        [
                            '@babel/plugin-proposal-class-properties',
                            { loose: true },
                        ],
                        '@babel/plugin-proposal-json-strings',
                    ],
                },
            },
            {
                test: /\.scss$|\.css$/,
                use: [
                    {
                        loader: require.resolve('style-loader'),
                    },
                    {
                        loader: require.resolve('css-loader'),
                        options: {
                            importLoaders: 1,
                            sourceMap: true,
                        },
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true,
                        },
                    },
                ],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'public/index.html',
        }),
        new CopyWebpackPlugin([
            { from: path.resolve(paths.appSrc, 'assets'), to: 'assets' },
        ]),
        new TestPlugin(),
    ],
}
