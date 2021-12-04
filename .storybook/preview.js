import { useEffect, useState } from 'react'
import { RouterContext } from 'next/dist/shared/lib/router-context'
import * as NextImage from 'next/image'
import addons from '@storybook/addons'
import { withConsole } from '@storybook/addon-console'
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport'
import { addDecorator } from '@storybook/react'
import { DARK_MODE_EVENT_NAME } from 'storybook-dark-mode'
import { useDarkMode } from '../hooks/use-dark-mode'
import * as themes from './theme'
import 'styles/main.scss'
import './styles.css'

const OriginalNextImage = NextImage.default

Object.defineProperty(NextImage, 'default', {
	configurable: true,
	value: (props) => <OriginalNextImage {...props} unoptimized />,
})

addDecorator((storyFn, context) => withConsole()(storyFn)(context))

const customViewports = {
	responsive: {
		name: 'Responsive',
		styles: {
			height: '100%',
			width: '100%',
		},
		type: 'desktop',
	},
	desktop1280: {
		name: 'Desktop 1280px',
		styles: {
			height: '800px',
			width: '1280px',
		},
		type: 'desktop',
	},
	desktop1440: {
		name: 'Desktop 1440px',
		styles: {
			height: '900px',
			width: '1440px',
		},
		type: 'desktop',
	},
}

export const parameters = {
	actions: { argTypesRegex: '^on[A-Z].*' },
	viewport: {
		viewports: {
			...INITIAL_VIEWPORTS,
			...customViewports,
		},
		defaultViewport: 'responsive',
	},
	darkMode: {
		dark: themes.dark,
		light: themes.light,
		darkClass: 'dark',
		lightClass: 'light',
		classTarget: 'html',
		stylePreview: true,
	},
	nextRouter: {
		Provider: RouterContext.Provider,
	},
	options: {
		storySort: (a, b) => {
			if (a[1].kind === 'Welcome') {
				return -1
			}

			return a[1].kind === b[1].kind ? 0 : a[1].id.localeCompare(b[1].id, { numeric: true })
		},
	},
}

const channel = addons.getChannel()

function ThemeWrapper(props) {
	const [isDark, setDark] = useState(false)
	const darkMode = useDarkMode(false, {
		classNameDark: 'dark',
		classNameLight: 'light',
		element: document.documentElement,
	})

	useEffect(() => {
		channel.on(DARK_MODE_EVENT_NAME, setDark)
		return () => channel.off(DARK_MODE_EVENT_NAME, setDark)
	}, [setDark])

	useEffect(() => {
		if (isDark) {
			darkMode.enable()
		} else {
			darkMode.disable()
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [isDark])

	return props.children
}

export const decorators = [
	(Story) => (
		<ThemeWrapper>
			<Story />
		</ThemeWrapper>
	),
]
