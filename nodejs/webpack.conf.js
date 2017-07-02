const path = require('path');

let config = {
	entry: {
		app: './main.js'
	},
	output: {
		filename: '[name].js',
		path: path.resolve(__dirname, 'build')
	},
	module: {
		rules: [{
			test: /\.jsx?$/,
			use: [{
                test: /\.js$/,
                include: [path.resolve(__dirname, "src")],
                exclude: /node_modules/,
                loader: 'babel-loader',
                options: {
                    presets: ['env']
                }
            }]
		}]
	}
}

module.exports = config;
