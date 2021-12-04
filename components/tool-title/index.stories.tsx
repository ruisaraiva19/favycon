import { ComponentMeta, Story } from '@storybook/react'
import { ToolTitle, ToolTitleProps } from '.'

export default {
	title: 'Tool Title',
	component: ToolTitle,
} as ComponentMeta<typeof ToolTitle>

const Template: Story<ToolTitleProps> = (args) => <ToolTitle {...args} />

export const Desktop = Template.bind({})
Desktop.args = {}
