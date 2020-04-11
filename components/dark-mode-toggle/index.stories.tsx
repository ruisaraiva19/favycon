import React from 'react'
import { DarkModeToggle } from '.'
import useDarkMode from 'use-dark-mode'

export default {
	title: 'Dark Mode Toggle',
}

export const ToggleDesktop = () => {
	const darkMode = useDarkMode(false)

	return (
		<div>
			<DarkModeToggle />
			<div>dark mode: {darkMode.value ? 'enabled' : 'disabled'}</div>
		</div>
	)
}

ToggleDesktop.story = {
	name: 'Desktop',
}
