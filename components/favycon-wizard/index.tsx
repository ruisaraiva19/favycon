import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { LazyImage } from 'components/lazy-image'
import { Typography } from 'components/typography'
import { SvgError } from 'components/svgs/svg-error'

import styles from './index.module.scss'

type FavyconWizardProps = {
	children: PropTypes.ReactNodeLike
	backgroundId: number
	error: string
	clearError: () => void
	showDndImage: boolean
}

const FavyconWizardComponent = ({ children, backgroundId, error, clearError, showDndImage }: FavyconWizardProps) => {
	return (
		<div className={styles.root}>
			<div className={classnames(styles.error, { [styles.hide]: !error })}>
				<Typography variant="regularBody" color="white" weight="semiBold">
					{error}
				</Typography>
				<SvgError className={styles.errorIcon} transparent onClick={clearError} />
			</div>
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
					aspectRatio="184/108"
					className={styles.imageLight}
				/>
				<LazyImage
					src={`/images/dnd-dark@1x.png`}
					srcRetina={`/images/dnd-dark@2x.png`}
					alt="Drag and drop here!"
					aspectRatio="184/108"
					className={styles.imageDark}
				/>
			</div>
		</div>
	)
}

export const FavyconWizard = React.memo(FavyconWizardComponent)
