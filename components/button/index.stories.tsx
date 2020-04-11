import React from 'react'
import { withKnobs, text, select } from '@storybook/addon-knobs'
import { Button } from '.'
import useDarkMode from 'use-dark-mode'

export default {
	title: 'Button',
	decorators: [withKnobs],
}

export const ButtonDesktop = () => {
	const { toggle } = useDarkMode()
	const variant = select('variant', ['primary'], 'primary')
	const body = text('body', 'Mac app coming soon')
	return (
		<div>
			<Button variant={variant}>{body}</Button>
			<button onClick={() => toggle()}>Toggle Dark Mode</button>
		</div>
	)
}

ButtonDesktop.story = {
	name: 'Desktop',
}
