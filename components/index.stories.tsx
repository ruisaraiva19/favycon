import React from 'react'

export default {
	title: 'Welcome',
}

export const toStorybook = () => (
	<article className="welcome">
		<h1>Welcome to Favycon Storybook.</h1>
		<p>This is a development environment for the application UI components.</p>
		<p>
			A story is a unique state one or more components. You can have as many stories as you want. Basically a story is
			virtual test case.
		</p>
		<style jsx>{`
			.welcome {
				padding: 15px;
				line-height: 1.4;
				font-family: 'Helvetica Neue', Helvetica, 'Segoe UI', Arial, freesans, sans-serif;
				background-color: rgb(255, 255, 255);
				color: rgb(0, 0, 0);
			}
		`}</style>
	</article>
)

toStorybook.story = {
	name: 'to Storybook',
}
