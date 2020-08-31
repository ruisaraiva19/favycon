import React, { useState, useEffect } from 'react'
import { NextPage } from 'next'
import NProgress from 'nprogress'
import { BaseLayout } from 'components/base-layout'
import { FavyconWizard } from 'components/favycon-wizard'
import { FavyconInfo } from 'components/favycon-info'
import { DragAndDrop } from 'components/drag-and-drop'
import { FavyconError } from 'components/favycon-error'
import { SEO } from 'components/seo'

import styles from './index.module.scss'

NProgress.configure({ minimum: 0.15, speed: 300, trickleSpeed: 150, showSpinner: false })

const Home: NextPage = () => {
	const [error, setError] = useState('')
	const [file, setFile] = useState(false)
	const [fileCounter, setFileCounter] = useState(0)
	const [errorCounter, setErrorCounter] = useState(0)

	useEffect(() => {
		if (!file) {
			setFileCounter((c) => c + 1)
		}
	}, [file])

	const onError = (error: string) => {
		setErrorCounter((c) => c + 1)
		setError(error)
	}

	const onGenerate = async (file: File, pwa: boolean, dark: boolean) => {
		try {
			NProgress.start()
			const formData = new FormData()
			formData.append('icon', file)
			formData.append('pwa', pwa ? '1' : '0')
			formData.append('dark', dark ? '1' : '0')
			const response = await fetch('/api/favycon', {
				method: 'POST',
				body: formData,
			})
			if (response.status >= 300) {
				throw new Error(await response.text())
			}
			return await response.arrayBuffer()
		} catch (error) {
			throw error
		} finally {
			NProgress.done()
		}
	}

	return (
		<BaseLayout>
			<SEO
				title="Favycon - A favicon generator tool"
				description="A small online tool to help you generate your favicon in all the sizes and formats you need."
			/>
			<main className={styles.main}>
				<div className={styles.container}>
					<FavyconInfo className={styles.info} />
					<FavyconWizard showDndImage={!file}>
						<DragAndDrop key={fileCounter} onFile={setFile} onGenerate={onGenerate} onError={onError} />
					</FavyconWizard>
				</div>
				<FavyconError key={errorCounter} error={error} clearError={() => setError('')} />
			</main>
		</BaseLayout>
	)
}

export default Home
