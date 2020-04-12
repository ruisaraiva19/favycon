import React from 'react'
import useDarkMode from 'use-dark-mode'
import { uniqueId } from 'utils/ids'

const SvgArrowDown: React.FC<JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>> = (props) => {
	const { value: isDark } = useDarkMode(false)
	const idPrefix = uniqueId('svg-')
	return (
		<svg width={16} height={16} aria-labelledby={`${idPrefix}-title`} {...props}>
			<title id={`${idPrefix}-title`}>Arrow down</title>
			<path d="M3 6l5 5 5-5" stroke={isDark ? '#5a5b66' : '#ccc'} strokeWidth={2} fill="none" strokeLinejoin="round" />
		</svg>
	)
}

export { SvgArrowDown }
