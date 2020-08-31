import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { LazyImage } from 'components/lazy-image'

import styles from './index.module.scss'

type FavyconWizardProps = {
	children: PropTypes.ReactNodeLike
	showDndImage: boolean
}

const unsplashImageProps = (isMobile: boolean) => ({
	src: `/images/unsplash${isMobile ? '-vertical' : ''}@1x.jpg`,
	srcRetina: `/images/unsplash${isMobile ? '-vertical' : ''}@2x.jpg`,
	srcPlaceholder: `/images/unsplash${isMobile ? '-vertical' : ''}@placeholder.jpg`,
	alt: 'Unsplash',
	aspectRatio: isMobile ? '614/768' : '540/354',
	stretch: isMobile,
})

const FavyconWizardComponent = ({ children, showDndImage }: FavyconWizardProps) => {
	return (
		<div className={styles.root}>
			<div className={styles.background}>
				<LazyImage className={styles.mobileBackground} {...unsplashImageProps(true)} />
				<LazyImage className={styles.desktopBackground} {...unsplashImageProps(false)} />
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
