var path = require('path');
var HtmlwebpackPlugin = require('html-webpack-plugin');
// 定义文件夹路径, 转为绝对路径
var ROOT_PATH = path.resolve(__dirname);
var APP_PATH = path.resolve(ROOT_PATH, 'app');
var DIST_PATH = path.resolve(ROOT_PATH, './dist');

module.exports = {
	entry: APP_PATH,
	output: {
		path: DIST_PATH,
		filename: 'bundle.js'
	},
	plugins: [
		new HtmlwebpackPlugin({
			title: 'angular项目结合webpack练习',
			template: './app/index.ejs'
		})
	],
	devServer: {
		historyApiFallback: true,
	 	hot: true,
	 	inline: true,
	 	progress: true,
	 	port: 9000
	 },
	  devtool: 'eval-source-map',
	  module: {
	  	loaders: [
	  	
	  	]
	  }
}