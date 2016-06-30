var webpack = require("webpack");

module.exports = {
	devServer: {
		port: 3000,
		inline: true
	},
	entry: {
		"vendor": "./app/vendor",
		"app": "./app/main"
	},
	output: {
		path: __dirname,
		filename: "./dist/[name].bundle.js"
	},
	resolve: {
		extensions: ['', '.ts', '.js', '.less']
	},
	devtool: 'source-map',
	module: {
		loaders: [
			{test: /\.html$/, loader: 'raw-loader'},
			{test: /\.(png|jpg|gif)$/, loader: 'file-loader'},
			{test: /\.ts/, loaders: ['ts-loader'], exclude: /node_modules/},
			{test: /\.less$/, loader: 'raw-loader!less-loader', exclude: /node_modules/}
		]
	},
	plugins: [
		new webpack.optimize.CommonsChunkPlugin("vendor", "./dist/vendor.bundle.js")
	]
};