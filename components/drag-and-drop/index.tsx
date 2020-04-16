import React, { useState, useRef, useEffect } from 'react'
import classnames from 'classnames'
import useDarkMode from 'use-dark-mode'
import { useDropzone, DropEvent } from 'react-dropzone'
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

import styles from './index.module.scss'
import { SvgBackground } from 'components/svgs/svg-background'
import { SvgCheck } from 'components/svgs/svg-check'
import { SvgError } from 'components/svgs/svg-error'
import { Checkbox } from 'components/checkbox'

type DragAndDropProps = {
	onFile: (hasFile: boolean) => void
	onGenerate: (image: File) => Promise<ArrayBuffer>
	onError: (message: string) => void
}

const DragAndDrop = ({ onFile, onGenerate, onError }: DragAndDropProps) => {
	const { value: isDark } = useDarkMode(false)
	const imageRef = useRef<HTMLImageElement>(null)
	const [imageSizes, setImageSizes] = useState({ width: 0, height: 0 })
	const [image, setImage] = useState<File>()
	const [title, setTitle] = useState('')
	const [isSquare, setIsSquare] = useState(false)
	const [isPngOrSvg, setIsPngOrSvg] = useState(false)
	const [isSvg, setIsSvg] = useState(false)
	const [is310px, setIs310px] = useState(false)
	const [is1024px, setIs1024px] = useState(false)
	const [isLoading, setIsLoading] = useState(false)
	const [pwa, setPwa] = useState(false)
	const [zipData, setZipData] = useState<ArrayBuffer>()
	const PWADisabled = !isSvg || !is1024px

	useEffect(() => {
		const reader = new FileReader()
		reader.onloadend = () => {
			if (imageRef.current) {
				imageRef.current.src = reader.result as string
			}
		}
		if (image) {
			reader.readAsDataURL(image)
		}
	}, [image])

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

	const onDrop = async (acceptedFiles: File[], rejectedFiles: File[], _: DropEvent) => {
		if (acceptedFiles.length) {
			const file = acceptedFiles[0]
			const sizes = await getImageFileSizes(file)
			setImageSizes(sizes)
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
							<SvgBackground {...imageSizes} />
							<img ref={imageRef} alt="Favicon preview" />
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
					<div className={styles.imageInfo}>
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
					<div className={styles.imageOptionsWrapper}>
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
					<div className={styles.imageFooter}>
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
						<Typography variant="title" weight="bold">
							Your new favicon is ready!
						</Typography>
						<Typography variant="footer" weight="semiBold" color="gray">
							We’ve prepared a zip file with all the sizes and a README with the code plus other resources.
						</Typography>
					</div>
					<div className={styles.imageFooter}>
						<Button variant="transparent" color="link" onClick={resetImage}>
							Make a new one
						</Button>
						<Button
							color="white"
							background="bgGreen"
							className={styles.imageGenerate}
							onClick={() => onDownload(zipData)}>
							Download Favicon
						</Button>
					</div>
				</>
			)}
		</div>
	)
}

export { DragAndDrop }
