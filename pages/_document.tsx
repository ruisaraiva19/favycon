/* eslint-disable @next/next/no-sync-scripts */
import Document, { Html, Head, Main, NextScript } from 'next/document'

const isProd = process.env.NODE_ENV === 'production'

class MyDocument extends Document {
	render() {
		return (
			<Html lang="en">
				<Head>
					{isProd && (
						<script async src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GTM_ID || ''}`} />
					)}
					{isProd && (
						<script
							dangerouslySetInnerHTML={{
								__html: `
								window.dataLayer = window.dataLayer || [];
								function gtag() { dataLayer.push(arguments); }
								gtag('js', new Date());
								gtag('config', '${process.env.NEXT_PUBLIC_GTM_ID || ''}', { 'anonymize_ip': true });
							`,
							}}
						/>
					)}
					<link rel="preconnect" href="https://fonts.googleapis.com" />
					<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
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
