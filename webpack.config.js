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
		extensions: ['', '.ts', '.js']
	},
	devtool: 'source-map',
	module: {
		loaders: [
			{
				test: /\.ts/,
				loaders: ['ts-loader'],
				exclude: /node_modules/
			}
		]
	},
	plugins: [
		new webpack.optimize.CommonsChunkPlugin("vendor", "./dist/vendor.bundle.js")
	]
};
