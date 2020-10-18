import PropTypes from 'prop-types'
import { Header } from 'components/header'

import styles from './index.module.scss'

type BaseLayoutProps = {
	children: PropTypes.ReactNodeLike
}

const BaseLayout = ({ children }: BaseLayoutProps) => {
	return (
		<div className={styles.root}>
			<Header />
			{children}
		</div>
	)
}

export { BaseLayout }
