const path = require('path')

// Export a function. Accept the base config as the only param.
module.exports = {
	webpackFinal: async (baseConfig) => {
		const nextConfig = require('../next.config.js')

		// Make whatever fine-grained changes you need
		baseConfig.module.rules.push({
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

		// merge whatever from nextConfig into the webpack config storybook will use
		return { ...baseConfig }
	},
}
