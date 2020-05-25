import React, { useRef, useEffect } from 'react'
import { LazyImageFull, ImageState } from 'react-lazy-images'
import objectFitImages from 'object-fit-images'
import classNames from 'classnames'

import styles from './index.module.scss'

type LazyImageProps = {
	src: string
	srcRetina?: string
	srcPlaceholder?: string
	alt: string
	aspectRatio: string
	stretch?: boolean
} & React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>

const LazyImage = ({
	src,
	srcRetina = src,
	srcPlaceholder = src,
	alt,
	aspectRatio,
	stretch = false,
	...props
}: LazyImageProps) => {
	const [widthString, heightString] = aspectRatio.split('/')
	const width = parseInt(widthString)
	const height = parseInt(heightString)

	const imgRef = useRef<HTMLImageElement>(null)

	useEffect(() => {
		if (imgRef.current) {
			objectFitImages(imgRef.current)
		}
	}, [imgRef])

	return (
		<LazyImageFull src={src} srcSet={`${src} 1x, ${srcRetina} 2x`} alt={alt}>
			{({ imageProps, imageState, ref }) => {
				const loaded = imageState === ImageState.LoadSuccess
				return (
					<div
						className={classNames(styles.root, { [styles.stretch]: stretch })}
						ref={ref}
						style={{ paddingBottom: `${(height / width) * 100 + '%'}` }}
						{...props}>
						<img
							className={styles.placeholder}
							src={srcPlaceholder}
							alt={imageProps.alt}
							style={{ opacity: loaded ? 0 : 1 }}
						/>
						<img
							ref={imgRef}
							className={styles.normal}
							{...imageProps}
							alt={imageProps.alt}
							style={{ opacity: loaded ? 1 : 0 }}
						/>
					</div>
				)
			}}
		</LazyImageFull>
	)
}

export { LazyImage }
