import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import useDarkMode from 'use-dark-mode'

import styles from './index.module.scss'

type ButtonProps = {
	children: PropTypes.ReactNodeLike
	variant: 'primary'
}

const Button = ({ children, variant }: ButtonProps) => {
	const { value: isDark } = useDarkMode()
	const className = classNames(styles[variant], { [styles.dark]: isDark })

	return <button className={className}>{children}</button>
}

Button.defaultProps = {
	variant: 'primary',
}

export { Button }
