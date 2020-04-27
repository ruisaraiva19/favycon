import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { LazyImage } from 'components/lazy-image'

import styles from './index.module.scss'

type FavyconWizardProps = {
	children: PropTypes.ReactNodeLike
	backgroundId: number
	showDndImage: boolean
}

const FavyconWizardComponent = ({ children, backgroundId, showDndImage }: FavyconWizardProps) => {
	return (
		<div className={styles.root}>
			<div className={styles.background}>
				<LazyImage
					src={`/images/unsplash-${backgroundId}@1x.jpg`}
					srcRetina={`/images/unsplash-${backgroundId}@2x.jpg`}
					srcPlaceholder={`/images/unsplash-${backgroundId}@placeholder.jpg`}
					alt="Unsplash"
					aspectRatio="540/354"
				/>
			</div>
			{children}
			<div className={classnames(styles.image, { [styles.hide]: !showDndImage })}>
				<LazyImage
					src={`/images/dnd-light@1x.png`}
					srcRetina={`/images/dnd-light@2x.png`}
					alt="Drag and drop here!"
					aspectRatio="185/109"
					className={styles.imageLight}
				/>
				<LazyImage
					src={`/images/dnd-dark@1x.png`}
					srcRetina={`/images/dnd-dark@2x.png`}
					alt="Drag and drop here!"
					aspectRatio="185/109"
					className={styles.imageDark}
				/>
			</div>
		</div>
	)
}

export const FavyconWizard = React.memo(FavyconWizardComponent)
