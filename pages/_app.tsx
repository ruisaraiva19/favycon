import { AppProps } from 'next/app'
import { MediaQueryProvider } from 'components/media-query-provider'

import '../styles/main.scss'

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<MediaQueryProvider>
			<Component {...pageProps} />
		</MediaQueryProvider>
	)
}

export default MyApp
