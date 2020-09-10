import React from 'react'
import { Typography } from 'components/typography'
import { SvgFavycon } from 'components/svgs/svg-favycon'

import styles from './index.module.scss'

type ToolTitleProps = {
	hideLogo?: boolean
	small?: boolean
}

const ToolTitle = ({ hideLogo = false, small = false }: ToolTitleProps) => (
	<div className={styles.root}>
		{!hideLogo && <SvgFavycon />}
		<Typography variant={small ? 'h2' : 'h1'} weight="extraBold" color="black">
			Favycon
		</Typography>
		<Typography variant="superscript" tag="span" weight="bold" color="gray">
			APP
		</Typography>
	</div>
)

export { ToolTitle }
