/*global __dirname, module webpack true*/
let path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const port = 9000;

const Entry = {
    main: {
        main: './src/main.js',
        template: './src/main.ejs'
    },
    polymer: {
        main: './src/polymer.js',
        template: './src/polymer.ejs'
    }
};

function GetEntry (entry) {
    let _entry = {};
    for (const k in entry) {
        _entry[k] = entry[k].main;
    }
    return _entry;
}

function HTMLPlugin (entry) {
    let _plugin = [];
    for (const k in entry) {

        _plugin.push(new HtmlWebpackPlugin({
            title: 'web component',
            // 生成的html的文件名及路径
            filename: entry[k].filename || k + '.html',
            template: entry[k].template,
            chunks: [k]
        }))
    }
    return _plugin
}

function GetPlugins () {
    let _plugins = [];
    _plugins = _plugins.concat(HTMLPlugin(Entry));
    return _plugins;
}

let config = {
    entry: GetEntry(Entry),
    output: {
        // 输出的文件名, [name] 会取entry入口中的名称
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'build')
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                include: [path.resolve(__dirname, "src")],
                exclude: /node_modules/,
                loader: 'style-loader!css-loader!sass-loader'
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
    plugins: GetPlugins(),
    devServer: {
        contentBase: path.join(__dirname, 'build'),
        port: port
    }
}
console.log('server start, listening ' + port + ';')
module.exports = config;