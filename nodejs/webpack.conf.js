const path = require('path');

let config = {
	entry: {
		index: './index.js'
	},
	output: {
		filename: '[name].js',
		path: path.resolve(__dirname, 'build')
	},
	module: {
		rules: [{
				test: /\.js$/,
                include: [path.resolve(__dirname, 'src')],
                exclude: [/node_modules/],
                use: [{
	 				loader: 'babel-loader',
	                options: {
	                    presets: ['es2015'],
	                    plugins: ['dynamic-import-webpack', 'dynamic-import-node']
	                }
                }]
               		
		}]
	},
	node: {
	  fs: 'empty',
	  net: 'empty'
	}
}

module.exports = config;
