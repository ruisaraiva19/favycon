import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import Image from 'next/image'

import styles from './index.module.scss'
import unsplashImageMobile from '../../public/images/unsplash-vertical.jpg'
import unsplashImageDesktop from '../../public/images/unsplash-horizontal.jpg'
import dndLight from '../../public/images/dnd-light.png'
import dndDark from '../../public/images/dnd-dark.png'

type FavyconWizardProps = {
	children: PropTypes.ReactNodeLike
	showDndImage: boolean
}

const unsplashImageProps = (isMobile: boolean) => ({
	src: isMobile ? unsplashImageMobile : unsplashImageDesktop,
	width: isMobile ? undefined : 540,
	height: isMobile ? undefined : 354,
})

const dndImageProps = (isDark: boolean) => ({
	src: isDark ? dndDark : dndLight,
	width: 185,
	height: 109,
})

const FavyconWizardComponent = ({ children, showDndImage }: FavyconWizardProps) => {
	return (
		<div className={styles.root}>
			<div className={styles.background}>
				<div className={styles.mobileBackground}>
					<Image alt="Unsplash image" placeholder="blur" layout="fill" {...unsplashImageProps(true)} />
				</div>
				<div className={styles.desktopBackground}>
					<Image alt="Unsplash image" placeholder="blur" layout="intrinsic" {...unsplashImageProps(false)} />
				</div>
			</div>
			{children}
			<div className={classnames(styles.image, { [styles.hide]: !showDndImage })}>
				<div className={styles.imageLight}>
					<Image alt="Drag and drop here!" {...dndImageProps(false)} layout="intrinsic" />
				</div>
				<div className={styles.imageDark}>
					<Image alt="Drag and drop here!" {...dndImageProps(true)} layout="intrinsic" />
				</div>
			</div>
		</div>
	)
}

export const FavyconWizard = React.memo(FavyconWizardComponent)
