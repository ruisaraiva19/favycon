import dynamic from 'next/dynamic'
import React, { useState, useEffect, useCallback } from 'react'
import classnames from 'classnames'
import useDarkMode from 'use-dark-mode'
import { useDropzone } from 'react-dropzone'
import Prism from 'prismjs'
import { Typography } from 'components/typography'
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

import styles from './index.module.scss'

const Modal = dynamic(() => import('react-modal'))

const customStyles: any = {
	/* stylelint-disable */
	overlay: {
		position: 'fixed',
		top: 0,
		right: 0,
		bottom: 0,
		left: 0,
		zIndex: 10,
		backgroundColor: 'rgba(255, 255, 255, 0.64)',
	},
	content: {
		position: 'absolute',
		top: '50%',
		left: '50%',
		width: '100%',
		maxWidth: '730px',
		height: '100%',
		maxHeight: '536px',
		padding: '0',
		overflow: 'auto',
		background: 'transparent',
		border: 'none',
		borderRadius: '0',
		outline: 'none',
		transform: 'translate(-50%, -50%)',
		WebkitOverflowScrolling: 'touch',
	},
}

const code = `<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
<link rel="manifest" href="/site.webmanifest">
<link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5">
<meta name="msapplication-TileColor" content="#da532c">
<meta name="theme-color" content="#ffffff">`

type DragAndDropProps = {
	onFile: (hasFile: boolean) => void
	onGenerate: (image: File) => Promise<ArrayBuffer>
	onError: (message: string) => void
}

const DragAndDrop = ({ onFile, onGenerate, onError }: DragAndDropProps) => {
	const { value: isDark } = useDarkMode(false)
	const [imageSizes, setImageSizes] = useState({ width: 0, height: 0 })
	const [image, setImage] = useState<File>()
	const [imageBase64, setImageBase64] = useState('')
	const [imageBgBase64, setImageBgBase64] = useState('')
	const [title, setTitle] = useState('')
	const [isSquare, setIsSquare] = useState(false)
	const [isPngOrSvg, setIsPngOrSvg] = useState(false)
	const [isSvg, setIsSvg] = useState(false)
	const [is310px, setIs310px] = useState(false)
	const [is1024px, setIs1024px] = useState(false)
	const [isLoading, setIsLoading] = useState(false)
	const [pwa, setPwa] = useState(false)
	const [zipData, setZipData] = useState<ArrayBuffer>()
	const [isModalOpen, setIsModalOpen] = useState(false)
	const [htmlCode, setHtmlCode] = useState('')
	const PWADisabled = !isSvg || !is1024px

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
		}
	}, [image, zipData, generateImgFromCanvas])

	useEffect(() => {
		if (isPngOrSvg && isSquare) {
			setTitle('Good to go!')
		} else if (isSquare && isPngOrSvg && !is310px) {
			setTitle('Your image is lower than 310px')
		} else if ((!isSquare && !isPngOrSvg) || (!isSquare && !is310px) || (!isPngOrSvg && !is310px)) {
			setTitle('Your image has a few issues')
		} else {
			setTitle('Your image is not in a good place')
		}
	}, [isSquare, is310px, isPngOrSvg])

	const generateFavicon = async (file: File) => {
		try {
			setIsLoading(true)
			const zip = await onGenerate(file)
			setZipData(zip)
			setHtmlCode(Prism.highlight(code, Prism.languages.markup, 'markup'))
		} catch (error) {
			console.log(error)
		} finally {
			setIsLoading(false)
		}
	}

	const onDownload = (zipData: ArrayBuffer) => {
		downloadFile(zipData, 'favicons.zip')
	}

	const resetImage = () => {
		setImage(undefined)
		onFile(false)
		setZipData(undefined)
	}

	const onDrop = async (acceptedFiles: File[], rejectedFiles: File[]) => {
		if (acceptedFiles.length) {
			const file = acceptedFiles[0]
			const sizes = await getImageFileSizes(file)
			setImageSizes({ width: 48, height: (48 * sizes.height) / sizes.width })
			setIsSquare(sizes.width === sizes.height)
			setIsPngOrSvg(RECOMMENDED_MIME_TYPES.includes(file.type))
			setIsSvg(file.type === SVG_MIME_TYPE)
			setIs310px(sizes.width >= MIN_SIZE && sizes.height >= MIN_SIZE)
			setIs1024px(sizes.width >= MIN_PWA_SIZE && sizes.height >= MIN_PWA_SIZE)
			onError('')
			onFile(true)
			setImage(file)
		} else if (rejectedFiles.length) {
			const file = rejectedFiles[0]
			if (file.size > ONE_MB) {
				onError(`The ${ACCEPT_MIME_TYPES[file.type]} file needs to be lower than 1 MB`)
			} else if (!Object.keys(ACCEPT_MIME_TYPES).includes(file.type)) {
				onError(`The image file should be a ${Object.values(ACCEPT_MIME_TYPES).join(' or ')}`)
			} else {
				onError('idk')
			}
			onFile(false)
		}
	}

	const { getRootProps, getInputProps, isDragActive } = useDropzone({
		onDrop,
		accept: Object.keys(ACCEPT_MIME_TYPES),
		maxSize: ONE_MB,
	})

	const closeModal = () => {
		setIsModalOpen(false)
	}

	const copyCode = () => {
		console.log('copyCode')
	}

	return (
		<div className={classnames(styles.root, { [styles.dark]: isDark, [styles.loading]: isLoading })}>
			{!image && !zipData && (
				<>
					<div className={classnames(styles.dropZoneWrapper, { [styles.dark]: isDark })}>
						<SvgDropZone
							className={classnames(styles.dashed, { [styles.dragActive]: isDragActive, [styles.dark]: isDark })}
						/>
						<div {...getRootProps()} className={styles.dropZone}>
							<input {...getInputProps()} />
							<div className={styles.imageUpload}>
								<SvgImageUpload />
							</div>
							<Typography
								variant="regularBody"
								weight="medium"
								className={classnames(styles.imageUploadText, { [styles.dark]: isDark })}>
								Drag &amp; drop a .png file or
								<br />
								<u>click here to upload it</u>.
							</Typography>
						</div>
					</div>
					<Typography variant="regularBody" weight="medium" className={styles.info}>
						<SvgInfo /> We recommend a square <strong>PNG</strong> or <strong>SVG</strong> with at least 310px
					</Typography>
					<Typography variant="regularBody" weight="medium" className={styles.info}>
						<SvgInfo /> No data or images are stored
					</Typography>
				</>
			)}
			{image && !zipData && (
				<>
					<div className={styles.imagePreviewWrapper}>
						<div className={classnames(styles.imagePreview, { [styles.notSquare]: !isSquare })}>
							<img src={imageBgBase64} alt="Favicon preview" />
							<img src={imageBase64} alt="Favicon preview" />
						</div>
						<div className={styles.imagePreviewInfo}>
							<Typography variant="title" weight="bold" className={styles.filename}>
								{title}
							</Typography>
							<Typography variant="footer" weight="semiBold" color="gray" tag="div" className={styles.filenameWrapper}>
								<span className={styles.filename}>{image.name}</span>
								<span className={styles.fileSize}>
									({imageSizes.width}x{imageSizes.height})
								</span>
							</Typography>
						</div>
					</div>
					<div className={classnames(styles.imageInfo, { [styles.dark]: isDark })}>
						<div className={styles.imageInfoItem}>
							<span>{isSquare ? <SvgCheck /> : <SvgError />}</span>
							<Typography variant="regularBody" weight="medium">
								Square image
							</Typography>
						</div>
						<div className={styles.imageInfoItem}>
							<span>{isPngOrSvg ? <SvgCheck /> : <SvgError />}</span>
							<Typography variant="regularBody" weight="medium">
								PNG or SVG
							</Typography>
						</div>
						<div className={styles.imageInfoItem}>
							<span>{is310px ? <SvgCheck disabled={isSvg} /> : <SvgError />}</span>
							<Typography variant="regularBody" weight="medium">
								310px or higher
							</Typography>
						</div>
					</div>
					<div className={classnames(styles.imageOptionsWrapper, { [styles.dark]: isDark })}>
						<Typography variant="footer" weight="semiBold" color="gray">
							Advanced
						</Typography>
						<div className={styles.imageOptions}>
							<div className={styles.imageInfoItem}>
								<Checkbox name="pwa" id="pwa" disabled={PWADisabled} onChange={() => setPwa(!pwa)}>
									<Typography variant="regularBody" weight="medium" muted={PWADisabled}>
										PWA compatible
									</Typography>
									<Typography variant="regularBody" weight="medium" muted={PWADisabled}>
										1024px or higher{' '}
										<SvgCheck className={classnames(styles.pwaCheck, { [styles.hide]: PWADisabled })} />
									</Typography>
								</Checkbox>
							</div>
							<div className={styles.imageInfoItem}>
								<Checkbox name="pwa" id="pwa" disabled>
									<Typography variant="regularBody" weight="medium" muted>
										Dark Mode version
									</Typography>
									<Typography variant="regularBody" weight="medium" muted>
										Available soon
									</Typography>
								</Checkbox>
							</div>
						</div>
					</div>
					<div className={classnames(styles.imageFooter, { [styles.dark]: isDark })}>
						<Button variant="transparent" color="gray" onClick={resetImage}>
							Re-upload
						</Button>
						<Button
							color="white"
							background="bgLink"
							className={styles.imageGenerate}
							onClick={() => generateFavicon(image)}>
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
					<div className={classnames(styles.imageInfo, { [styles.dark]: isDark })}>
						<div className={styles.imageInfoItem}>
							<SvgInfo className={styles.imageInfoItemSvg} />
							<Typography variant="regularBody" weight="medium">
								7 different sizes
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
								weight="bold"
								color="link"
								onClick={() => setIsModalOpen(true)}>
								Show
							</Button>
						</div>
					</div>
					<div className={classnames(styles.imageFooter, styles.spaceBetween, { [styles.dark]: isDark })}>
						<Button variant="transparent" color="link" onClick={resetImage}>
							← Make a new one
						</Button>
						<Button
							color="white"
							background="bgGreen"
							className={styles.imageGenerate}
							onClick={() => onDownload(zipData)}>
							Download Favicon ↓
						</Button>
					</div>
					<Modal style={customStyles} isOpen={isModalOpen} onRequestClose={closeModal} contentLabel="Code generated">
						<div className={styles.modalContainer}>
							<div className={styles.modalHeader}>
								<Typography variant="title" weight="bold">
									Insert the following code in the &lt;head&gt; section of your pages:
								</Typography>
								<Button color="white" background="bgLink" onClick={() => copyCode()}>
									Copy code
								</Button>
							</div>
							<div className={styles.modalCode}>
								<pre>
									<code className="language-markup" dangerouslySetInnerHTML={{ __html: htmlCode }}></code>
								</pre>
							</div>
						</div>
					</Modal>
				</>
			)}
		</div>
	)
}

export { DragAndDrop }
