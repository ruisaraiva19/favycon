import React from 'react'
import classnames from 'classnames'
import useDarkMode from 'use-dark-mode'
import { useDropzone } from 'react-dropzone'
import { Typography } from 'components/typography'
import { SvgDropZone } from 'components/svgs/svg-drop-zone'
import { SvgImageUpload } from 'components/svgs/svg-image-upload'
import { SvgInfo } from 'components/svgs/svg-info'

import styles from './index.module.scss'

type DragAndDropProps = {
	onDrop: (acceptedFiles: File[]) => void
}

const DragAndDrop = ({ onDrop }: DragAndDropProps) => {
	const { value: isDark } = useDarkMode(false)
	const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop })
	return (
		<div className={classnames(styles.root, { [styles.dark]: isDark })}>
			<div className={classnames(styles.dropZoneWrapper, { [styles.dark]: isDark })}>
				<SvgDropZone className={classnames(styles.dashed, { [styles.dragActive]: isDragActive })} />
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
				<SvgInfo /> We recommend a square png image with at least 310px
			</Typography>
			<Typography variant="regularBody" weight="medium" className={styles.info}>
				<SvgInfo /> No data or images are stored
			</Typography>
		</div>
	)
}

export { DragAndDrop }
