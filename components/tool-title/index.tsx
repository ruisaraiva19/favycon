import React from 'react'
import { Typography } from 'components/typography'

import styles from './index.module.scss'

type ToolTitleProps = {
	children: string
}

const ToolTitle = ({ children }: ToolTitleProps) => (
	<div className={styles.root}>
		<Typography variant="h1" weight="bold" color="black">
			{children}
		</Typography>
		<Typography variant="superscript" tag="span" weight="bold">
			APP
		</Typography>
	</div>
)

export { ToolTitle }
