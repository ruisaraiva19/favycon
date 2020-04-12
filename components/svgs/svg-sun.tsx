import React from 'react'
import { uniqueId } from 'utils/ids'

const SvgSun: React.FC<JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>> = (props) => {
	const idPrefix = uniqueId('svg-')
	return (
		<svg width={32} height={32} aria-labelledby={`${idPrefix}-title`} {...props}>
			<title id={`${idPrefix}-title`}>Activate light mode</title>
			<path
				d="M23 17a7 7 0 11-14 0 7 7 0 0114 0zm-7 9a1 1 0 01.993.883L17 27v3a1 1 0 01-1.993.117L15 30v-3a1 1 0 011-1zm-6.422-2.578a1 1 0 01.13 1.255l-.078.103-2.12 2.12a1 1 0 11-1.5-1.324l.09-.086 2.12-2.13v.01a1 1 0 011.358.052zm14.099-.14l.103.078 2.12 2.12a1 1 0 01-1.307 1.487l-.103-.077-2.12-2.12a1 1 0 011.307-1.487zM6 16a1 1 0 01.117 1.993L6 18H3a1 1 0 01-.117-1.993L3 16h3zm23 0a1 1 0 01.117 1.993L29 18h-3a1 1 0 01-.117-1.993L26 16h3zM7.407 7.023l.103.077 2.13 2.12a1.004 1.004 0 01-1.325 1.503l-.095-.083L6.1 8.51a1 1 0 011.307-1.487zm18.44.13a1 1 0 01.13 1.254l-.077.103-2.12 2.13a1 1 0 01-.71.29 1 1 0 01-.799-1.61l.089-.1 2.13-2.12a1 1 0 011.358.052zM16 3a1 1 0 01.993.883L17 4v3a1 1 0 01-1.993.117L15 7V4a1 1 0 011-1z"
				fill="#5A5B66"
			/>
		</svg>
	)
}

export { SvgSun }
