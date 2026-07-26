import Head from 'next/head'

const SITE_URL = 'https://favycon.vercel.app'

const AUTHOR = { name: 'Rui Saraiva', url: 'https://ruisaraiva.dev' }

// The tool credits three people in its About modal, so the structured data says
// the same thing rather than a tidier untruth: Rui as author, the other two as
// contributors, linked where the modal links them.
const CONTRIBUTORS = [
	{ name: 'Augusto Lopes', url: 'https://twitter.com/aboutaugusto' },
	{ name: 'Miguel Teixeira', url: 'https://github.com/miguellteixeira' },
]

type SEOProps = {
	title: string
	description: string
}

const SEO = ({ title, description }: SEOProps) => {
	const structuredData = {
		'@context': 'https://schema.org',
		'@type': 'SoftwareApplication',
		name: 'Favycon',
		description,
		url: SITE_URL,
		applicationCategory: 'DeveloperApplication',
		operatingSystem: 'Any',
		browserRequirements: 'Requires JavaScript',
		image: `${SITE_URL}/share.png`,
		license: 'https://opensource.org/licenses/MIT',
		// It is genuinely free, and Google wants the price stated to believe it.
		offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
		author: { '@type': 'Person', ...AUTHOR },
		contributor: CONTRIBUTORS.map((person) => ({ '@type': 'Person', ...person })),
		codeRepository: 'https://github.com/ruisaraiva19/favycon',
	}

	return (
		<Head>
			<title>{title}</title>
			<meta name="description" content={description} />
			<meta name="author" content={AUTHOR.name} />
			<link rel="author" href={AUTHOR.url} />
			<link rel="apple-touch-icon" sizes="57x57" href="/favicon-57x57.png" />
			<link rel="apple-touch-icon" sizes="60x60" href="/favicon-60x60.png" />
			<link rel="apple-touch-icon" sizes="72x72" href="/favicon-72x72.png" />
			<link rel="apple-touch-icon" sizes="76x76" href="/favicon-76x76.png" />
			<link rel="apple-touch-icon" sizes="114x114" href="/favicon-114x114.png" />
			<link rel="apple-touch-icon" sizes="120x120" href="/favicon-120x120.png" />
			<link rel="apple-touch-icon" sizes="144x144" href="/favicon-144x144.png" />
			<link rel="apple-touch-icon" sizes="152x152" href="/favicon-152x152.png" />
			<link rel="apple-touch-icon" sizes="180x180" href="/favicon-180x180.png" />
			<meta name="apple-mobile-web-app-title" content="Favycon" />
			<link rel="icon" type="image/svg+xml" href="/favicon.svg" />
			<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
			<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
			<link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png" />
			<link rel="icon" type="image/png" sizes="192x192" href="/favicon-192x192.png" />
			<meta name="msapplication-TileColor" content="#ffffff" />
			<meta name="msapplication-TileImage" content="/favicon-144x144.png" />
			<meta name="msapplication-config" content="/browserconfig.xml" />
			<meta property="og:title" content={title} />
			<meta property="og:description" content={description} />
			<meta property="og:type" content="website" />
			<meta property="og:site_name" content={title} />
			<meta property="og:url" content={SITE_URL} />
			<meta property="og:image" content={`${SITE_URL}/share.png?v5`} />
			<meta property="og:image:type" content="image/png" />
			<meta property="og:image:width" content="1200" />
			<meta property="og:image:height" content="630" />
			<meta name="twitter:card" content="summary_large_image" />
			<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
		</Head>
	)
}

export { SEO }
