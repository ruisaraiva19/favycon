import dynamic from 'next/dynamic'
import Image from 'next/image'
import React, { useState, useRef } from 'react'
import classnames from 'classnames'
import { useDrag } from '@use-gesture/react'
import { Typography } from 'components/typography'
import { ToolTitle } from 'components/tool-title'
import { SvgTwitter } from 'components/svgs/svg-twitter'
import { SvgGithub } from 'components/svgs/svg-github'

import styles from './index.module.scss'
import { SvgFavycon } from 'components/svgs/svg-favycon'
import { Button } from 'components/button'
import { isTouchCapable } from 'utils/device'

import augustoLopes from '../../public/images/people/augusto-lopes.png'
import ruiSaraiva from '../../public/images/people/rui-saraiva.png'
import miguelTeixeira from '../../public/images/people/miguel-teixeira.png'

const Modal = dynamic(() => import('react-modal'))

const people = [
	{
		screenName: 'aboutaugusto',
		name: 'Augusto Lopes',
		role: 'Product Designer',
		social: 'twitter',
		photo: augustoLopes,
	},
	{
		screenName: 'ruisaraiva19',
		name: 'Rui Saraiva',
		role: 'Full-Stack Developer',
		social: 'twitter',
		photo: ruiSaraiva,
	},
	{
		screenName: 'miguellteixeira',
		name: 'Miguel Teixeira',
		role: 'Full-Stack Developer',
		social: 'github',
		photo: miguelTeixeira,
	},
]

const FavyconInfo = ({
	className,
	...props
}: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>) => {
	const [isModalOpen, setIsModalOpen] = useState(false)
	const modalBodyRef = useRef<HTMLDivElement>(null)

	const bind = useDrag(
		(state) => {
			const {
				swipe, // [swipeX, swipeY] 0 if no swipe detected, -1 or 1 otherwise
			} = state
			const isSwipeDown = swipe[1] === 1
			if (isSwipeDown && modalBodyRef.current?.scrollTop === 0) {
				setIsModalOpen(false)
			}
		},
		{
			enabled: isTouchCapable(),
			filterTaps: true,
		}
	)

	return (
		<div className={classnames(styles.root, className)} {...props}>
			<div className={styles.bodyMobile}>
				<Button variant="modalClose" className={styles.button} onClick={() => setIsModalOpen(true)}>
					About
				</Button>
			</div>
			<div className={styles.bodyDesktop}>
				<ToolTitle />
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
					<a href="https://unsplash.com" target="_blank" rel="noopener noreferrer">
						Unsplash
					</a>
					.
				</Typography>
			</div>
			<Modal
				ariaHideApp={false}
				isOpen={isModalOpen}
				onRequestClose={() => setIsModalOpen(false)}
				className={styles.content}
				overlayClassName={styles.overlay}
				closeTimeoutMS={200}
				contentLabel="About Us"
			>
				<div className={styles.modalContainer} {...bind()}>
					<div className={styles.modalHeaderMobile}>
						<div className={styles.modalHeaderTop}>
							<SvgFavycon className={styles.logoMobile} />
							<Button variant="modalClose" className={styles.button} onClick={() => setIsModalOpen(false)}>
								Close
							</Button>
						</div>
					</div>
					<div ref={modalBodyRef} className={styles.modalBodyScroll}>
						<div className={styles.modalHeaderMobile}>
							<ToolTitle hideLogo small />
							<Typography variant="largeBody" weight="medium" className={styles.firstParagraph}>
								A small online tool to help you generate your favicon in all the sizes and formats you need.
							</Typography>
							<Typography variant="largeBody" weight="medium" className={styles.secondParagraph}>
								Just drag &amp; drop an image and you will then get a downloadable file alongside some documentation on
								how to add the favicons.
							</Typography>
							<hr className={styles.hr} />
							<Typography variant="footer" weight="semiBold" color="gray" className={styles.footer}>
								Background image from{' '}
								<a href="https://unsplash.com" target="_blank" rel="noopener noreferrer">
									Unsplash
								</a>
								.
							</Typography>
						</div>
						<div className={styles.modalHeader}>
							<SvgFavycon className={styles.logo} />
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
										<Image
											src={person.photo}
											alt={person.name}
											width={56}
											height={56}
											placeholder="blur"
											layout="intrinsic"
										/>
									</div>
									<div>
										<Typography variant="largeBody" weight="semiBold">
											{person.name}
										</Typography>
										<Typography variant="regularBody" weight="medium" className={styles.personRole}>
											{person.role}
										</Typography>
										{person.social === 'twitter' ? (
											<a
												href={`https://twitter.com/${person.screenName}`}
												className={styles.personTwitter}
												target="_blank"
												rel="noopener noreferrer"
											>
												<Typography variant="footer" weight="semiBold">
													<SvgTwitter /> {person.screenName}
												</Typography>
											</a>
										) : (
											<a
												href={`https://github.com/${person.screenName}`}
												className={classnames(styles.personTwitter, styles.personGithub)}
												target="_blank"
												rel="noopener noreferrer"
											>
												<Typography variant="footer" weight="semiBold">
													<SvgGithub /> {person.screenName}
												</Typography>
											</a>
										)}
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
									href="https://github.com/ruisaraiva19/favycon"
									target="_blank"
									rel="noopener noreferrer"
								>
									GitHub
								</a>
								. Have feedback? Send it to{' '}
								<a className={styles.contact} href="mailto:hello@favycon.app">
									hello@favycon.app
								</a>
							</Typography>
						</div>
					</div>
				</div>
			</Modal>
		</div>
	)
}

export { FavyconInfo }
