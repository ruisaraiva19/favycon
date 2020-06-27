import React from 'react'
import Document, { Html, Head, Main, NextScript } from 'next/document'

const isProd = process.env.NODE_ENV === 'production'

class MyDocument extends Document {
	render() {
		return (
			<Html lang="en">
				<Head>
					{isProd && <script async src="https://www.googletagmanager.com/gtag/js?id=UA-171039315-1" />}
					{isProd && (
						<script
							dangerouslySetInnerHTML={{
								__html: `
								window.dataLayer = window.dataLayer || [];
								function gtag() { dataLayer.push(arguments); }
								gtag('js', new Date());
								gtag('config', 'UA-171039315-1', { 'anonymize_ip': true });
							`,
							}}
						/>
					)}
				</Head>
				<body className="preload">
					<script src="/js/noflash.js" />
					<Main />
					<NextScript />
					<script src="/js/onload.js" />
				</body>
			</Html>
		)
	}
}

export default MyDocument
