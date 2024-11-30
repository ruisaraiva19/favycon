/** @type {import('next').NextConfig} */
module.exports = {
	poweredByHeader: false,
	images: {
		deviceSizes: [375, 750, 1125],
		imageSizes: [56, 112, 185, 370, 370, 375, 540, 740, 750, 1080],
	},
	headers() {
		return process.env.NODE_ENV === 'production'
			? [
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
								value: `default-src 'self' 'unsafe-inline'; img-src 'self' data:; connect-src 'self' https://hive.splitbee.io https://vitals.vercel-insights.com; script-src 'self' https://cdn.splitbee.io; font-src 'self'; frame-ancestors 'self'`,
							},
						],
					},
			  ]
			: []
	},
	eslint: {
		ignoreDuringBuilds: true,
	},
}
