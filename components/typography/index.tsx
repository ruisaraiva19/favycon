import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import styles from './index.module.scss'

type TypographyProps = {
	children: PropTypes.ReactNodeLike
	variant: 'h1' | 'smallBody' | 'regularBody' | 'mediumBody' | 'largeBody' | 'footer' | 'superscript'
	weight: 'regular' | 'medium' | 'semiBold' | 'bold'
	color: 'black' | 'gray' | 'white'
	tag?: string
}

const Typography = ({ children, variant, weight, color, tag }: TypographyProps) => {
	const className = classNames(styles[variant], styles[color], styles[weight])
	const componentType = ['h1'].includes(variant) ? variant : 'p'

	return React.createElement(tag || componentType, { className }, children)
}

Typography.defaultProps = {
	variant: 'p',
	weight: 'regular',
	color: 'black',
}

export { Typography }
