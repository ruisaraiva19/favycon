import React from 'react'
import App, { AppProps, AppContext } from 'next/app'
import { UAParser } from 'ua-parser-js'
import { MediaQueryProvider } from 'components/media-query-provider'

import '../styles/main.scss'

type MyAppProps = {
	isMobile: boolean
}

function MyApp({ Component, pageProps, isMobile }: AppProps & MyAppProps) {
	return (
		<MediaQueryProvider isMobileDevice={isMobile}>
			<Component {...pageProps} />
		</MediaQueryProvider>
	)
}

MyApp.getInitialProps = async (appContext: AppContext) => {
	const userAgent = appContext.ctx.req?.headers['user-agent'] || navigator.userAgent
	const device = new UAParser(userAgent).getDevice()
	const appProps = await App.getInitialProps(appContext)
	return { ...appProps, isMobile: device.type === 'mobile' }
}

export default MyApp
