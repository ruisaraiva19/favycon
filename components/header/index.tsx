import React from 'react'
import Link from 'next/link'
import { DarkModeToggle } from 'components/dark-mode-toggle'
import { Sticky } from 'components/sticky'
import { SvgFavycon } from 'components/svgs/svg-favycon'

import styles from './index.module.scss'

const Header = () => {
	return (
		<Sticky>
			<div className={styles.root}>
				<div className={styles.container}>
					<header className={styles.header}>
						<div className={styles.item}>
							<Link href="/">
								<a href="/">
									<SvgFavycon />
								</a>
							</Link>
						</div>
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
