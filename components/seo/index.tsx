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
		<link rel="icon" type="image/svg+xml" href="/favicon.svg?v=1" />
		<link rel="icon" type="image/png" href="/favicon.png?v=1" />
		<link rel="icon" type="image/x-icon" href="/favicon.ico?v=1" />
	</Head>
)

export { SEO }
