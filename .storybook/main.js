const path = require('path')

/**
 * @type {import('@storybook/react/types').StorybookConfig}
 */
module.exports = {
	core: {
		builder: 'webpack5',
	},
	reactOptions: {
		fastRefresh: true,
	},
	staticDirs: ['../public'],
	stories: ['../components/**/*.stories.mdx', '../components/**/*.stories.@(js|jsx|ts|tsx)'],
	addons: [
		'@storybook/addon-links',
		'@storybook/addon-essentials',
		'storybook-addon-next-router',
		{
			name: '@storybook/addon-postcss',
			options: {
				postcssLoaderOptions: {
					implementation: require('postcss'),
				},
			},
		},
		'@storybook/addon-a11y',
		'storybook-dark-mode',
	],
	webpackFinal: async (config, { configType }) => {
		config.module.rules.push({
			test: /\.scss$/,
			use: [
				'style-loader',
				{
					loader: 'css-loader',
					options: {
						importLoaders: 1,
						modules: true,
					},
				},
				'sass-loader',
			],
			include: path.resolve(__dirname, '../'),
		})

		config.resolve.alias['components'] = path.join(__dirname, '../components')
		config.resolve.alias['pages'] = path.join(__dirname, '../pages')
		config.resolve.alias['styles'] = path.join(__dirname, '../styles')
		config.resolve.alias['utils'] = path.join(__dirname, '../utils')
		config.resolve.alias['hooks'] = path.join(__dirname, '../hooks')

		return config
	},
}
