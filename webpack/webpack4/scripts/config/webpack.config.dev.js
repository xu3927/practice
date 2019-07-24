
const path = require('path')
const fs = require('fs')
var HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin')
const paths = require('./paths')

const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = relativePath => path.resolve(appDirectory, relativePath);


module.exports = {
    mode: 'development',
    /**
     * entry是入口，会生成一个 bundle 文件，有三种形式, object | string | Array<string>
     * 如果是字符串，如 entry: 'path/to/file.js' 则等同于 entry: { main: 'path/to/file.js' }
     * 
     */
    // 值为字符串, 需要时 node require 函数的参数字符串，如文件路径或模块名
    // 值为字符串文件路径
    entry: resolveApp('src/index.js'),
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
        path: paths.appBuild
    },
    devtool: 'source-map',
    // 最后输出的模块模式，可以是 web | node 等
    target: 'node',
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                include: [
                    paths.appSrc
                ],
                exclude: [
                    paths.appNodeModules
                ],
                loader: "babel-loader",
                options: {
                    cacheDirectory: true,
                    presets: [
                        '@babel/preset-react',
                        '@babel/preset-env'
                    ],
                    plugins: [
                        ['wildcard', {
                            'useCamelCase': true
                        }],
                        // Stage 2
                        ["@babel/plugin-proposal-decorators", { "legacy": true }],
                        "@babel/plugin-proposal-function-sent",
                        "@babel/plugin-proposal-export-namespace-from",
                        "@babel/plugin-proposal-numeric-separator",
                        "@babel/plugin-proposal-throw-expressions",

                        // Stage 3
                        "@babel/plugin-syntax-dynamic-import",
                        "@babel/plugin-syntax-import-meta",
                        ["@babel/plugin-proposal-class-properties", { "loose": true }],
                        "@babel/plugin-proposal-json-strings"
                    ]
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
                        }
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true,
                        },
                    }
                ]
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'public/index.html'
        }),
        new CopyWebpackPlugin([
            { from: path.resolve(paths.appSrc, 'assets'), to: 'assets' },
        ]),
    ],
}