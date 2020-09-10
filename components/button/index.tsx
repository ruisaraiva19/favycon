import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import styles from './index.module.scss'

type ButtonProps = {
	children: PropTypes.ReactNodeLike
	variant: 'primary' | 'transparent' | 'regularTransparent' | 'modalClose'
	weight: 'regular' | 'medium' | 'semiBold' | 'bold'
	color: 'black' | 'gray' | 'white' | 'link'
	background: 'bgLink' | 'bgGreen' | 'bgDarkGray'
}

const Button = ({
	children,
	variant,
	weight,
	color,
	background,
	...props
}: ButtonProps & React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>) => {
	const className = classNames(styles[variant], styles[weight], styles[color], styles[background], props.className)

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
