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
			<path className={classnames(styles.path, { [styles.active]: active })} d="M43 20H45V68H43z" />
			<path className={classnames(styles.path, { [styles.active]: active })} d="M20 43H68V45H20z" />
		</svg>
	)
}

export { SvgImageUpload }
