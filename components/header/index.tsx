import React from 'react'
import Link from 'next/link'
import useDarkMode from 'use-dark-mode'
import classnames from 'classnames'
import { DarkModeToggle } from 'components/dark-mode-toggle'
import { Sticky } from 'components/sticky'
import { SvgFavycon } from 'components/svgs/svg-favycon'

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
							<Link href="/">
								<a href="/">
									<SvgFavycon />
								</a>
							</Link>
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
