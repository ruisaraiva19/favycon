/* eslint-disable @next/next/no-sync-scripts */
import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
	render() {
		return (
			<Html lang="en">
				<Head>
					<link rel="preconnect" href="https://fonts.googleapis.com" />
					<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
					{process.env.NODE_ENV === 'production' && <script async src="https://cdn.splitbee.io/sb.js"></script>}
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
