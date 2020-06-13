module.exports = {
	webpack(config, { dev }) {
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

		if (!dev) {
			config.resolve.alias['react'] = 'preact/compat'
			config.resolve.alias['react-dom'] = 'preact/compat'
			config.resolve.alias['react-ssr-prepass'] = 'preact-ssr-prepass'
		}

		return config
	},

	poweredByHeader: process.env.NODE_ENV !== 'production',
}
