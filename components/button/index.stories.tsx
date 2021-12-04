import { ComponentMeta, Story } from '@storybook/react'
import { Button, ButtonProps } from '.'

export default {
	title: 'Button',
	component: Button,
} as ComponentMeta<typeof Button>

const Template: Story<ButtonProps> = (args) => <Button {...args} />

export const Desktop = Template.bind({})
Desktop.args = {
	children: 'Mac app coming soon',
}
