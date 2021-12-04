import { ComponentMeta, Story } from '@storybook/react'
import { DarkModeToggle } from '.'
import { useDarkMode } from 'hooks/use-dark-mode'
import { Typography } from 'components/typography'

export default {
	title: 'Dark Mode Toggle',
} as ComponentMeta<typeof DarkModeToggle>

const Template: Story = (args) => {
	const darkMode = useDarkMode(false, {
		classNameDark: 'dark',
		classNameLight: 'light',
		element: document.documentElement,
	})

	return (
		<div style={{ padding: 20 }}>
			<DarkModeToggle {...args} />
			<br />
			<Typography>dark mode: {darkMode.value ? 'enabled' : 'disabled'}</Typography>
		</div>
	)
}

export const Default = Template.bind({})
Default.args = {}
