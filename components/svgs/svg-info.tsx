import React from 'react'
import { uniqueId } from 'utils/ids'

const SvgInfo: React.FC<JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>> = (props) => {
	const idPrefix = uniqueId('svg-')
	return (
		<svg width={20} height={20} aria-labelledby={`${idPrefix}-title`} {...props}>
			<title id={`${idPrefix}-title`}>Info</title>
			<g fill="none" fillRule="evenodd">
				<circle fill="#E7ECFF" cx={10} cy={10} r={10} />
				<path d="M11 7v9H9V7h2zm0-3v2H9V4h2z" fill="#4C66D5" />
			</g>
		</svg>
	)
}

export { SvgInfo }
