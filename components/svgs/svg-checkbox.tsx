import React from 'react'
import classnames from 'classnames'

type SvgCheckboxProps = {
	checked: boolean
	disabled?: boolean
}

const SvgCheckbox: React.FC<JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement> & SvgCheckboxProps> = ({
	checked,
	disabled,
	...props
}) => {
	return (
		<svg width={16} height={16} viewBox="0 0 16 16" fill="none" {...props}>
			<path
				className={classnames('unchecked', { disabled: disabled })}
				d="M12.5.5h-9a3 3 0 00-3 3v9a3 3 0 003 3h9a3 3 0 003-3v-9a3 3 0 00-3-3z"
				stroke="#CCC"
			/>
			<path
				className={classnames('checkBg', { checked: checked })}
				d="M13 0H3a3 3 0 00-3 3v10a3 3 0 003 3h10a3 3 0 003-3V3a3 3 0 00-3-3z"
				fill="#4C5ED5"
			/>
			<path
				className={classnames('checkMark', { checked: checked })}
				d="M4 7.143L6.91 10 12 5"
				stroke="#fff"
				strokeWidth={2}
				strokeLinejoin="round"
			/>
			<style jsx>{`
				.unchecked {
					transition: all 100ms ease-in-out;
					fill: #fafafa;
				}
				.unchecked.disabled {
					fill: #ececec;
				}
				.checkBg {
					transform-origin: center;
					transition: all 100ms ease-in-out;
					opacity: 0;
					transform: scale(0);
				}
				.checkBg.checked {
					opacity: 1;
					transform: scale(1);
				}
				.checkMark {
					transform-origin: center;
					stroke-dasharray: 12;
					stroke-dashoffset: 12;
					transition: all 150ms 100ms ease-in-out;
				}
				.checkMark.checked {
					stroke-dashoffset: 0;
				}
			`}</style>
		</svg>
	)
}

export { SvgCheckbox }
