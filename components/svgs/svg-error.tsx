import React from 'react'
import classnames from 'classnames'

type SvgErrorProps = {
	transparent?: boolean
}

const SvgError: React.FC<JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement> & SvgErrorProps> = ({
	transparent,
	...props
}) => {
	return (
		<svg width={20} height={20} viewBox="0 0 20 20" fill="none" {...props}>
			<path
				className={classnames('svgError', { transparent })}
				d="M10 20c5.523 0 10-4.477 10-10S15.523 0 10 0 0 4.477 0 10s4.477 10 10 10z"
				fill="#E15151"
			/>
			<path d="M14.95 6.464L13.536 5.05 5.05 13.536l1.414 1.414 8.486-8.486z" fill="#fff" />
			<path d="M6.464 5.05L5.05 6.464l8.486 8.486 1.414-1.414L6.464 5.05z" fill="#fff" />
			<style jsx>{`
				.svgError {
					fill: #e15151;
				}
				.svgError.transparent {
					fill: #fff;
					opacity: 0.2;
				}
			`}</style>
		</svg>
	)
}

export { SvgError }
