import classnames from 'classnames'
import { DarkModeToggle } from 'components/dark-mode-toggle'
import { SvgFavycon } from 'components/svgs/svg-favycon'
import { Sticky } from 'components/sticky'

import styles from './index.module.scss'

const Header = () => {
	return (
		<Sticky>
			<div className={styles.root}>
				<div className={styles.container}>
					<header className={styles.header}>
						<div className={classnames(styles.item, styles.logo)}>
							<SvgFavycon />
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
