import React from 'react'
import { NextPage } from 'next'
import Head from 'next/head'
import { Typography } from '../components/typography'

const Home: NextPage = () => (
	<div className="container">
		<Head>
			<title>Favycon</title>
			<link rel="icon" type="image/svg+xml" href="/favicon.svg" />
			<link rel="icon" type="image/png" href="/favicon.png" />
			<link rel="icon" type="image/x-icon" href="/favicon.ico" />
		</Head>

		<main>
			<div className="title">
				<Typography variant="h1" weight="bold">
					Favycon
				</Typography>
				<Typography variant="superscript" tag="span" weight="bold" color="gray">
					TOOL
				</Typography>
			</div>
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

		<style jsx>
			{`
				.container {
					min-height: 100vh;
					padding: 0 0.5rem;
					display: flex;
					flex-direction: column;
					justify-content: center;
					align-items: center;
				}

				.title {
					display: flex;
					align-items: flex-start;
				}

				main {
					padding: 5rem 0;
					flex: 1;
					display: flex;
					flex-direction: column;
					justify-content: center;
					max-width: 350px;
				}
			`}
		</style>
	</div>
)

export default Home
