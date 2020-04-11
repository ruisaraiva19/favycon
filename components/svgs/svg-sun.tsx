import React from 'react'
import { uniqueId } from 'utils/ids'

const SvgSun: React.FC<JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>> = (props) => {
	const idPrefix = uniqueId('svg-')
	return (
		<svg width={32} height={32} aria-labelledby={`${idPrefix}-title`} {...props}>
			<title id={`${idPrefix}-title`}>Sun</title>
			<path
				d="M16 25a1 1 0 01.993.883L17 26v3a1 1 0 01-1.993.117L15 29v-3a1 1 0 011-1zm-6.422-2.578a1 1 0 01.13 1.255l-.078.103-2.12 2.12a1 1 0 11-1.5-1.324l.09-.086 2.12-2.13v.01a1 1 0 011.358.052zm14.099-.14l.103.078 2.12 2.12a1 1 0 01-1.307 1.487l-.103-.077-2.12-2.12a1 1 0 011.307-1.487zM16 8a8 8 0 110 16 8 8 0 010-16zm0 2a6 6 0 100 12 6 6 0 000-12zM6 15a1 1 0 01.117 1.993L6 17H3a1 1 0 01-.117-1.993L3 15h3zm23 0a1 1 0 01.117 1.993L29 17h-3a1 1 0 01-.117-1.993L26 15h3zM7.407 6.023l.103.077 2.13 2.12a1.004 1.004 0 01-1.325 1.504L8.22 9.64 6.1 7.51a1 1 0 011.307-1.487zm18.44.13a1 1 0 01.13 1.254l-.077.103-2.12 2.13a1 1 0 01-.71.29 1 1 0 01-.799-1.61l.089-.1 2.13-2.12a1 1 0 011.358.052zM16 2a1 1 0 01.993.883L17 3v3a1 1 0 01-1.993.117L15 6V3a1 1 0 011-1z"
				fill="#CCC"
			/>
		</svg>
	)
}

export { SvgSun }
