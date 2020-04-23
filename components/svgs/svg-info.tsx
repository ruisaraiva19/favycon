import React from 'react'
import { uniqueId } from 'utils/ids'

import styles from './svg-info.module.scss'

const SvgInfo: React.FC<JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>> = (props) => {
	const idPrefix = uniqueId('svg-')
	return (
		<svg width={20} height={20} viewBox="0 0 20 20" aria-labelledby={`${idPrefix}-title`} {...props}>
			<title id={`${idPrefix}-title`}>Info</title>
			<path
				d="M10 20c5.523 0 10-4.477 10-10S15.523 0 10 0 0 4.477 0 10s4.477 10 10 10z"
				className={styles.background}
			/>
			<path fillRule="evenodd" clipRule="evenodd" d="M11 7v9H9V7h2zm0-3v2H9V4h2z" className={styles.text} />
		</svg>
	)
}

export { SvgInfo }
