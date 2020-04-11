import { addDecorator, addParameters, configure } from '@storybook/react'
import { withConsole } from '@storybook/addon-console'
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport'
import { RouterContext } from 'next/dist/next-server/lib/router-context'
import { myRouter } from './mock-router'
import 'styles/main.scss'
import './styles.css'

addDecorator((storyFn, context) => withConsole()(storyFn)(context))

addParameters({
	options: {
		storySort: (a, b) => {
			if (a[1].kind === 'Welcome') {
				return -1
			}

			return a[1].kind === b[1].kind ? 0 : a[1].id.localeCompare(b[1].id, { numeric: true })
		},
	},
})

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

addParameters({
	viewport: {
		viewports: {
			...INITIAL_VIEWPORTS,
			...customViewports,
		},
		defaultViewport: 'responsive',
	},
	options: {
		showPanel: true,
	},
})

const Theme = (StoryFn) => (
	<RouterContext.Provider value={myRouter}>
		<StoryFn />
	</RouterContext.Provider>
)

addDecorator(Theme)

// automatically import all files ending in *.stories.tsx
configure(require.context('../components', true, /\.stories\.tsx$/), module)
