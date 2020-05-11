import React from 'react'
import classnames from 'classnames'
import { uniqueId } from 'utils/ids'

import styles from './svg-image-upload.module.scss'

type SvgImageUploadProps = {
	active?: boolean
}

const SvgImageUpload: React.FC<JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement> & SvgImageUploadProps> = ({
	active = false,
	...props
}) => {
	const idPrefix = uniqueId('svg-')
	return (
		<svg width={88} height={88} viewBox="0 0 88 88" aria-labelledby={`${idPrefix}-title`} {...props}>
			<title id={`${idPrefix}-title`}>Image Upload</title>
			<rect
				x={43}
				y={active ? 16 : 20}
				width={2}
				height={active ? 56 : 48}
				className={classnames(styles.rect, { [styles.active]: active })}
			/>
			<rect
				x={active ? 16 : 20}
				y={43}
				width={active ? 56 : 48}
				height={2}
				className={classnames(styles.rect, { [styles.active]: active })}
			/>
		</svg>
	)
}

export { SvgImageUpload }
