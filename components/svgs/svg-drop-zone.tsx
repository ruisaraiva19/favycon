import React from 'react'
import useDarkMode from 'use-dark-mode'

const SvgDropZone: React.FC<JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>> = (props) => {
	const { value: isDark } = useDarkMode(false)
	return (
		<svg {...props} width="100%" height="100%">
			<rect
				width="100%"
				height="100%"
				fill="none"
				rx="6"
				ry="6"
				stroke={isDark ? '#5a5b66' : '#ccc'}
				strokeWidth="2"
				strokeDasharray="10, 10"
				strokeDashoffset="0"
				strokeLinecap="square"
			/>
			<style jsx>{`
				rect {
					transition: stroke 0.2s ease;
				}
			`}</style>
		</svg>
	)
}

export { SvgDropZone }
