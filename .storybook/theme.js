import { create, themes } from '@storybook/theming'

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
	// textColor: colors.coolGray[900],
	// textInverseColor: colors.indigo[100],

	// Background colors
	// appContentBg: '#fcfcff',
})

export const dark = create({
	base: 'dark',
	...baseStyles,

	// Text colors
	// textColor: colors.indigo[100],
	// textInverseColor: colors.coolGray[900],

	// Background colors
	// appBg: colors.coolGray[800],
	// appContentBg: colors.coolGray[900],
	// barBg: colors.coolGray[800],
})
