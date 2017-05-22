/*global __dirname, module, webpack */
let path = require('path');
const webpack = require('webpack');
// ExtractTextPlugin 插件用于提取css / html 文件到一个单独的文件中, 可以使css文件与js bundle包分离.
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const extractSass = new ExtractTextPlugin({
    filename: '[name].[contenthash].css',
    disable: process.env.NODE_ENV === 'development'
});
const extractHtml = new ExtractTextPlugin({
   filename: '[name].[contenthash].html'
});

let config = {
    entry: {
        index: './src/index.js'
    },
    output: {
        // 输出的文件名, [name] 会取entry入口中的名称
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    devServer: {
        contentBase: __dirname + '/dist',
        inline: true,
        host: '0.0.0.0',
        port: '3000',
        stats: {
            hot: true
        }
    },
    resolve: {
        extensions: ['.ts', '.js', '.tsx']
    },
    module: {
        rules: [
            {
                enforce: 'pre',
                test: /\.js$/,
                loader: "source-map-loader"
            },
            {
                enforce: 'pre',
                test: /\.tsx?$/,
                use: "source-map-loader"
            },
            {
                test: /.html$/,
                loader: extractHtml.extract({
                    use: 'html-loader'
                })
            },
            {
                test: /\.scss$/,
                include: [path.resolve(__dirname, "src")],
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
                test: /.tsx?$/,
                loader: 'ts-loader'
            },
            {
                test: /\.js$/,
                include: [path.resolve(__dirname, "src")],
                exclude: /node_modules/,
                loader: 'babel-loader',
                options: {
                    presets: ['env']
                }
            }
        ]
    },
    devtool: 'inline-source-map',
    plugins: [
        extractSass,
        extractHtml,
        new HtmlWebpackPlugin({
            template: './src/index.ejs'
        })
    ]
};

module.exports = config;