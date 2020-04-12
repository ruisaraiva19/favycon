import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import useDarkMode from 'use-dark-mode'

import styles from './index.module.scss'

type ButtonProps = {
	children: PropTypes.ReactNodeLike
	variant: 'primary' | 'transparent'
	weight: 'regular' | 'medium' | 'semiBold' | 'bold'
}

const Button = ({
	children,
	variant,
	weight,
	...props
}: ButtonProps & React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>) => {
	const { value: isDark } = useDarkMode(false)
	const className = classNames(styles[variant], styles[weight], {
		[styles.dark]: isDark,
		[styles.noClick]: !props.onClick,
	})

	return (
		<button className={className} {...props}>
			{children}
		</button>
	)
}

Button.defaultProps = {
	variant: 'primary',
	weight: 'bold',
}

export { Button }
