import React from 'react'
import useDarkMode from 'use-dark-mode'
import classnames from 'classnames'
import { DarkModeToggle } from 'components/dark-mode-toggle'
import { Typography } from 'components/typography'
import { Sticky } from 'components/sticky'

import styles from './index.module.scss'

const Header = () => {
	const { value: isDark } = useDarkMode(false)
	const itemClassName = classnames(styles.item, { [styles.dark]: isDark })
	return (
		<Sticky>
			<div className={styles.root}>
				<div className={styles.container}>
					<header className={styles.header}>
						<div className={itemClassName}>
							<Typography weight="bold">Menu</Typography>
						</div>
						<div className={itemClassName}>
							<DarkModeToggle />
						</div>
					</header>
				</div>
			</div>
		</Sticky>
	)
}

export { Header }
