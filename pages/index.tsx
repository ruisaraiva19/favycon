import React from 'react'
import { NextPage } from 'next'
import { BaseLayout } from 'components/base-layout'
import { SEO } from 'components/seo'
import { ToolTitle } from 'components/tool-title'

const Home: NextPage = () => (
	<BaseLayout>
		<SEO title="Home" description="Home page description" />
		<main>
			<ToolTitle>Favycon</ToolTitle>
			<ToolTitle>Appycon</ToolTitle>
		</main>
	</BaseLayout>
)

export default Home
