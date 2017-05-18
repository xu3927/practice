/*global __dirname, module webpack true*/
let path = require('path');
const webpack = require('webpack');
// ExtractTextPlugin 插件用于提取css文件到一个单独的文件中, 可以使css文件与js bundle包分离.
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const extractSass = new ExtractTextPlugin({
    filename: '[name].[contenthash].css',
    disable: process.env.NODE_ENV === 'development'
});

let config = {
    entry: {
        main1: './app/main1.js',
        main2: './app/main2.js',
    },
    output: {
        // 输出的文件名, [name] 会取entry入口中的名称
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'build')
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                include: [path.resolve(__dirname, "app")],
                exclude: /node_modules/,
                loader: extractSass.extract({
                    use: [
                        {
                            loader: 'css-loader'
                        }, {
                            loader: 'sass-loader'
                        }
                    ],
                    fallback: 'style-loader'
                })
            },
            {
                test: /\.js$/,
                include: [path.resolve(__dirname, "app")],
                exclude: /node_modules/,
                loader: 'babel-loader',
                options: {
                    presets: ['env']
                }
            }
        ]
    },
    plugins: [
        extractSass,
        // BannerPlugin 插件用来在每个chunk包前面添加注释.
        new webpack.BannerPlugin({
            banner: '嘻嘻哈哈,我是Banner插件生成的注释'
        }),
        // CommonsChunkPlugin 提取公共部分为一个独立的chunk文件, 以便充分利用缓存
        new webpack.optimize.CommonsChunkPlugin({
            // 生成的chunk包的 chunkname
            name: 'commonChunk',
            // 生成的 chunk包的filename
            filename: 'commons.js',
            // 要提取的公共模块的入口文件, 默认提取所有入口的公共文件
            chunks: ['main1', 'main2']
        }),
        // 生成html骨架
        // new HtmlWebpackPlugin({
        //     title: 'webpack练习',
        //     // 生成的html的文件名及路径
        //     filename: 'assets/haha.html'
        //     // template: 'index.html'
        // })
    ]
};

module.exports = config;