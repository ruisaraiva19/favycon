module.exports = {
	plugins: [
		'@semantic-release/commit-analyzer',
		'@semantic-release/release-notes-generator',
		[
			'@semantic-release/github',
			{
				releasedLabels: ['Status: Released'],
				assets: [{ path: '.next/static', label: 'Next.js static files' }],
			},
		],
	],
	branches: ['master'],
}
