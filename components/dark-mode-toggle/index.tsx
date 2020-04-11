import React from 'react'
import useDarkMode from 'use-dark-mode'
import { SvgSun } from 'components/svgs/svg-sun'
import { SvgMoon } from 'components/svgs/svg-moon'

import styles from './index.module.scss'

const DarkModeToggle = () => {
	const darkMode = useDarkMode(false)

	return (
		<div className={styles.root}>
			<label htmlFor="darkMode" className={styles.label}>
				{darkMode.value ? <SvgSun /> : <SvgMoon />}
			</label>
			<input
				className={styles.checkbox}
				type="checkbox"
				id="darkMode"
				checked={darkMode.value}
				onChange={darkMode.toggle}
			/>
		</div>
	)
}

export { DarkModeToggle }
