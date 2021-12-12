module.exports = {
	poweredByHeader: false,
	images: {
		deviceSizes: [375, 750, 1125],
		imageSizes: [56, 112, 185, 370, 370, 375, 540, 740, 750, 1080],
	},
	headers() {
		return [
			{
				source: '/(.*)',
				headers: [
					{
						key: 'X-XSS-Protection',
						value: '1; mode=block',
					},
					{
						key: 'X-Frame-Options',
						value: 'SAMEORIGIN',
					},
					{
						key: 'X-Content-Type-Options',
						value: 'nosniff',
					},
					{
						key: 'Content-Security-Policy',
						value: `default-src 'self' https://cdn.splitbee.io; font-src https://fonts.gstatic.com; frame-ancestors 'self'`,
					},
				],
			},
		]
	},
}
