import React from 'react'
import { uniqueId } from 'utils/ids'

const SvgSun: React.FC<JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>> = (props) => {
	const idPrefix = uniqueId('svg-')
	return (
		<svg width={32} height={32} viewBox="0 0 32 32" aria-labelledby={`${idPrefix}-title`} {...props}>
			<title id={`${idPrefix}-title`}>Activate light mode</title>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M16 25a1 1 0 011 1v3a1 1 0 11-2 0v-3a1 1 0 011-1zm-7.78-2.63a1 1 0 011.41 1.41L7.51 25.9a1 1 0 11-1.41-1.41l2.12-2.13v.01zm14.202.042a1 1 0 011.358-.052l2.12 2.12a1 1 0 01-1.41 1.41l-2.12-2.12a1 1 0 01.052-1.358zM16 9a7 7 0 110 14 7 7 0 010-14zM6 15a1 1 0 110 2H3a1 1 0 110-2h3zm23 0a1 1 0 110 2h-3a1 1 0 110-2h3zM6.152 6.152A1 1 0 017.51 6.1l2.13 2.12a1.004 1.004 0 01-1.42 1.42L6.1 7.51a1 1 0 01.052-1.358zM24.49 6.1a1 1 0 011.41 1.41l-2.12 2.13a1 1 0 01-.71.29 1 1 0 01-.71-1.71l2.13-2.12zM16 2a1 1 0 011 1v3a1 1 0 11-2 0V3a1 1 0 011-1z"
				fill="#5A5B66"
			/>
		</svg>
	)
}

export { SvgSun }
