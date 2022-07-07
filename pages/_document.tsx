/* eslint-disable @next/next/no-sync-scripts */
import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
	render() {
		return (
			<Html lang="en">
				<Head />
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
