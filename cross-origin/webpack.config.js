/*global __dirname, module webpack true*/
let path = require('path');
const webpack = require('webpack');
// ExtractTextPlugin 插件用于提取css文件到一个单独的文件中, 可以使css文件与js bundle包分离.
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const extractSass = new ExtractTextPlugin({
    filename: '[name].[contenthash].css'
});
const CopyPlugin = require('copy-webpack-plugin');

let config = {
    entry: {
        main: './src/app/index.js',
        haha: './src/app/haha.js'
    },
    output: {
        // 输出的文件名, [name] 会取entry入口中的名称
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                include: [path.resolve(__dirname, "src/app")],
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
                test: /\.css$/,
                include: [path.resolve(__dirname, "src/app")],
                loader: 'style-loader!css-loader'
            },
            {
                test: /\.js$/,
                include: [path.resolve(__dirname, "src/app")],
                exclude: /node_modules/,
                loader: 'babel-loader',
                options: {
                    presets: ['env']
                }
            },
            {
                test: /.html$/,
                include: [path.resolve(__dirname, 'src/app/static')],
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]'
                    }
                }, 'html-loader']
            }
        ]
    },
    devServer: {
        contentBase: __dirname + '/dist',
        inline: true,
        host: 'localhost',
        port: '3000',
        disableHostCheck: true,
        stats: {
            hot: true
        }
    },
    plugins: [
        extractSass,
        // 生成html骨架
        new HtmlWebpackPlugin({
            title: 'webpack练习',
            // 生成的html的文件名及路径
            filename: 'main.html',
            template: './src/app/main.ejs',
            chunks: ['main']
        }),
        new HtmlWebpackPlugin({
            filename: 'haha.html',
            template: './src/app/haha.ejs',
            chunks: ['haha']
        }),
        new HtmlWebpackPlugin({
            filename: 'proxy.html',
            template: './src/app/proxy.ejs',
            chunks: ['']
        }),
        new CopyPlugin([
            {
                from: 'src/app/static',
                to: 'static'
            }
        ])
    ]
};

module.exports = config;