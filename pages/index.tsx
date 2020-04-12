import React, { useMemo } from 'react'
import { NextPage } from 'next'
import useDarkMode from 'use-dark-mode'
import { LazyImage } from 'components/lazy-image'
import { BaseLayout } from 'components/base-layout'
import { Typography } from 'components/typography'
import { SEO } from 'components/seo'
import { ToolTitle } from 'components/tool-title'
import { DragAndDrop } from 'components/drag-and-drop'

import styles from './index.module.scss'

const getRandomNumber = (min = 1, max = 3) => Math.floor(Math.random() * max) + min

const unsplashImagesUrls = [
	'https://unsplash.com/photos/zKnQnyARggY',
	'https://unsplash.com/photos/UQAQm_EpWR8',
	'https://unsplash.com/photos/IXUM4cJynP0',
]

const Home: NextPage = () => {
	const { value: isDark } = useDarkMode(false)
	const backgroundId = useMemo(() => getRandomNumber(), [])
	const onDrop = (acceptedFiles: File[]) => {
		console.log('acceptedFiles[0]', acceptedFiles[0])
	}

	return (
		<BaseLayout>
			<SEO
				title="Favycon"
				description="A small online tool to help you generate your favicon in all the sizes and formats you need."
			/>
			<main className={styles.container}>
				<div className={styles.info}>
					<ToolTitle>Favycon</ToolTitle>
					<Typography variant="largeBody" weight="medium" className={styles.firstParagraph}>
						A small online tool to help you generate your favicon in all the sizes and formats you need.
					</Typography>
					<Typography variant="largeBody" weight="medium" className={styles.secondParagraph}>
						Just drag &amp; drop an image and you will then get a downloadable file alongside some documentation on how
						to add the favicons.
					</Typography>
					<hr />
					<Typography variant="footer" weight="semiBold" color="gray">
						Created by <a href="/#">4 people</a> on their 2020’s worldwide quarantine. Background image from{' '}
						<a href={unsplashImagesUrls[backgroundId - 1]} target="_blank" rel="noopener noreferrer">
							Unsplash
						</a>
						.
					</Typography>
				</div>
				<div className={styles.dragAndDrop}>
					<div className={styles.background}>
						<LazyImage
							src={`/images/unsplash-${backgroundId}@1x.jpg`}
							srcRetina={`/images/unsplash-${backgroundId}@2x.jpg`}
							srcPlaceholder={`/images/unsplash-${backgroundId}@placeholder.jpg`}
							alt="Unsplash"
							aspectRatio="540/354"
						/>
					</div>
					<DragAndDrop onDrop={onDrop} />
					<div className={styles.image}>
						<LazyImage
							src={`/images/dnd-${isDark ? 'dark' : 'light'}@1x.png`}
							srcRetina={`/images/dnd-${isDark ? 'dark' : 'light'}@2x.png`}
							srcPlaceholder={`/images/dnd-${isDark ? 'dark' : 'light'}@1x.png`}
							alt="Drag and drop here!"
							aspectRatio="184/108"
						/>
					</div>
				</div>
			</main>
		</BaseLayout>
	)
}

export default Home
