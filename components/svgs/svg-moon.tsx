import React from 'react'
import { uniqueId } from 'utils/ids'

const SvgMoon: React.FC<JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>> = (props) => {
	const idPrefix = uniqueId('svg-')
	return (
		<svg width={32} height={32} aria-labelledby={`${idPrefix}-title`} {...props}>
			<title id={`${idPrefix}-title`}>Activate dark mode</title>
			<path
				d="M24.613 22.62a9.999 9.999 0 11-8.287-16.602c.406-.03.79.189.975.552a1 1 0 01-.15 1.11 7.996 7.996 0 006.633 13.278 1 1 0 01.83 1.662z"
				fill="#CCC"
			/>
		</svg>
	)
}

export { SvgMoon }
