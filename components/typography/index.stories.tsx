import React from 'react'
import { withKnobs, text, select } from '@storybook/addon-knobs'
import useDarkMode from 'use-dark-mode'
import { Button } from 'components/button'
import { Typography } from '.'

export default {
	title: 'Typography',
	decorators: [withKnobs],
}

export const TypographyDesktop = () => {
	const { toggle } = useDarkMode(false)
	const variant = select(
		'variant',
		['h1', 'smallBody', 'regularBody', 'mediumBody', 'largeBody', 'footer', 'superscript'],
		'h1'
	)
	const weight = select('weight', ['regular', 'medium', 'semiBold', 'bold'], 'regular')
	const color = select('color', ['black', 'gray', 'white'], 'black')
	const body = text('body', 'Some text')
	return (
		<div style={{ padding: 20 }}>
			<Typography variant={variant} weight={weight} color={color}>
				{body}
			</Typography>
			<br />
			<Button onClick={toggle}>Toggle Dark Mode</Button>
		</div>
	)
}

TypographyDesktop.story = {
	name: 'Desktop',
}
