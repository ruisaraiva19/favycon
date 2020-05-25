import React from 'react'
import { DarkModeToggle } from 'components/dark-mode-toggle'
import { SvgFavycon } from 'components/svgs/svg-favycon'
import { Sticky } from 'components/sticky'
import { useMediaQueryContext } from 'components/media-query-provider'

import styles from './index.module.scss'

const Header = () => {
	const { isMobile } = useMediaQueryContext()
	return (
		<Sticky>
			<div className={styles.root}>
				<div className={styles.container}>
					<header className={styles.header}>
						{isMobile && (
							<div className={styles.item}>
								<SvgFavycon />
							</div>
						)}
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
