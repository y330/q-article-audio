const webpack = require('webpack')
const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const TypeScript = require("typescript")
const WriteFilePlugin = require('write-file-webpack-plugin')
const env = require("./scripts/env")
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const fileExtensions = [
	'jpg',
	'jpeg',
	'png',
	'gif',
	'eot',
	'otf',
	'svg',
	'ttf',
	'woff',
	'woff2',
]


const options = {
	entry: {
		popup: path.join(__dirname, 'src', 'popup.js'),
		background: path.join(__dirname, 'src', 'background.js'),
		content: path.join(__dirname, 'src', 'content.js'),
		help: path.join(__dirname, 'src', 'help.js'),
	},
	output: {
		globalObject: "this",
		path: path.resolve(__dirname, 'dist'),
		filename: '[name].bundle.js',
	},
	module: {
		rules: [
			// {
			//     // look for .css or .scss files
			//     test: /\.(css|scss)$/,
			//     // in the `src` directory
			//     use: [
			//         {
			//             loader: 'style-loader',
			//         },
			//         {
			//             loader: 'css-loader',
			//         },
			//         {
			//             loader: 'sass-loader',
			//             options: {
			//                 sourceMap: true,
			//             },
			//         },
			//     ],
			// },
			// {
			//     test: new RegExp('.(' + fileExtensions.join('|') + ')$'),
			//     loader: 'file-loader?name=[name].[ext]',
			//     exclude: /node_modules/,
			// },
			{
				test: /\.svelte$/,
				use: {
					loader: 'svelte-loader',
					options: {
						emitCss: true,


					}
				}
			},
			{
				test: /\.(html)$/,
				use: {
					loader: 'html-loader',
				},
				exclude: /node_modules/,
			},
			{
				test: /\.css$/,
				use: [
					MiniCssExtractPlugin.loader,
					'css-loader'
				]
			},
			{
				test: /\.(js|jsx)$/,
				loader: 'babel-loader',
				exclude: /node_modules/,
			},
			{
				test: /attractions\/index.js$/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env']
					},
				},
			},

		],
	},
	resolve: {
		extensions: fileExtensions
			.map((extension) => '.' + extension)
			.concat(['.jsx', '.js', ".ts", ".svelte", '.css']),
	},
	plugins: [
		new webpack.ProgressPlugin(),
		// clean the build folder
		new CleanWebpackPlugin({
			verbose: true,
			cleanStaleWebpackAssets: false,
		}),
		// expose and write the allowed env vars on the compiled bundle
		new webpack.EnvironmentPlugin(['NODE_ENV']),
		new CopyWebpackPlugin(
			[
				{
					from: 'src/manifest.json',
					to: path.join(__dirname, 'dist'),
					force: true,
					transform: function (content, path) {
						// generates the manifest file using the package.json informations
						return Buffer.from(
							JSON.stringify({
								description: process.env.npm_package_description,
								version: process.env.npm_package_version,
								...JSON.parse(content.toString()),
							}, null, '\t')
						)
					},
				},
				{
					from: 'src/background-wrapper.js',
					to: path.join(__dirname, 'dist')
				},
				{
					from: 'src/pages',
					to: path.join(__dirname, 'dist', 'pages')
				},
				{
					from: 'src/assets',
					to: path.join(__dirname, 'dist', 'assets')

				}
			],
			{
				logLevel: 'info',
				copyUnmodified: true,
			}
		),
		new MiniCssExtractPlugin({
			filename: '[name].css'
		}),
		new HtmlWebpackPlugin({
			template: path.join(__dirname, 'src', 'popup.html'),
			filename: 'popup.html',
			chunks: ['popup'],
		}),
		// new TypeScript(),
		new WriteFilePlugin(),
	],
	mode: "development",

}

if (env.NODE_ENV === 'development') {
	options.devtool = 'cheap-module-source-map'
}

module.exports = options

