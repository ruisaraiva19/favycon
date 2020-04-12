import React from 'react'
import PropTypes from 'prop-types'
import { DarkModeToggle } from 'components/dark-mode-toggle'

import styles from './index.module.scss'
import { Typography } from 'components/typography'

type BaseLayoutProps = {
	children: PropTypes.ReactNodeLike
}

const BaseLayout = ({ children }: BaseLayoutProps) => {
	return (
		<div className={styles.root}>
			<div className={styles.container}>
				<header className={styles.header}>
					<Typography weight="bold">Menu</Typography>
					<DarkModeToggle />
				</header>
			</div>
			<main>{children}</main>
		</div>
	)
}

export { BaseLayout }
