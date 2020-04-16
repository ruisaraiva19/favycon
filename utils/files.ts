export const ONE_MB = 1048576 // 1MB
export const MIN_SIZE = 310
export const MIN_PWA_SIZE = 1024
export const SVG_MIME_TYPE = 'image/svg+xml'
export const RECOMMENDED_MIME_TYPES = ['image/png', SVG_MIME_TYPE]
export const ACCEPT_MIME_TYPES = {
	'image/jpeg': 'JPEG',
	'image/png': 'PNG',
	'image/svg+xml': 'SVG',
} as { [key: string]: string }

export const getImageFileSizes = (file: File) =>
	new Promise<{ width: number; height: number }>((resolve) => {
		const fileReader = new FileReader()
		fileReader.onload = () => {
			const img = new Image()
			img.onload = () => {
				resolve({ width: img.width, height: img.height })
			}
			img.src = fileReader.result as string
		}
		fileReader.readAsDataURL(file)
	})

export const downloadFile = (data: ArrayBuffer, filename: string) => {
	if ('msSaveOrOpenBlob' in window.navigator) {
		// Blob for IE11
		window.navigator.msSaveOrOpenBlob(new Blob([data]), filename)
	} else {
		// Blob navigator
		const url = window.URL.createObjectURL(new Blob([data]))
		const link = document.createElement('a')
		link.href = url
		link.setAttribute('download', filename)
		document.body.appendChild(link)
		link.click()
		link.remove()
	}
}
