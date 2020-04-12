import React from 'react'
import { NextPage } from 'next'
import { BaseLayout } from 'components/base-layout'
import { Typography } from 'components/typography'
import { SEO } from 'components/seo'
import { ToolTitle } from 'components/tool-title'

const Favycon: NextPage = () => (
	<BaseLayout>
		<SEO
			title="Favycon"
			description="A small online tool to help you generate your favicon in all the sizes and formats you need."
		/>
		<main>
			<ToolTitle>Favycon</ToolTitle>
			<Typography variant="largeBody" weight="medium">
				A small online tool to help you generate your favicon in all the sizes and formats you need. <br />
				<br />
				Just drag &amp; drop an image and you will then get a downloadable file alongside some documentation on how to
				add the favicons.
			</Typography>
			<hr />
			<Typography variant="footer" weight="semiBold" color="gray">
				Created by <u>4 people</u> on their 2020’s worldwide quarantine. Background image from <u>Unsplash</u>.
			</Typography>
		</main>
	</BaseLayout>
)

export default Favycon
