import { NextApiResponse } from 'next'
import sharp from 'sharp'
import { convert } from '@fiahfy/ico-convert'
import multer from 'multer'
import AdmZip from 'adm-zip'

import { runMiddleware } from 'utils/api'
import { faviconSizes, pwaFaviconSizes, browserConfigTemplate, readmeTemplate, manifestCode } from 'utils/favicon'
import { MulterApiRequest, ACCEPT_MIME_TYPES } from 'utils/files'

const storage = multer.memoryStorage()
const upload = multer({ storage })

export const config = {
	api: {
		bodyParser: false,
	},
}

export default async (req: MulterApiRequest, res: NextApiResponse) => {
	switch (req.method) {
		case 'POST':
			await runMiddleware(req, res, upload.single('icon'))

			if (!req.file) {
				return res.status(400).end('The icon field is required')
			}
			if (!Object.keys(ACCEPT_MIME_TYPES).includes(req.file.mimetype)) {
				return res.status(422).end(`The icon field should contain a ${Object.values(ACCEPT_MIME_TYPES).join(' or ')}`)
			}

			const fileBuffer = req.file.buffer
			const { format, width, height } = await sharp(fileBuffer).metadata()
			const isSvg = format === 'svg'
			const pwaCompatible = req.body.pwa ? req.body.pwa === '1' : false

			if (!isSvg && !pwaCompatible && ((width && width < 310) || (height && height < 310))) {
				return res.status(422).end('The icon should be at least 310px')
			}
			if (!isSvg && pwaCompatible && ((width && width < 512) || (height && height < 512))) {
				return res.status(422).end('The icon should be at least 512px for PWA compatibility')
			}

			const zip = new AdmZip()
			// add icons folder
			zip.addFile('icons/', Buffer.alloc(0))

			const sizes = pwaCompatible ? [...faviconSizes, ...pwaFaviconSizes] : faviconSizes

			// PNG favicon files
			const promises = sizes.map((size) => {
				return new Promise((resolve) => {
					const iconWidth = parseInt(size.split('x')[0])
					const iconHeight = parseInt(size.split('x')[1])
					sharp(fileBuffer, { density: isSvg && width ? (72 * iconWidth) / width : 72 })
						.resize(iconWidth, iconHeight, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
						.png()
						.toBuffer()
						.then((scaledPng) => {
							zip.addFile(`icons/favicon-${size}.png`, scaledPng)
							resolve()
						})
				})
			})

			// ICO favicon file
			const icoPromise = new Promise((resolve) => {
				sharp(fileBuffer, { density: isSvg && width ? (72 * 256) / width : 72 })
					.resize(256, 256, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
					.png()
					.toBuffer()
					.then(async (scaledPng) => {
						const ico = await convert(scaledPng)
						zip.addFile('icons/favicon.ico', ico)
						resolve()
					})
			})

			promises.push(icoPromise)
			await Promise.all(promises)

			// SVG file
			if (isSvg) {
				zip.addFile('icons/favicon.svg', fileBuffer)
			}

			// PWA manifest file
			if (pwaCompatible) {
				const manifest = manifestCode()
				zip.addFile('icons/manifest.json', Buffer.alloc(manifest.length, manifest))
			}

			// IE10+ browser config file
			const browserConfig = browserConfigTemplate()
			zip.addFile('icons/browserconfig.xml', Buffer.alloc(browserConfig.length, browserConfig))

			// Readme file
			const readme = readmeTemplate(undefined, isSvg, pwaCompatible)
			zip.addFile('readme.txt', Buffer.alloc(readme.length, readme))

			res.setHeader('Content-disposition', 'attachment; filename=favicons.zip')
			res.setHeader('Content-type', 'application/zip')
			res.status(200).end(zip.toBuffer())
			break
		default:
			res.setHeader('Allow', ['POST'])
			res.status(405).end(`Method ${req.method || ''} Not Allowed`)
	}
}
