import React from 'react'
import { withKnobs } from '@storybook/addon-knobs'
import useDarkMode from 'use-dark-mode'
import { Button } from 'components/button'
import { ToolTitle } from '.'

export default {
	title: 'Tool Title',
	decorators: [withKnobs],
}

export const ToolTitleDesktop = () => {
	const { toggle } = useDarkMode(false)
	return (
		<div style={{ padding: 20 }}>
			<ToolTitle />
			<br />
			<Button onClick={toggle}>Toggle Dark Mode</Button>
		</div>
	)
}

ToolTitleDesktop.story = {
	name: 'desktop',
}
