import React from 'react'
import { uniqueId } from 'utils/ids'

const SvgAppycon: React.FC<JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>> = (props) => {
	const idPrefix = uniqueId('svg-')
	return (
		<svg width={64} height={64} aria-labelledby={`${idPrefix}-title`} {...props}>
			<title id={`${idPrefix}-title`}>Appycon logo</title>
			<defs>
				<linearGradient x1="50%" y1="99.731%" x2="50%" y2=".44%" id="c">
					<stop stopColor="#FFBB45" offset="0%" />
					<stop stopColor="#D53838" offset="100%" />
				</linearGradient>
				<filter x="-6.3%" y="-4.5%" width="112.5%" height="112.5%" filterUnits="objectBoundingBox" id="a">
					<feOffset dy={1} in="SourceAlpha" result="shadowOffsetOuter1" />
					<feGaussianBlur stdDeviation={1} in="shadowOffsetOuter1" result="shadowBlurOuter1" />
					<feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.08 0" in="shadowBlurOuter1" />
				</filter>
				<path
					d="M29.669 4h4.662c6.766 0 10.83 1.021 14.414 2.938a19.99 19.99 0 018.317 8.317C58.979 18.84 60 22.903 60 29.669v4.662c0 6.766-1.021 10.83-2.938 14.414a19.99 19.99 0 01-8.317 8.317C45.16 58.979 41.097 60 34.331 60H29.67c-6.766 0-10.83-1.021-14.414-2.938a19.99 19.99 0 01-8.317-8.317C5.021 45.16 4 41.097 4 34.331V29.67c0-6.766 1.021-10.83 2.938-14.414a19.99 19.99 0 018.317-8.317C18.84 5.021 22.903 4 29.669 4z"
					id="b"
				/>
			</defs>
			<g fill="none" fillRule="evenodd">
				<g transform="rotate(-8 32 32)">
					<use fill="#000" filter="url(#a)" xlinkHref="#b" />
					<use fill="url(#c)" xlinkHref="#b" />
				</g>
				<path
					d="M25.795 4.597l4.617-.649c6.7-.942 10.865-.496 14.682.904a19.99 19.99 0 019.393 7.078c2.398 3.283 3.974 7.165 4.916 13.865l.649 4.617c.942 6.7.496 10.865-.904 14.682a19.99 19.99 0 01-7.078 9.393c-3.283 2.398-7.165 3.974-13.865 4.916l-4.617.649c-6.7.942-10.865.496-14.682-.904a19.99 19.99 0 01-9.393-7.078c-2.398-3.283-3.974-7.165-4.916-13.865l-.649-4.617c-.942-6.7-.496-10.865.904-14.682a19.99 19.99 0 017.078-9.393c3.283-2.398 7.165-3.974 13.865-4.916zm5.313 4.302l-4.618.65c-5.587.785-8.831 1.972-11.612 4.002a14.992 14.992 0 00-5.332 7.076C8.398 23.758 8.13 27.09 8.83 32.375l.07.517.65 4.618c.785 5.587 1.972 8.831 4.002 11.612a14.992 14.992 0 007.076 5.332c3.131 1.148 6.463 1.416 11.748.717l.517-.07 4.618-.65c5.587-.785 8.831-1.972 11.612-4.002a14.992 14.992 0 005.332-7.076c1.148-3.131 1.416-6.463.717-11.748l-.07-.517-.65-4.618c-.785-5.587-1.972-8.831-4.002-11.612a14.992 14.992 0 00-7.076-5.332C40.242 8.398 36.91 8.13 31.625 8.83l-.517.07z"
					fillOpacity={0.48}
					fill="#FFF"
					fillRule="nonzero"
				/>
				<path
					d="M21.532 41.283l.611-4.03 6.806-.957 1.698 3.706 3.516-.495-8.134-17.79-5.098.716-2.915 19.344 3.516-.494zm5.977-8.125l-4.872.685 1.266-8.488 3.606 7.803zm13.425 11.71l4.833-21.192-3.416.48-2.21 9.962-4.896-8.963-3.541.497 7.417 13.053-1.35 6.607 3.163-.445z"
					fill="#FFF"
					fillRule="nonzero"
				/>
			</g>
		</svg>
	)
}

export { SvgAppycon }
