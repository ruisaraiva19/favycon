import React, { useState } from 'react'
import classnames from 'classnames'
import { SvgCheckbox } from 'components/svgs/svg-checkbox'

import styles from './index.module.scss'

type CheckboxProps = {
	name: string
	id: string
}

const Checkbox = ({
	name,
	id,
	children,
	...props
}: React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> & CheckboxProps) => {
	const [value, setValue] = useState(false)
	const onCheckChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setValue(!value)
		if (props.onChange) {
			props.onChange(event)
		}
	}
	return (
		<div className={styles.root}>
			<input
				type="checkbox"
				{...props}
				className={styles.checkbox}
				name={name}
				id={id}
				checked={value}
				onChange={onCheckChange}
			/>
			<label htmlFor={id} className={classnames(styles.label, { [styles.disabled]: props.disabled })}>
				<span className={styles.checkboxSvg}>
					<SvgCheckbox checked={value} disabled={props.disabled} />{' '}
				</span>
				<div>{children}</div>
			</label>
		</div>
	)
}

export { Checkbox }
