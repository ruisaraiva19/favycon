import React from 'react'
import useDarkMode from 'use-dark-mode'
import { uniqueId } from 'utils/ids'

const SvgInfo: React.FC<JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>> = (props) => {
	const { value: isDark } = useDarkMode(false)
	const idPrefix = uniqueId('svg-')
	return (
		<svg width={20} height={20} viewBox="0 0 20 20" aria-labelledby={`${idPrefix}-title`} {...props}>
			<title id={`${idPrefix}-title`}>Info</title>
			<path
				d="M10 20c5.523 0 10-4.477 10-10S15.523 0 10 0 0 4.477 0 10s4.477 10 10 10z"
				fill={isDark ? '#41424B' : '#F2F8FA'}
			/>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M11 7v9H9V7h2zm0-3v2H9V4h2z"
				fill={isDark ? '#7185FF' : '#4B67D6'}
			/>
			<style jsx>{`
				path {
					transition: fill 0.2s ease;
				}
			`}</style>
		</svg>
	)
}

export { SvgInfo }
