import React from 'react'
import { Typography } from 'components/typography'
import { ToolTitle } from 'components/tool-title'

import styles from './index.module.scss'

type FavyconInfoProps = {
	imageIndex: number
}

const unsplashImagesUrls = [
	'https://unsplash.com/photos/zKnQnyARggY',
	'https://unsplash.com/photos/UQAQm_EpWR8',
	'https://unsplash.com/photos/IXUM4cJynP0',
]

const FavyconInfo = ({ imageIndex }: FavyconInfoProps) => {
	return (
		<div className={styles.root}>
			<ToolTitle>Favycon</ToolTitle>
			<Typography variant="largeBody" weight="medium" className={styles.firstParagraph}>
				A small online tool to help you generate your favicon in all the sizes and formats you need.
			</Typography>
			<Typography variant="largeBody" weight="medium" className={styles.secondParagraph}>
				Just drag &amp; drop an image and you will then get a downloadable file alongside some documentation on how to
				add the favicons.
			</Typography>
			<hr />
			<Typography variant="footer" weight="semiBold" color="gray">
				Created by <a href="/#">4 people</a> on their 2020’s worldwide quarantine. Background image from{' '}
				<a href={unsplashImagesUrls[imageIndex]} target="_blank" rel="noopener noreferrer">
					Unsplash
				</a>
				.
			</Typography>
		</div>
	)
}

export { FavyconInfo }
