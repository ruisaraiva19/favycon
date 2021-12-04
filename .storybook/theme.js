import { create } from '@storybook/theming'

const baseStyles = {
	// Typography
	fontBase: '"Manrope", sans-serif',
	fontCode: 'monospace',

	brandTitle: 'Favycon',
	brandUrl: 'https://favycon.vercel.app',
	brandImage: '/logo-horizontal.svg',
}

export const light = create({
	base: 'light',
	...baseStyles,

	// Text colors
	textColor: '#0e141a',
	textInverseColor: '#e4ebf2',

	// Background colors
	appContentBg: '#fafafa',
})

export const dark = create({
	base: 'dark',
	...baseStyles,

	// Text colors
	textColor: '#e4ebf2',
	textInverseColor: '#0e141a',

	// Background colors
	appBg: '#1e262f',
	appContentBg: '#0e141a',
	barBg: '#1e262f',
})
