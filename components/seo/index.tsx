import React from 'react'
import Head from 'next/head'

type SEOProps = {
	title: string
	description: string
}

const SEO = ({ title, description }: SEOProps) => (
	<Head>
		<title>{title}</title>
		<meta name="description" content={description} />
		<link rel="apple-touch-icon" sizes="57x57" href="/favicon-57x57.png" />
		<link rel="apple-touch-icon" sizes="60x60" href="/favicon-60x60.png" />
		<link rel="apple-touch-icon" sizes="72x72" href="/favicon-72x72.png" />
		<link rel="apple-touch-icon" sizes="76x76" href="/favicon-76x76.png" />
		<link rel="apple-touch-icon" sizes="114x114" href="/favicon-114x114.png" />
		<link rel="apple-touch-icon" sizes="120x120" href="/favicon-120x120.png" />
		<link rel="apple-touch-icon" sizes="144x144" href="/favicon-144x144.png" />
		<link rel="apple-touch-icon" sizes="152x152" href="/favicon-152x152.png" />
		<link rel="apple-touch-icon" sizes="180x180" href="/favicon-180x180.png" />
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
		<meta property="og:url" content="https://favycon.app" />
		<meta property="og:image" content="https://favycon.app/share.png?v2" />
		<meta property="og:image:type" content="image/png" />
		<meta property="og:image:width" content="1200" />
		<meta property="og:image:height" content="630" />
		<meta name="twitter:card" content="summary_large_image" />
	</Head>
)

export { SEO }
