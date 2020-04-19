import React from 'react'
import useDarkMode from 'use-dark-mode'
import { DragAndDrop } from '.'
import { Button } from 'components/button'

export default {
	title: 'Drag & Drop',
}

export const DragAndDropDesktop = () => {
	const { toggle } = useDarkMode(false)
	const onGenerate = async (image: File) => {
		console.log('onGenerate', image)
		return Promise.resolve(new ArrayBuffer(8))
	}
	const onError = (message: string) => {
		console.log(message)
	}
	const onFile = (hasFile: boolean) => {
		console.log(hasFile)
	}

	return (
		<div style={{ padding: 20 }}>
			<DragAndDrop onGenerate={onGenerate} onError={onError} onFile={onFile} />
			<br />
			<Button onClick={toggle}>Toggle Dark Mode</Button>
		</div>
	)
}

DragAndDropDesktop.story = {
	name: 'Desktop',
}
