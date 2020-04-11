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

const Button = ({ children, variant, weight }: ButtonProps) => {
	const { value: isDark } = useDarkMode()
	const className = classNames(styles[variant], { [styles.dark]: isDark }, styles[weight])

	return <button className={className}>{children}</button>
}

Button.defaultProps = {
	variant: 'primary',
	weight: 'bold',
}

export { Button }
