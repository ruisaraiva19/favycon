import React from 'react'
import { withKnobs, text, select } from '@storybook/addon-knobs'
import { Typography } from '.'

export default {
	title: 'Typography',
	decorators: [withKnobs],
}

export const typographyDesktop = () => {
	const variant = select(
		'variant',
		['h1', 'smallBody', 'regularBody', 'mediumBody', 'largeBody', 'footer', 'superscript'],
		'h1'
	)
	const weight = select('weight', ['regular', 'medium', 'semiBold', 'bold'], 'regular')
	const color = select('color', ['black', 'gray', 'white'], 'black')
	const body = text('body', 'Some text')
	return (
		<Typography variant={variant} weight={weight} color={color}>
			{body}
		</Typography>
	)
}

typographyDesktop.story = {
	name: 'Desktop',
}
