import React from 'react'
import useDarkMode from 'use-dark-mode'
import { DragAndDrop } from '.'
import { Button } from 'components/button'

export default {
	title: 'Drag & Drop',
}

export const DragAndDropDesktop = () => {
	const { toggle } = useDarkMode(false)
	const onDrop = (acceptedFiles: File[]) => {
		console.log('acceptedFiles[0]', acceptedFiles[0])
	}

	return (
		<div style={{ padding: 20 }}>
			<DragAndDrop onDrop={onDrop} />
			<br />
			<Button onClick={toggle}>Toggle Dark Mode</Button>
		</div>
	)
}

DragAndDropDesktop.story = {
	name: 'Desktop',
}
