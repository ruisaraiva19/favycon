import React from 'react'
import { withKnobs, text, select, boolean } from '@storybook/addon-knobs'
import { Button } from '.'
import useDarkMode from 'use-dark-mode'

export default {
	title: 'Button',
	decorators: [withKnobs],
}

export const ButtonDesktop = () => {
	const { toggle } = useDarkMode()
	const variant = select('variant', ['primary', 'transparent'], 'primary')
	const weight = select('weight', ['regular', 'medium', 'semiBold', 'bold'], 'bold')
	const body = text('body', 'Mac app coming soon')
	const disabled = boolean('disabled', false)
	return (
		<div style={{ padding: 20 }}>
			<Button variant={variant} weight={weight} disabled={disabled}>
				{body}
			</Button>
			<br />
			<br />
			<Button onClick={toggle}>Toggle Dark Mode</Button>
		</div>
	)
}

ButtonDesktop.story = {
	name: 'Desktop',
}
