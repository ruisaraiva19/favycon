import { DarkModeToggle } from '.'
import useDarkMode from 'use-dark-mode'
import { Typography } from 'components/typography'

export default {
	title: 'Dark Mode Toggle',
}

export const ToggleDesktop = () => {
	const darkMode = useDarkMode(false)

	return (
		<div style={{ padding: 20 }}>
			<DarkModeToggle />
			<br />
			<Typography>dark mode: {darkMode.value ? 'enabled' : 'disabled'}</Typography>
		</div>
	)
}

ToggleDesktop.story = {
	name: 'Desktop',
}
