import PropTypes from 'prop-types'
import classNames from 'classnames'

import styles from './index.module.scss'

export type ButtonProps = {
	children: PropTypes.ReactNodeLike
	variant: 'primary' | 'transparent' | 'regularTransparent' | 'modalClose'
	weight: 'regular' | 'medium' | 'semiBold' | 'bold'
	color: 'black' | 'gray' | 'white' | 'link'
	background: 'bgLink' | 'bgGreen' | 'bgDarkGray'
} & React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

const Button = ({ children, variant, weight, color, background, ...props }: ButtonProps) => {
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
