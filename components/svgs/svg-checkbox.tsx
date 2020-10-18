import classnames from 'classnames'

import styles from './svg-checkbox.module.scss'

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
				className={classnames(styles.unchecked, { [styles.disabled]: disabled })}
				d="M12.5.5h-9a3 3 0 00-3 3v9a3 3 0 003 3h9a3 3 0 003-3v-9a3 3 0 00-3-3z"
			/>
			<path
				className={classnames(styles.checkBg, { [styles.checkBgChecked]: checked })}
				d="M13 0H3a3 3 0 00-3 3v10a3 3 0 003 3h10a3 3 0 003-3V3a3 3 0 00-3-3z"
			/>
			<path
				className={classnames(styles.checkMark, { [styles.checkMarkChecked]: checked })}
				d="M4 7.143L6.91 10 12 5"
				strokeWidth={2}
				strokeLinejoin="round"
			/>
		</svg>
	)
}

export { SvgCheckbox }
