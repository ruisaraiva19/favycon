import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import useDarkMode from 'use-dark-mode'
import { LazyImage } from 'components/lazy-image'

import styles from './index.module.scss'
import { Typography } from 'components/typography'
import { SvgError } from 'components/svgs/svg-error'

type FavyconWizardProps = {
	children: PropTypes.ReactNodeLike
	backgroundId: number
	error: string
	clearError: () => void
	showDndImage: boolean
}

const FavyconWizardComponent = ({ children, backgroundId, error, clearError, showDndImage }: FavyconWizardProps) => {
	const { value: isDark } = useDarkMode(false)
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
					src={`/images/dnd-${isDark ? 'dark' : 'light'}@1x.png`}
					srcRetina={`/images/dnd-${isDark ? 'dark' : 'light'}@2x.png`}
					srcPlaceholder={`/images/dnd-${isDark ? 'dark' : 'light'}@1x.png`}
					alt="Drag and drop here!"
					aspectRatio="184/108"
				/>
			</div>
		</div>
	)
}

export const FavyconWizard = React.memo(FavyconWizardComponent)
