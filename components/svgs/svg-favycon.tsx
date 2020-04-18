import React from 'react'
import { uniqueId } from 'utils/ids'

const SvgFavycon: React.FC<JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>> = (props) => {
	const idPrefix = uniqueId('svg-')
	return (
		<svg width={48} height={48} viewBox="0 0 48 48" aria-labelledby={`${idPrefix}-title`} {...props}>
			<title id={`${idPrefix}-title`}>Favycon logo</title>
			<defs>
				<linearGradient
					id={`${idPrefix}-paint0_linear`}
					x1={43.6252}
					y1={9.02654}
					x2={5.87483}
					y2={37.4735}
					gradientUnits="userSpaceOnUse">
					<stop stopColor="#4B4D5A" />
					<stop offset={1} stopColor="#191A1F" />
				</linearGradient>
				<linearGradient
					id={`${idPrefix}-paint1_linear`}
					x1={21.7849}
					y1={12.1313}
					x2={20.31}
					y2={22.626}
					gradientUnits="userSpaceOnUse">
					<stop stopColor="#74EFB7" />
					<stop offset={1} stopColor="#40DB81" />
				</linearGradient>
				<linearGradient
					id={`${idPrefix}-paint2_linear`}
					x1={29.417}
					y1={22.2594}
					x2={27.9421}
					y2={32.7541}
					gradientUnits="userSpaceOnUse">
					<stop stopColor="#88DDE4" />
					<stop offset={1} stopColor="#50B8C5" />
				</linearGradient>
				<linearGradient
					id={`${idPrefix}-paint3_linear`}
					x1={12}
					y1={27}
					x2={12}
					y2={46.5}
					gradientUnits="userSpaceOnUse">
					<stop stopColor="#9C93F1" />
					<stop offset={1} stopColor="#1A20FF" />
				</linearGradient>
			</defs>
			<path d="M8.861 2.073l37.066 5.152-5.288 37.202-37.066-5.152L8.861 2.073z" fill="#EEE" />
			<path
				d="M43.625 9.027L10.527 4.375 5.875 37.474l33.099 4.651 4.651-33.098z"
				fill={`url(#${idPrefix}-paint0_linear)`}
				stroke="#000"
				strokeWidth={1.08696}
			/>
			<path
				opacity={0.24}
				d="M18.139 5.855l-.797-.112-4.548 32.293.797.112 4.548-32.293zM27.423 7.16l-.797-.112-4.549 32.293.797.111L27.423 7.16zM36.707 8.464l-.797-.112-4.549 32.293.797.112 4.549-32.293z"
				fill="#fff"
			/>
			<path
				opacity={0.24}
				d="M42.37 15.014l-32.289-4.528-.115.818 32.29 4.528.115-.818zM41.066 24.298L8.776 19.77l-.115.817 32.29 4.529.115-.818zM39.761 33.582l-32.29-4.528-.115.817 32.29 4.528.115-.817z"
				fill="#fff"
			/>
			<path
				d="M19.642 11.83l4.286.602c1.08.152 1.455.32 1.82.586.365.267.631.62.787 1.044.155.425.213.832.06 1.912l-.601 4.285c-.152 1.08-.32 1.455-.586 1.82-.267.365-.62.631-1.044.787-.425.155-.832.213-1.911.061l-4.286-.602c-1.08-.152-1.455-.32-1.82-.586a2.223 2.223 0 01-.787-1.044c-.155-.424-.213-.832-.061-1.911l.602-4.285c.152-1.08.32-1.456.586-1.82.266-.366.62-.632 1.044-.788.424-.155.832-.213 1.911-.06z"
				fill={`url(#${idPrefix}-paint1_linear)`}
			/>
			<path
				d="M29.417 22.26a5.299 5.299 0 11-1.475 10.494 5.299 5.299 0 011.475-10.495z"
				fill={`url(#${idPrefix}-paint2_linear)`}
			/>
			<path
				d="M21.75 36.75c0-5.385-4.365-9.75-9.75-9.75s-9.75 4.365-9.75 9.75S6.615 46.5 12 46.5s9.75-4.365 9.75-9.75z"
				fill={`url(#${idPrefix}-paint3_linear)`}
			/>
			<path
				d="M12 27c5.385 0 9.75 4.365 9.75 9.75S17.385 46.5 12 46.5s-9.75-4.365-9.75-9.75S6.615 27 12 27zm0 1.5A8.25 8.25 0 1012 45a8.25 8.25 0 000-16.5z"
				fill="#fff"
				fillOpacity={0.32}
			/>
			<path fillRule="evenodd" clipRule="evenodd" d="M15 33v1.5h-3.75V36h3v1.5h-3v3h-1.5V33H15z" fill="#fff" />
		</svg>
	)
}

export { SvgFavycon }
