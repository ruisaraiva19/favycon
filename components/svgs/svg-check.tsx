import classnames from 'classnames'

type SvgCheckProps = {
	disabled?: boolean
}

const SvgCheck: React.FC<JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement> & SvgCheckProps> = ({
	disabled,
	...props
}) => {
	return (
		<svg width={20} height={20} viewBox="0 0 20 20" fill="none" {...props}>
			<path
				className={classnames('svgCheck', { disabled })}
				d="M3 9.857L8.09 15 17 6"
				stroke="#3EA161"
				strokeWidth={3}
				strokeLinejoin="round"
			/>
			<style jsx>{`
				.svgCheck {
					stroke: #3ea161;
				}
				.svgCheck.disabled {
					stroke: #9698a3;
				}
			`}</style>
		</svg>
	)
}

export { SvgCheck }
