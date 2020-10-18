import PropTypes from 'prop-types'

import styles from './index.module.scss'

type StickyProps = {
	children: PropTypes.ReactNodeLike
}

const Sticky = ({ children }: StickyProps) => {
	return (
		<div className={styles.root}>
			<div className={styles.sticky}>{children}</div>
		</div>
	)
}

export { Sticky }
