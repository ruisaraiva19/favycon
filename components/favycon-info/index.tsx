import dynamic from 'next/dynamic'
import Image from 'next/image'
import React, { useState, useRef } from 'react'
import classnames from 'classnames'
import { useDrag } from '@use-gesture/react'
import { Typography } from 'components/typography'
import { ToolTitle } from 'components/tool-title'
import { SvgTwitter } from 'components/svgs/svg-twitter'
import { SvgGithub } from 'components/svgs/svg-github'
import { SvgWebsite } from 'components/svgs/svg-website'

import styles from './index.module.scss'
import { SvgFavycon } from 'components/svgs/svg-favycon'
import { Button } from 'components/button'
import { isTouchCapable } from 'utils/device'

import augustoLopes from '../../public/images/people/augusto-lopes.png'
import ruiSaraiva from '../../public/images/people/rui-saraiva.png'
import miguelTeixeira from '../../public/images/people/miguel-teixeira.png'

const Modal = dynamic(() => import('react-modal'))

// A lookup rather than a chain of ternaries in the JSX, because there are three
// kinds of link now. `personTwitter` is the shared base class — it predates the
// other two and carries the layout, so the modifiers only restate the colour.
const socials = {
	twitter: {
		Icon: SvgTwitter,
		url: (handle: string) => `https://twitter.com/${handle}`,
		modifier: undefined,
	},
	github: {
		Icon: SvgGithub,
		url: (handle: string) => `https://github.com/${handle}`,
		modifier: styles.personGithub,
	},
	website: {
		Icon: SvgWebsite,
		url: (handle: string) => `https://${handle}`,
		modifier: styles.personWebsite,
	},
}

const people = [
	{
		handle: 'aboutaugusto',
		name: 'Augusto Lopes',
		role: 'Product Designer',
		social: 'twitter' as const,
		photo: augustoLopes,
	},
	{
		handle: 'ruisaraiva.dev',
		name: 'Rui Saraiva',
		role: 'Full-Stack Developer',
		social: 'website' as const,
		photo: ruiSaraiva,
	},
	{
		handle: 'miguellteixeira',
		name: 'Miguel Teixeira',
		role: 'Full-Stack Developer',
		social: 'github' as const,
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
								For new updates be sure to follow these guys.
							</Typography>
						</div>
						<hr className={styles.hr} />
						<div className={styles.people}>
							{people.map((person) => {
								const { Icon, url, modifier } = socials[person.social]

								return (
									<div key={person.handle} className={styles.person}>
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
											<a
												href={url(person.handle)}
												className={classnames(styles.personTwitter, modifier)}
												target="_blank"
												rel="noopener noreferrer"
											>
												<Typography variant="footer" weight="semiBold">
													<Icon /> {person.handle}
												</Typography>
											</a>
										</div>
									</div>
								)
							})}
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
								<a className={styles.contact} href="mailto:hello@ruisaraiva.dev">
									hello@ruisaraiva.dev
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
