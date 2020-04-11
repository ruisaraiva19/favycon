const path = require('path')
const WebpackNotifierPlugin = require('webpack-notifier')

module.exports = ({ config, mode }) => {
	config.module.rules.push({
		test: /\.stories\.tsx?$/,
		loaders: [
			{
				loader: require.resolve('@storybook/source-loader'),
				options: { parser: 'typescript' },
			},
		],
		enforce: 'pre',
	})

	config.module.rules.push({
		test: /\.(ts|tsx)$/,
		loader: require.resolve('babel-loader'),
		options: {
			presets: [['react-app', { flow: false, typescript: true }]],
		},
	})

	config.resolve.extensions.push('.ts', '.tsx')

	config.resolve.alias['components'] = path.join(__dirname, '../components')
	config.resolve.alias['pages'] = path.join(__dirname, '../pages')
	config.resolve.alias['styles'] = path.join(__dirname, '../styles')
	config.resolve.alias['utils'] = path.join(__dirname, '../utils')
	config.resolve.alias['hooks'] = path.join(__dirname, '../hooks')

	if (mode === 'DEVELOPMENT') {
		config.plugins.push(
			new WebpackNotifierPlugin({
				title: 'Favycon Storybook',
				excludeWarnings: true,
				alwaysNotify: true,
				contentImage: path.join(__dirname, 'logo.png'),
			})
		)
	}

	return config
}
