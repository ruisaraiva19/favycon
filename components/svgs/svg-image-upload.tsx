import React from 'react'
import useDarkMode from 'use-dark-mode'
import { uniqueId } from 'utils/ids'

const SvgImageUpload: React.FC<JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>> = (props) => {
	const { value: isDark } = useDarkMode(false)
	const idPrefix = uniqueId('svg-')
	return (
		<svg width={88} height={88} aria-labelledby={`${idPrefix}-title`} {...props}>
			<title id={`${idPrefix}-title`}>Image Upload</title>
			<path
				d="M44 88c24.3 0 44-19.7 44-44S68.3 0 44 0 0 19.7 0 44s19.7 44 44 44z"
				fill={isDark ? '#4B4D54' : '#EDF4F5'}
			/>
			<path
				d="M64.133 64H23.867C21.73 64 20 62.238 20 60.064V27.936C20 25.762 21.731 24 23.867 24h40.266C66.27 24 68 25.762 68 27.936v32.128C68 62.238 66.269 64 64.133 64zM23.867 27.07a.86.86 0 00-.852.866v32.128c0 .23.09.45.25.613.16.162.376.254.602.254h40.266a.86.86 0 00.844-.867V27.936a.86.86 0 00-.844-.867H23.867z"
				fill={isDark ? '#4D7E91' : '#95C7D6'}
			/>
			<path
				d="M29.06 56.595h29.633a1.267 1.267 0 001.057-2.017l-4.087-5.55a1.268 1.268 0 00-1.913-.166l-4.2 3.998-9.75-13.237a1.268 1.268 0 00-2.085.06l-9.75 14.955a1.267 1.267 0 001.095 1.957z"
				fill="#5AA656"
			/>
			<path d="M53.097 39.788a4.447 4.447 0 100-8.895 4.447 4.447 0 000 8.895z" fill="#FFBC4C" />
			<style jsx>{`
				path {
					transition: fill 0.2s ease;
				}
			`}</style>
		</svg>
	)
}

export { SvgImageUpload }
