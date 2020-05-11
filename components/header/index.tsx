import React from 'react'
import { DarkModeToggle } from 'components/dark-mode-toggle'
import { Sticky } from 'components/sticky'

import styles from './index.module.scss'

const Header = () => {
	return (
		<Sticky>
			<div className={styles.root}>
				<div className={styles.container}>
					<header className={styles.header}>
						<div className={styles.item}>
							<DarkModeToggle />
						</div>
					</header>
				</div>
			</div>
		</Sticky>
	)
}

export { Header }
