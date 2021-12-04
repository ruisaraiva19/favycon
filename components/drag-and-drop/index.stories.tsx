import { ComponentMeta, Story } from '@storybook/react'
import { DragAndDrop, DragAndDropProps } from '.'

export default {
	title: 'Drag & Drop',
	component: DragAndDrop,
	argTypes: {},
} as ComponentMeta<typeof DragAndDrop>

const Template: Story<DragAndDropProps> = (args) => <DragAndDrop {...args} />

export const Desktop = Template.bind({})
Desktop.args = {}
