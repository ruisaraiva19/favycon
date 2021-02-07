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
	placeholderHash: isMobile ? 'UT0Lxlh2ghgMeSeoe@fkflf5e.e:e.e.f6fk' : 'Un0V-,h2g#gMe,f8f9fif8f6f6f8f6f7fQfQ',
	alt: 'Unsplash',
	aspectRatio: isMobile ? '614/768' : '540/354',
	stretch: isMobile,
})

const dndImageProps = (isDark: boolean) => ({
	src: `/images/dnd-${isDark ? 'dark' : 'light'}@1x.png`,
	srcRetina: `/images/dnd-${isDark ? 'dark' : 'light'}@2x.png`,
	alt: 'Drag and drop here!',
	aspectRatio: '185/109',
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
				<LazyImage {...dndImageProps(false)} className={styles.imageLight} />
				<LazyImage {...dndImageProps(true)} className={styles.imageDark} />
			</div>
		</div>
	)
}

export const FavyconWizard = React.memo(FavyconWizardComponent)
