import React from 'react'
import { uniqueId } from 'utils/ids'

const SvgFavycon: React.FC<JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>> = (props) => {
	const idPrefix = uniqueId('svg-')
	return (
		<svg width={64} height={64} aria-labelledby={`${idPrefix}-title`} {...props}>
			<title id={`${idPrefix}-title`}>Favycon logo</title>
			<defs>
				<filter
					id={`${idPrefix}-filter0_d`}
					x={1}
					y={35}
					width={30}
					height={30}
					filterUnits="userSpaceOnUse"
					colorInterpolationFilters="sRGB">
					<feFlood floodOpacity={0} result="BackgroundImageFix" />
					<feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
					<feOffset dy={1} />
					<feGaussianBlur stdDeviation={1} />
					<feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0" />
					<feBlend in2="BackgroundImageFix" result="effect1_dropShadow" />
					<feBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
				</filter>
				<linearGradient
					id={`${idPrefix}-paint0_linear`}
					x1={58.1669}
					y1={12.0354}
					x2={7.83311}
					y2={49.9646}
					gradientUnits="userSpaceOnUse">
					<stop stopColor="#4B4D5A" />
					<stop offset={1} stopColor="#191A1F" />
				</linearGradient>
				<linearGradient
					id={`${idPrefix}-paint1_linear`}
					x1={29.0465}
					y1={16.1751}
					x2={27.08}
					y2={30.168}
					gradientUnits="userSpaceOnUse">
					<stop stopColor="#74EFB7" />
					<stop offset={1} stopColor="#40DB81" />
				</linearGradient>
				<linearGradient
					id={`${idPrefix}-paint2_linear`}
					x1={39.2227}
					y1={29.6793}
					x2={37.2561}
					y2={43.6722}
					gradientUnits="userSpaceOnUse">
					<stop stopColor="#88DDE4" />
					<stop offset={1} stopColor="#50B8C5" />
				</linearGradient>
				<linearGradient id={`${idPrefix}-paint3_linear`} x1={16} y1={36} x2={16} y2={62} gradientUnits="userSpaceOnUse">
					<stop stopColor="#9C93F1" />
					<stop offset={1} stopColor="#1A20FF" />
				</linearGradient>
				<clipPath id={`${idPrefix}-clip0`}>
					<path fill="#fff" d="M0 0H64V64H0z" />
				</clipPath>
			</defs>
			<g clipPath={`url(#${idPrefix}-clip0)`}>
				<path d="M11.815 2.764l49.421 6.87-7.051 49.602-49.421-6.87 7.051-49.602z" fill="#EEE" />
				<path
					d="M58.167 12.035L14.035 5.833 7.833 49.965l44.132 6.202 6.202-44.132z"
					fill={`url(#${idPrefix}-paint0_linear)`}
					stroke="#000"
					strokeWidth={1.08696}
				/>
				<g opacity={0.24} fill="#fff">
					<path
						opacity={0.24}
						d="M24.185 7.806l-1.062-.149-6.065 43.057 1.063.15 6.064-43.058zM36.564 9.546l-1.063-.15-6.065 43.058 1.063.15 6.065-43.058zM48.942 11.286l-1.063-.15-6.064 43.058 1.063.149 6.064-43.058z"
					/>
					<path
						opacity={0.24}
						d="M56.494 20.019l-43.053-6.037-.153 1.09 43.053 6.037.153-1.09zM54.755 32.397L11.702 26.36l-.154 1.09 43.053 6.037.154-1.09zM53.015 44.776L9.962 38.738l-.154 1.09 43.053 6.038.154-1.09z"
					/>
				</g>
				<path
					d="M26.19 15.774l5.713.803c1.44.202 1.94.425 2.427.78.487.356.842.827 1.05 1.393.207.566.283 1.108.081 2.548l-.803 5.714c-.202 1.44-.425 1.94-.78 2.427a2.963 2.963 0 01-1.393 1.049c-.566.207-1.109.284-2.548.082l-5.714-.803c-1.44-.203-1.94-.426-2.427-.781a2.962 2.962 0 01-1.049-1.393c-.207-.565-.284-1.108-.082-2.548l.803-5.714c.203-1.44.426-1.94.781-2.427a2.962 2.962 0 011.392-1.049c.566-.207 1.11-.284 2.549-.081z"
					fill={`url(#${idPrefix}-paint1_linear)`}
				/>
				<path
					d="M39.223 29.68a7.065 7.065 0 11-1.967 13.992 7.065 7.065 0 011.967-13.993z"
					fill={`url(#${idPrefix}-paint2_linear)`}
				/>
				<g filter={`url(#${idPrefix}-filter0_d)`}>
					<path d="M29 49c0-7.18-5.82-13-13-13S3 41.82 3 49s5.82 13 13 13 13-5.82 13-13z" fill="#000" />
				</g>
				<path
					d="M29 49c0-7.18-5.82-13-13-13S3 41.82 3 49s5.82 13 13 13 13-5.82 13-13z"
					fill={`url(#${idPrefix}-paint3_linear)`}
				/>
				<path
					d="M16 36c7.18 0 13 5.82 13 13s-5.82 13-13 13S3 56.18 3 49s5.82-13 13-13zm0 2C9.925 38 5 42.925 5 49s4.925 11 11 11 11-4.925 11-11-4.925-11-11-11z"
					fill="#fff"
					fillOpacity={0.32}
				/>
				<path fillRule="evenodd" clipRule="evenodd" d="M20 44v2h-5v2h4v2h-4v4h-2V44h7z" fill="#fff" />
			</g>
		</svg>
	)
}

export { SvgFavycon }
