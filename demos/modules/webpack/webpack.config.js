module.exports = {
	entry: './src/app.js',
	output: {
		path: __dirname,
		filename: 'bundle.js'
	},
	externals: {
		"ramda": "R"
	},
	module: {
		rules: [{
			test: /.js$/,
			loader: 'babel-loader'
		}]
	},
	devtool: 'source-map'
};
