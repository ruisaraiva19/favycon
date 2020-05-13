import React from 'react'
import { Typography } from 'components/typography'
import { SvgFavycon } from 'components/svgs/svg-favycon'

import styles from './index.module.scss'

const ToolTitle = () => (
	<div className={styles.root}>
		<SvgFavycon />
		<Typography variant="h1" weight="extraBold" color="black">
			Favycon
		</Typography>
		<Typography variant="superscript" tag="span" weight="bold" color="gray">
			APP
		</Typography>
	</div>
)

export { ToolTitle }
