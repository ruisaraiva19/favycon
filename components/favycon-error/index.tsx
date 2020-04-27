import React, { useState, useEffect } from 'react'
import classnames from 'classnames'
import { Typography } from 'components/typography'

import styles from './index.module.scss'

type FavyconErrorProps = {
	error: string
	clearError: () => void
}

const FavyconError = ({ error, clearError }: FavyconErrorProps) => {
	const [hideError, setHideError] = useState(() => !error)

	useEffect(() => {
		if (error) {
			let endTimeout: number
			setHideError(false)
			const errorTimeout = setTimeout(() => {
				setHideError(true)
				endTimeout = setTimeout(() => {
					clearError()
				}, 200) as any
			}, 5300) as any
			return () => {
				clearTimeout(errorTimeout)
				clearTimeout(endTimeout)
			}
		}
	}, [error, clearError])

	return (
		<div className={classnames(styles.error, { [styles.hide]: hideError })}>
			<Typography variant="regularBody" color="white" weight="semiBold">
				{error}
			</Typography>
			<svg height={20} width={20}>
				<circle
					className={classnames(styles.progress, { [styles.animate]: !!error })}
					fill="transparent"
					stroke="white"
					r={7}
					cx={10}
					cy={10}
				/>
			</svg>
		</div>
	)
}

export { FavyconError }
