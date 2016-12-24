var path = require('path');
var HtmlwebpackPlugin = require('html-webpack-plugin');
// 定义一些文件夹的路径
var ROOT_PATH = path.resolve(__dirname);
var APP_PATH = path.resolve(ROOT_PATH, 'app');
var BUILD_PATH = path.resolve(ROOT_PATH, 'build');

module.exports = {
	// 项目文件夹, 可以直接用文件夹名称 默认会找index.js 也可以确定是哪个文件名字
	entry: APP_PATH,
	 //输出的文件名 合并以后的js会命名为bundle.js
	 output: {
	 	path: BUILD_PATH,
	 	filename: 'bundle.js'
	 },
	 // 添加插件, 会自动生成一个html文件
	 plugins: [
	 	new HtmlwebpackPlugin({
	 		title: '测试' // 生成的html的标题
	 	})
	 ],
	 // 配置开发服务器, 使用  webpack-dev-server 插件
	 devServer: {
	 	historyApiFallback: true,
	 	hot: true,
	 	inline: true,
	 	progress: true
	 },
	 devtool: 'eval-source-map',
	 // loader
	 module: {
	 	loaders: [
	 		{
	 			// 通过正则匹配需要处理的文件
	 			test: /\.css$/,
	 			// loaders是一个数组, 包含要处理这些程序的loaders, loaders的处理顺序是从右到左的. 这里会先运行css-loader, 然后运行style-loader
	 			loaders: ['style', 'css'],
	 			include: APP_PATH
	 		},
	 		{
	 			test: /\.scss$/,
	 			loaders: ['style', 'css?sourceMap', 'sass?sourceMap']],
	 			include: APP_PATH
	 		}	
	 	]
	 }
}











