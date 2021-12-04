import { useDarkMode } from 'hooks/use-dark-mode'
import { SvgSun } from 'components/svgs/svg-sun'
import { SvgMoon } from 'components/svgs/svg-moon'

import styles from './index.module.scss'

const DarkModeToggle = () => {
	const darkMode = useDarkMode(false, {
		classNameDark: 'dark',
		classNameLight: 'light',
		element: typeof document !== 'undefined' ? document.documentElement : undefined,
	})

	return (
		<div className={styles.root}>
			<input
				className={styles.checkbox}
				type="checkbox"
				id="darkMode"
				checked={darkMode.value}
				onChange={darkMode.toggle}
			/>
			<label htmlFor="darkMode" className={styles.label}>
				<SvgSun className={styles.sun} />
				<SvgMoon className={styles.moon} />
			</label>
		</div>
	)
}

export { DarkModeToggle }
