import React from 'react'
// import useDarkMode from 'use-dark-mode'

const SvgBackground: React.FC<JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>> = (props) => {
	// const { value: isDark } = useDarkMode(false)
	return (
		<svg {...props}>
			<rect width="100%" height="100%" fill="#fff" />
		</svg>
	)
}

export { SvgBackground }
