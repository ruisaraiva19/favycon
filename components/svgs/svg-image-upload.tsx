import React from 'react'
import { uniqueId } from 'utils/ids'

const SvgImageUpload: React.FC<JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>> = (props) => {
	const idPrefix = uniqueId('svg-')
	return (
		<svg width={88} height={88} aria-labelledby={`${idPrefix}-title`} {...props}>
			<title id={`${idPrefix}-title`}>Image Upload</title>
			<g fill="none" fillRule="evenodd">
				<circle fill="#FFF0E7" cx={44} cy={44} r={44} />
				<path
					d="M64.133 64H23.867C21.73 64 20 62.238 20 60.064V27.936C20 25.762 21.731 24 23.867 24h40.266C66.27 24 68 25.762 68 27.936v32.128C68 62.238 66.269 64 64.133 64zM23.867 27.07a.86.86 0 00-.852.866v32.128c0 .23.09.45.25.613.16.162.376.254.602.254h40.266a.86.86 0 00.844-.867V27.936a.86.86 0 00-.844-.867H23.867z"
					fill="#D5824C"
					fillRule="nonzero"
					opacity={0.4}
				/>
				<path
					d="M29.06 56.595h29.633a1.267 1.267 0 001.057-2.017l-4.087-5.55a1.268 1.268 0 00-1.913-.166l-4.2 3.998-9.75-13.237a1.267 1.267 0 00-2.085.06l-9.75 14.955a1.267 1.267 0 001.095 1.957z"
					fill="#D5824C"
					fillRule="nonzero"
				/>
				<circle fill="#D5824C" fillRule="nonzero" cx={53.097} cy={35.34} r={4.447} />
			</g>
		</svg>
	)
}

export { SvgImageUpload }
