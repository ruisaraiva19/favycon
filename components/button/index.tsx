import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import useDarkMode from 'use-dark-mode'

import styles from './index.module.scss'

type ButtonProps = {
	children: PropTypes.ReactNodeLike
	variant: 'primary' | 'transparent' | 'regularTransparent'
	weight: 'regular' | 'medium' | 'semiBold' | 'bold'
	color: 'black' | 'gray' | 'white' | 'link'
	background: 'bgLink' | 'bgGreen'
}

const Button = ({
	children,
	variant,
	weight,
	color,
	background,
	...props
}: ButtonProps & React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>) => {
	const { value: isDark } = useDarkMode(false)
	const className = classNames(
		styles[variant],
		styles[weight],
		styles[color],
		styles[background],
		{
			[styles.dark]: isDark,
			[styles.noClick]: !props.onClick,
		},
		props.className
	)

	return (
		<button {...props} className={className}>
			{children}
		</button>
	)
}

Button.defaultProps = {
	variant: 'primary',
	weight: 'bold',
	color: 'black',
	background: '',
}

export { Button }
