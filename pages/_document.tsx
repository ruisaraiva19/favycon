/* eslint-disable @next/next/no-sync-scripts */
import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
	render() {
		return (
			<Html lang="en" className="preload">
				<Head />
				<body>
					<script src="/js/noflash.js?v1" />
					<Main />
					<NextScript />
					<script src="/js/onload.js?v1" />
				</body>
			</Html>
		)
	}
}

export default MyDocument
