import { ComponentMeta, Story } from '@storybook/react'
import { Checkbox, CheckboxProps } from '.'
import { Typography } from 'components/typography'

export default {
	title: 'Checkbox',
	component: Checkbox,
} as ComponentMeta<typeof Checkbox>

const Template: Story<CheckboxProps> = (args) => (
	<Checkbox {...args}>
		<Typography variant="regularBody" weight="medium" muted={args.disabled}>
			Test Checkbox
		</Typography>
	</Checkbox>
)

export const Desktop = Template.bind({})
Desktop.args = {
	name: 'Desktop',
	id: 'desktop',
}
