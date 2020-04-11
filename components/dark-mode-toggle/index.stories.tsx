import React from 'react'
import { DarkModeToggle } from '.'

export default {
	title: 'Dark Mode Toggle',
}

export const toggleDesktop = () => <DarkModeToggle />

toggleDesktop.story = {
	name: 'Desktop',
}
