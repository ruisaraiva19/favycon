const path = require('path')
require('dotenv').config()

const isProduction = process.env.NODE_ENV === 'production'

module.exports = {
	experimental: {
		modern: true,
		polyfillsOptimization: true,
	},

	webpack(config, { dev, isServer }) {
		const splitChunks = config.optimization && config.optimization.splitChunks
		if (splitChunks) {
			const { cacheGroups } = splitChunks
			const preactModules = /[\\/]node_modules[\\/](preact|preact-render-to-string|preact-context-provider)[\\/]/
			if (cacheGroups.framework) {
				cacheGroups.preact = { ...cacheGroups.framework, test: preactModules }
				cacheGroups.commons.name = 'framework'
			} else {
				cacheGroups.preact = {
					name: 'commons',
					chunks: 'all',
					test: preactModules,
				}
			}
		}

		config.resolve.alias['components'] = path.join(__dirname, 'components')
		config.resolve.alias['pages'] = path.join(__dirname, 'pages')
		config.resolve.alias['styles'] = path.join(__dirname, 'styles')
		config.resolve.alias['utils'] = path.join(__dirname, 'utils')
		config.resolve.alias['hooks'] = path.join(__dirname, 'hooks')
		config.resolve.alias['react'] = 'preact/compat'
		config.resolve.alias['react-dom'] = 'preact/compat'
		config.resolve.alias['react-ssr-prepass'] = 'preact-ssr-prepass'

		// inject Preact DevTools
		if (dev && !isServer) {
			const { entry } = config
			config.entry = () =>
				entry().then((entries) => {
					entries['main.js'] = ['preact/debug'].concat(entries['main.js'] || [])
					return entries
				})
		}

		return config
	},

	poweredByHeader: !isProduction,
}
