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
		<link rel="icon" type="image/svg+xml" href="/favicon.svg?v=2" />
		<link rel="icon" type="image/png" href="/favicon.png?v=2" />
		<link rel="icon" type="image/x-icon" href="/favicon.ico?v=2" />
		<meta property="og:title" content={title} />
		<meta property="og:description" content={description} />
		<meta property="og:type" content="website" />
		<meta property="og:site_name" content={title} />
		<meta property="og:image" content="/share.png?v=2" />
		<meta property="og:image:type" content="image/png" />
		<meta property="og:image:width" content="1200" />
		<meta property="og:image:height" content="630" />
		<meta property="og:image:alt" content={description} />
	</Head>
)

export { SEO }
