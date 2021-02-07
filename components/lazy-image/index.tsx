import React, { useRef, useEffect } from 'react'
import { LazyImageFull, ImageState } from 'react-lazy-images'
import objectFitImages from 'object-fit-images'
import { BlurhashCanvas } from 'react-blurhash'
import classNames from 'classnames'

import styles from './index.module.scss'

type LazyImageProps = {
	src: string
	srcRetina?: string
	placeholderHash?: string
	alt: string
	aspectRatio: string
	stretch?: boolean
	rounded?: boolean
} & React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>

const LazyImage = ({
	src,
	srcRetina = src,
	placeholderHash,
	alt,
	aspectRatio,
	stretch = false,
	rounded = false,
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
						className={classNames(styles.root, { [styles.stretch]: stretch, [styles.rounded]: rounded })}
						ref={ref}
						style={{ paddingBottom: `${(height / width) * 100}%` }}
						{...props}>
						{placeholderHash ? (
							<BlurhashCanvas
								className={styles.placeholder}
								hash={placeholderHash}
								width={32}
								height={32}
								style={{ opacity: loaded ? 0 : 1 }}
							/>
						) : null}
						<img
							ref={imgRef}
							className={styles.normal}
							{...imageProps}
							alt={imageProps.alt}
							style={{ opacity: loaded ? 1 : 0 }}
							loading="lazy"
						/>
					</div>
				)
			}}
		</LazyImageFull>
	)
}

export { LazyImage }
