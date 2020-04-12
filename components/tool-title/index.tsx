import React from 'react'
import { Typography } from 'components/typography'

import styles from './index.module.scss'

type ToolTitleProps = {
	children: string
}

const ToolTitle = ({ children }: ToolTitleProps) => (
	<div className={styles.root}>
		<Typography variant="h1" weight="bold">
			{children}
		</Typography>
		<Typography variant="superscript" tag="span" weight="bold" color="gray">
			TOOL
		</Typography>
	</div>
)

export { ToolTitle }
