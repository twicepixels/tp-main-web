var webpack = require('webpack');
var helpers = require('./helpers');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

// noinspection JSUnresolvedFunction,JSUnresolvedVariable
module.exports = {
	entry: {
		'polyfills': './app/polyfills',
		'vendor': './app/vendor',
		'app': './app/main'
	},
	resolve: {
		extensions: ['', '.js', '.ts', '.less']
	},
	module: {
		loaders: [
			{test: /\.html$/, loader: 'html'},
			{test: /\.json$/, loader: 'json-loader'},
			{test: /\.ts$/, loaders: ['ts', 'angular2-template-loader']},
			{test: /\.less$/, loader: 'raw-loader!less-loader', exclude: /node_modules/},
			{
				test: /\.(png|jpe?g|gif|ico)$/,
				loader: 'file?name=assets/[name].[hash].[ext]'
			},
			{
				test: /\.css$/,
				// loader: 'style!css?sourceMap'
				loader: ExtractTextPlugin.extract('style', 'css?sourceMap')
			},
			{
				test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
				loader: "url?limit=10000&mimetype=application/font-woff"
			}, {
				test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
				loader: "url?limit=10000&mimetype=application/font-woff"
			}, {
				test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
				loader: "url?limit=10000&mimetype=application/octet-stream"
			}, {
				test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
				loader: "file"
			}, {
				test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
				loader: "url?limit=10000&mimetype=image/svg+xml"
			}
		]
	},
	plugins: [
		new webpack.optimize.CommonsChunkPlugin({
			name: ['app', 'vendor', 'polyfills']
		}),

		new HtmlWebpackPlugin({
			template: 'app/index.html'
		})
	]
};