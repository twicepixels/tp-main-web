var webpack = require('webpack');
var helpers = require('./helpers');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

//noinspection JSUnresolvedFunction,JSUnresolvedVariable
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
			{test: /\.css$/, include: helpers.root('src', 'app'), loader: 'raw'},
			{test: /\.less$/, loader: 'raw-loader!less-loader', exclude: /node_modules/},
			{
				test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
				loader: 'file?name=assets/[name].[hash].[ext]'
			},
			{
				test: /\.css$/,
				exclude: helpers.root('src', 'app'),
				loader: ExtractTextPlugin.extract('style', 'css?sourceMap')
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