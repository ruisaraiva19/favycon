/* eslint-disable @next/next/no-img-element */
import dynamic from 'next/dynamic'
import React, { useState, useEffect, useCallback, useRef } from 'react'
import classnames from 'classnames'
import { useDropzone, FileRejection } from 'react-dropzone'
import { CSSTransition } from 'react-transition-group'
import { useDrag } from '@use-gesture/react'
import splitbee from '@splitbee/web'
import { headTemplate } from 'utils/favicon'
import { isTouchCapable } from 'utils/device'
import { Typography } from 'components/typography'
import { CodeHighlight } from 'components/code-highlight'
import { SvgDropZone } from 'components/svgs/svg-drop-zone'
import { SvgImageUpload } from 'components/svgs/svg-image-upload'
import { SvgInfo } from 'components/svgs/svg-info'
import {
	ONE_MB,
	ACCEPT_MIME_TYPES,
	getImageFileSizes,
	RECOMMENDED_MIME_TYPES,
	MIN_SIZE,
	MIN_PWA_SIZE,
	SVG_MIME_TYPE,
	downloadFile,
} from 'utils/files'
import { Button } from 'components/button'
import { SvgCheck } from 'components/svgs/svg-check'
import { SvgError } from 'components/svgs/svg-error'
import { Checkbox } from 'components/checkbox'
import { useToggle } from 'hooks/use-toggle'
import { useMediaQueryContext } from 'components/media-query-provider'

import styles from './index.module.scss'

const Modal = dynamic(() => import('react-modal'))
const Clipboard = dynamic(() => import('react-clipboard.js'))

export type DragAndDropProps = {
	onFile: (hasFile: boolean) => void
	onGenerate: (image: File, pwa: boolean, darkMode: boolean) => Promise<ArrayBuffer>
	onError: (message: string) => void
}

const DragAndDrop = ({ onFile, onGenerate, onError }: DragAndDropProps) => {
	const { isMobile } = useMediaQueryContext()
	const [imageSizes, setImageSizes] = useState({ width: 0, height: 0 })
	const [image, setImage] = useState<File>()
	const [imageBase64, setImageBase64] = useState('')
	const [imageBgBase64, setImageBgBase64] = useState('')
	const [imageData, setImageData] = useState({ name: '', extension: '' })
	const [title, setTitle] = useState('')
	const [isSquare, setIsSquare] = useState(false)
	const [isPngOrSvg, setIsPngOrSvg] = useState(false)
	const [isSvg, setIsSvg] = useState(false)
	const [is310px, setIs310px] = useState(false)
	const [is512px, setIs512px] = useState(false)
	const [isLoading, setIsLoading] = useState(false)
	const [pwa, togglePwa] = useToggle(false)
	const [darkMode, toggleDarkMode] = useToggle(false)
	const [zipData, setZipData] = useState<ArrayBuffer>()
	const [isModalOpen, setIsModalOpen] = useState(false)
	const modalBodyRef = useRef<HTMLPreElement>(null)
	const [copied, setCopied] = useState(false)
	const PWADisabled = !isSvg && !is512px
	let sizesCount = 16
	if (isSvg) {
		sizesCount += 1
	}
	if (pwa) {
		sizesCount += 3
	}

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

	const generateImgFromCanvas = useCallback(() => {
		const canvas = document.createElement('canvas')
		canvas.width = imageSizes.width
		canvas.height = imageSizes.height
		const ctx = canvas.getContext('2d')
		if (ctx) {
			ctx.fillStyle = 'white'
			ctx.fillRect(0, 0, imageSizes.width, imageSizes.height)
			return canvas.toDataURL()
		}
		return ''
	}, [imageSizes])

	useEffect(() => {
		const reader = new FileReader()
		reader.onloadend = () => {
			setImageBase64(reader.result as string)
			setImageBgBase64(generateImgFromCanvas())
		}
		if (image) {
			reader.readAsDataURL(image)
			const matches = /(.+)(\..+)$/.exec(image.name) as RegExpExecArray
			const length = isMobile ? 15 : 30
			const name = matches[1].length > length ? `${matches[1].slice(0, length)}..` : matches[1].slice(0, length)
			setImageData({ name, extension: matches[2] })
		}
	}, [image, zipData, generateImgFromCanvas, isMobile])

	useEffect(() => {
		if (!image) {
			return
		} else if ((isPngOrSvg && isSquare && is310px) || isSvg) {
			setTitle('Good to go!')
		} else if (isSquare && isPngOrSvg && !is310px && !isSvg) {
			setTitle('Your image should be higher than 310px')
		} else if ((isSquare && !isPngOrSvg && !is310px) || (!isSquare && !isPngOrSvg && is310px)) {
			setTitle('Your image has a few problems')
		} else if (isSquare && !isPngOrSvg && is310px) {
			setTitle('Your image should be in PNG or SVG')
		} else if (!isSquare && isPngOrSvg && is310px) {
			setTitle('Your image should be squared')
		} else {
			setTitle('Your image is not in a good place')
		}
	}, [image, isSquare, is310px, isPngOrSvg, isSvg])

	const generateFavicon = async (file: File) => {
		try {
			setIsLoading(true)
			const zip = await onGenerate(file, pwa, darkMode)
			setZipData(zip)
			splitbee.track('Favicon generated', {
				type: file.type,
				size: file.size,
				pwa,
				darkMode,
			})
		} catch (error: any) {
			const message = (error.message as string) || 'Something went wrong. Please try again.'
			onError(message)
			splitbee.track('Favicon error', {
				type: file.type,
				size: file.size,
				pwa,
				darkMode,
				message,
			})
		} finally {
			setIsLoading(false)
		}
	}

	const onDownload = (zipData: ArrayBuffer) => {
		downloadFile(zipData, 'favicons.zip')
		splitbee.track('Download Favicon')
	}

	const resetImage = () => {
		setImage(undefined)
		onFile(false)
		setZipData(undefined)
	}

	const onDrop = async (acceptedFiles: File[], fileRejections: FileRejection[]) => {
		if (acceptedFiles.length) {
			const file = acceptedFiles[0]
			const sizes = await getImageFileSizes(file)
			setImageSizes(sizes)
			setIsSquare(sizes.width === sizes.height)
			setIsPngOrSvg(RECOMMENDED_MIME_TYPES.includes(file.type))
			setIsSvg(file.type === SVG_MIME_TYPE)
			setIs310px(sizes.width >= MIN_SIZE && sizes.height >= MIN_SIZE)
			setIs512px(sizes.width >= MIN_PWA_SIZE && sizes.height >= MIN_PWA_SIZE)
			onError('')
			onFile(true)
			setImage(file)
			splitbee.track('Drop Accepted', {
				...sizes,
				type: file.type,
				size: file.size,
			})
		} else if (fileRejections.length) {
			const file = fileRejections[0].file
			let message = ''
			if (!Object.keys(ACCEPT_MIME_TYPES).includes(file.type)) {
				message = `The image file should be a ${Object.values(ACCEPT_MIME_TYPES).join(' or ')}`
			} else if (file.size > ONE_MB) {
				message = `The ${ACCEPT_MIME_TYPES[file.type]} file needs to be lower than 1 MB`
			} else {
				message = 'idk'
			}
			onError(message)
			onFile(false)
			splitbee.track('Drop Rejected', {
				type: file.type,
				size: file.size,
				message,
			})
		}
	}

	const { getRootProps, getInputProps, isDragActive } = useDropzone({
		// eslint-disable-next-line @typescript-eslint/no-misused-promises
		onDrop,
		accept: Object.keys(ACCEPT_MIME_TYPES),
		maxSize: ONE_MB,
		multiple: false,
	})

	const onCopy = () => {
		setCopied(true)
		setTimeout(() => {
			setCopied(false)
		}, 3000)
		splitbee.track('Code copied')
	}

	const [isHover, setIsHover] = useState(false)

	return (
		<div className={classnames(styles.root, { [styles.transparent]: !image })}>
			<div
				className={classnames(styles.container, {
					[styles.loading]: isLoading,
					[styles.transparent]: !image,
				})}
			>
				{!image && !zipData && (
					<>
						<div
							className={styles.dropZoneWrapper}
							onMouseEnter={() => setIsHover(true)}
							onMouseLeave={() => setIsHover(false)}
						>
							<SvgDropZone className={classnames(styles.dashed, { [styles.dragActive]: isDragActive })} />
							<div {...getRootProps()} className={styles.dropZone} data-cy="drag-and-drop">
								<input {...getInputProps()} />
								<div className={styles.imageUpload}>
									<SvgImageUpload active={isDragActive || isHover} />
								</div>
								<Typography
									variant="regularBody"
									weight="medium"
									className={classnames(styles.imageUploadText, styles.mobileUploadText, {
										[styles.dragActive]: isDragActive,
									})}
									data-cy="drag-and-drop-text"
								>
									<span>
										Generate all the sizes for your
										<br />
										favicon. Tap to upload a file.
									</span>
								</Typography>
								<Typography
									variant="regularBody"
									weight="medium"
									className={classnames(styles.imageUploadText, styles.desktopUploadText, {
										[styles.dragActive]: isDragActive,
									})}
									data-cy="drag-and-drop-text"
								>
									<CSSTransition in={!isDragActive} timeout={200} classNames="collapse" unmountOnExit>
										<span>Drag &amp;&nbsp;</span>
									</CSSTransition>
									<span>{isDragActive ? 'Drop' : 'drop'}</span>
									<CSSTransition in={!isDragActive} timeout={200} classNames="collapse" unmountOnExit>
										<span>&nbsp;an</span>
									</CSSTransition>
									<span>&nbsp;image file here</span>
									<CSSTransition in={isDragActive} timeout={200} classNames="collapse" unmountOnExit>
										<span>...</span>
									</CSSTransition>
									<CSSTransition in={!isDragActive} timeout={200} classNames="fade" unmountOnExit>
										<span>,</span>
									</CSSTransition>
									<br />
									<CSSTransition in={!isDragActive} timeout={200} classNames="fade" unmountOnExit>
										<span>or click to select a file.</span>
									</CSSTransition>
								</Typography>
							</div>
						</div>
						<div className={styles.dropZoneFooter}>
							<Typography variant="regularBody" weight="medium" className={styles.info}>
								<SvgInfo />{' '}
								<span>
									We recommend a square <strong>PNG</strong> or <strong>SVG</strong> with at least 310px
								</span>
							</Typography>
							<Typography variant="regularBody" weight="medium" className={styles.info}>
								<SvgInfo /> No data or images are stored
							</Typography>
						</div>
					</>
				)}
				{image && !zipData && (
					<>
						<div className={styles.imagePreviewWrapper}>
							<div className={classnames(styles.imagePreview, { [styles.notSquare]: !isSquare })}>
								<img src={imageBgBase64} alt="Favicon preview background" />
								<img src={imageBase64} alt="Favicon preview" />
							</div>
							<div className={styles.imagePreviewInfo}>
								<Typography variant="title" weight="bold" className={styles.filename} data-cy="preview-title">
									{title}
								</Typography>
								<Typography
									variant="footer"
									weight="semiBold"
									color="gray"
									tag="div"
									className={styles.filenameWrapper}
								>
									<span className={styles.filename} data-cy="preview-filename">
										{imageData.name}
										{imageData.extension}
									</span>
									<span className={styles.fileSize} data-cy="preview-file-size">
										({imageSizes.width}x{imageSizes.height})
									</span>
								</Typography>
							</div>
						</div>
						<div className={styles.imageInfo}>
							<div className={styles.imageInfoItem}>
								<span data-cy="preview-square-image">{isSquare ? <SvgCheck /> : <SvgError />}</span>
								<Typography variant="regularBody" weight="semiBold">
									Square image
								</Typography>
							</div>
							<div className={styles.imageInfoItem}>
								<span data-cy="preview-png-svg-image">{isPngOrSvg ? <SvgCheck /> : <SvgError />}</span>
								<Typography variant="regularBody" weight="semiBold">
									PNG or SVG
								</Typography>
							</div>
							<div className={styles.imageInfoItem}>
								<span data-cy="preview-310px-image">
									{isSvg || is310px ? <SvgCheck disabled={isSvg} /> : <SvgError />}
								</span>
								<Typography variant="regularBody" weight="semiBold" muted={isSvg}>
									310px or higher
								</Typography>
							</div>
						</div>
						<div className={styles.imageOptionsWrapper}>
							<Typography variant="footer" weight="semiBold" color="gray">
								Advanced
							</Typography>
							<div className={styles.imageOptions}>
								<div className={styles.imageInfoItem}>
									<Checkbox
										name="pwa"
										id="pwa"
										disabled={PWADisabled}
										onChange={togglePwa}
										data-cy="preview-pwa-compatible"
									>
										<Typography variant="regularBody" weight="semiBold" muted={PWADisabled}>
											PWA compatible
										</Typography>
										<Typography variant="footer" weight="semiBold" color="green" muted={PWADisabled || isSvg}>
											512px or higher{' '}
											<SvgCheck className={classnames(styles.pwaCheck, { [styles.hide]: PWADisabled || isSvg })} />
										</Typography>
									</Checkbox>
								</div>
								<div className={styles.imageInfoItem}>
									<Checkbox
										name="dark"
										id="dark"
										disabled
										onChange={toggleDarkMode}
										data-cy="preview-dark-mode-version"
									>
										<Typography variant="regularBody" weight="semiBold" muted>
											Dark Mode version
										</Typography>
										<Typography variant="footer" weight="semiBold" color="green" muted>
											Coming soon
										</Typography>
									</Checkbox>
								</div>
							</div>
						</div>
						<div className={styles.imageFooter}>
							<Button
								variant="transparent"
								color="gray"
								className={styles.reUpload}
								onClick={() => {
									splitbee.track('Re-upload')
									resetImage()
								}}
							>
								Re-upload
							</Button>
							<Button
								color="white"
								background="bgLink"
								className={styles.imageGenerate}
								onClick={() => {
									generateFavicon(image)
								}}
							>
								Generate Favicon
							</Button>
						</div>
					</>
				)}
				{zipData && (
					<>
						<div>
							<div className={styles.imagePreviewDownload}>
								<div className={classnames(styles.preview, styles.circle)}>
									<img src={imageBase64} alt="Favicon preview circle" />
								</div>
								<div className={classnames(styles.preview, styles.square)}>
									<img src={imageBase64} alt="Favicon preview square" />
								</div>
								<div className={classnames(styles.preview, styles.rounded)}>
									<img src={imageBase64} alt="Favicon preview rounded" />
								</div>
							</div>
							<Typography variant="title" weight="bold" className={styles.imagePreviewTitle}>
								Your new favicon is ready!
							</Typography>
							<Typography variant="footer" weight="semiBold" color="gray" className={styles.imagePreviewSubtitle}>
								We’ve prepared a zip file with all the sizes and a README with the code plus other resources.
							</Typography>
						</div>
						<div className={styles.imageInfo}>
							<div className={styles.imageInfoItem}>
								<SvgInfo className={styles.imageInfoItemSvg} />
								<Typography variant="regularBody" weight="medium">
									{sizesCount} different sizes
								</Typography>
							</div>
							<div className={styles.imageInfoItem}>
								<SvgInfo className={styles.imageInfoItemSvg} />
								<Typography variant="regularBody" weight="medium">
									Code generated
								</Typography>
								<Button
									className={styles.showCode}
									variant="regularTransparent"
									color="gray"
									onClick={() => setIsModalOpen(true)}
								>
									Show
								</Button>
							</div>
						</div>
						<div className={classnames(styles.imageFooter, styles.spaceBetween)}>
							<Button
								variant="transparent"
								color="gray"
								className={styles.makeNewOne}
								onClick={() => {
									splitbee.track('Make a new one')
									resetImage()
								}}
							>
								Make a new one
							</Button>
							<Button
								color="white"
								background="bgGreen"
								className={styles.imageGenerate}
								onClick={() => onDownload(zipData)}
							>
								Download Favicon
							</Button>
						</div>
					</>
				)}
				<Modal
					ariaHideApp={false}
					isOpen={isModalOpen}
					onRequestClose={() => setIsModalOpen(false)}
					className={styles.content}
					overlayClassName={styles.overlay}
					closeTimeoutMS={200}
					contentLabel="Code generated"
				>
					<div className={styles.modalContainer} {...bind()}>
						<div className={classnames(styles.modalHeader, styles.modalHeaderMobile)}>
							<Typography variant="extraLargeTitle" weight="extraBold" color="white" colorImmutable>
								Code
							</Typography>
							<Button variant="modalClose" color="white" background="bgDarkGray" onClick={() => setIsModalOpen(false)}>
								Close
							</Button>
						</div>
						<div className={classnames(styles.modalHeader, styles.modalHeaderDesktop)}>
							<Typography variant="title" weight="bold">
								Insert the following code in the &lt;head&gt; section of your pages:
							</Typography>
							<Clipboard component="div" data-clipboard-text={headTemplate(undefined, isSvg, pwa)} onSuccess={onCopy}>
								<div className={classnames(styles.copyWrapper, { [styles.copied]: copied })}>
									<Button color="white" background="bgLink">
										Copy code
									</Button>
								</div>
							</Clipboard>
						</div>
						<div className={styles.modalCode}>
							<Typography variant="title" weight="bold" color="white" colorImmutable className={styles.modalCodeTitle}>
								Insert the following code in the &lt;head&gt; section of your pages:
							</Typography>
							<CodeHighlight ref={modalBodyRef} template={headTemplate(undefined, isSvg, pwa)} />
							<Clipboard component="div" data-clipboard-text={headTemplate(undefined, isSvg, pwa)} onSuccess={onCopy}>
								<div className={classnames(styles.copyWrapper)}>
									<Button color="white" background="bgLink">
										{copied ? 'Copied!' : 'Copy code'}
									</Button>
								</div>
							</Clipboard>
						</div>
					</div>
				</Modal>
			</div>
		</div>
	)
}

export { DragAndDrop }
