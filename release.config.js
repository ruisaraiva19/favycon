module.exports = {
	plugins: [
		'@semantic-release/commit-analyzer',
		'@semantic-release/release-notes-generator',
		[
			'@semantic-release/github',
			{
				releasedLabels: ['Status: Released'],
			},
		],
	],
	branches: ['master'],
}
