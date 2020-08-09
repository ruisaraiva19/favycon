const withPrefresh = require('@prefresh/next')

module.exports = withPrefresh({
	experimental: {
		modern: true,
		polyfillsOptimization: true,
	},

	webpack(config, { dev, isServer }) {
		// Move Preact into the framework chunk instead of duplicating in routes:
		const splitChunks = config.optimization && config.optimization.splitChunks
		if (splitChunks) {
			const { cacheGroups } = splitChunks
			const test = /[\\/]node_modules[\\/](preact|preact-render-to-string|preact-context-provider)[\\/]/
			if (cacheGroups.framework) {
				cacheGroups.preact = { ...cacheGroups.framework, test }
				// if you want to merge the 2 small commons+framework chunks:
				cacheGroups.commons.name = 'framework'
			}
		}

		if (isServer) {
			// mark `preact` stuffs as external for server bundle to prevent duplicate copies of preact
			config.externals.push(/^(preact|preact-render-to-string|preact-context-provider)([\\/]|$)/)
		}

		// Install webpack aliases:
		const aliases = config.resolve.alias || (config.resolve.alias = {})
		aliases['react'] = 'preact/compat'
		aliases['react-dom'] = 'preact/compat'
		aliases['react-ssr-prepass'] = 'preact-ssr-prepass'

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

	poweredByHeader: false,
})
