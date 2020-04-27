import dynamic from 'next/dynamic'
import React, { useState } from 'react'
import classnames from 'classnames'
import { Typography } from 'components/typography'
import { ToolTitle } from 'components/tool-title'
import { LazyImage } from 'components/lazy-image'
import { SvgTwitter } from 'components/svgs/svg-twitter'

import styles from './index.module.scss'

const Modal = dynamic(() => import('react-modal'))

type FavyconInfoProps = {
	imageIndex: number
}

const unsplashImagesUrls = [
	'https://unsplash.com/photos/zKnQnyARggY',
	'https://unsplash.com/photos/UQAQm_EpWR8',
	'https://unsplash.com/photos/IXUM4cJynP0',
]

const people = [
	{
		screenName: 'aboutaugusto',
		name: 'Augusto Lopes',
		role: 'Product Designer',
	},
	{
		screenName: 'rgllm',
		name: 'Rogério Moreira',
		role: 'Front-End Developer',
	},
	{
		screenName: 'ruisaraiva19',
		name: 'Rui Saraiva',
		role: 'Full-Stack Developer',
	},
	{
		screenName: 'aNyTh1nGeDuArDo',
		name: 'Eduardo Pinto',
		role: 'Front-End Developer',
	},
]

const FavyconInfo = ({ imageIndex }: FavyconInfoProps) => {
	const [isModalOpen, setIsModalOpen] = useState(false)
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
			<Typography variant="footer" weight="semiBold" color="gray" className={styles.footer}>
				Created by{' '}
				<button className={styles.peopleButton} onClick={() => setIsModalOpen(true)}>
					{people.length} people
				</button>{' '}
				on their 2020’s worldwide quarantine. Background image from{' '}
				<a href={unsplashImagesUrls[imageIndex]} target="_blank" rel="noopener noreferrer">
					Unsplash
				</a>
				.
			</Typography>
			<Modal
				ariaHideApp={false}
				isOpen={isModalOpen}
				onRequestClose={() => setIsModalOpen(false)}
				className={styles.content}
				overlayClassName={styles.overlay}
				closeTimeoutMS={200}
				contentLabel="About Us">
				<div className={styles.modalContainer}>
					<div className={styles.modalHeader}>
						<img src="/favicon.svg" alt="Favycon logo" className={styles.logo} />
						<Typography variant="largeTitle" weight="bold" className={styles.title}>
							Behind the curtains
						</Typography>
						<Typography variant="largeBody" weight="medium" className={styles.subTitle}>
							For new updates be sure to follow these guys on Twitter.
						</Typography>
					</div>
					<hr className={styles.hr} />
					<div className={styles.people}>
						{people.map((person) => (
							<div key={person.screenName} className={styles.person}>
								<div className={styles.personAvatar}>
									<LazyImage
										src={`/images/people/${person.screenName}@1x.png`}
										srcRetina={`/images/people/${person.screenName}@2x.png`}
										alt={person.name}
										aspectRatio="56/56"
									/>
								</div>
								<div>
									<Typography variant="largeBody" weight="semiBold">
										{person.name}
									</Typography>
									<Typography variant="regularBody" weight="medium">
										{person.role}
									</Typography>
									<a
										href={`https://twitter.com/${person.screenName}`}
										className={styles.personTwitter}
										target="_blank"
										rel="noopener noreferrer">
										<Typography variant="footer" weight="semiBold">
											<SvgTwitter /> {person.screenName}
										</Typography>
									</a>
								</div>
							</div>
						))}
					</div>
					<hr className={styles.hr} />
					<div className={classnames(styles.footer, styles.modalFooter)}>
						<Typography variant="footer" weight="semiBold" color="gray">
							Project on{' '}
							<a
								className={styles.repo}
								href="https://github.com/toolslab/favycon"
								target="_blank"
								rel="noopener noreferrer">
								GitHub
							</a>
							. Have feedback? Send it to{' '}
							<a className={styles.contact} href="mailto:hello@favycon.app">
								hello@favycon.app
							</a>
						</Typography>
					</div>
				</div>
			</Modal>
		</div>
	)
}

export { FavyconInfo }
