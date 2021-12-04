import { ComponentMeta, Story } from '@storybook/react'
import { Typography, TypographyProps } from '.'

export default {
	title: 'Typography',
	component: Typography,
	argTypes: {
		variant: {
			control: {
				type: 'select',
			},
			options: ['h1', 'smallBody', 'regularBody', 'mediumBody', 'largeBody', 'footer', 'superscript'],
		},
		weight: {
			control: {
				type: 'select',
			},
			options: ['regular', 'medium', 'semiBold', 'bold'],
		},
		color: {
			control: {
				type: 'select',
			},
			options: ['black', 'gray', 'white'],
		},
	},
} as ComponentMeta<typeof Typography>

const Template: Story<TypographyProps> = (args) => <Typography {...args} />

export const Desktop = Template.bind({})
Desktop.args = {
	variant: 'h1',
	weight: 'regular',
	color: 'black',
	children: 'Some text',
}
