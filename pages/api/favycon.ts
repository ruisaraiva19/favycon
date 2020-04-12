import { NextApiRequest, NextApiResponse } from 'next'
import sharp from 'sharp'
import { convert } from '@fiahfy/ico-convert'
import multer from 'multer'
import AdmZip from 'adm-zip'

import { runMiddleware } from 'utils/api'
import { faviconSizesPrefixes, browserConfigTemplate, tutorialTemplate } from 'utils/favicon'

const storage = multer.memoryStorage()
const upload = multer({ storage })

export const config = {
	api: {
		bodyParser: false,
	},
}

export default async (req: NextApiRequest, res: NextApiResponse) => {
	switch (req.method) {
		case 'POST':
			await runMiddleware(req, res, upload.single('icon'))

			const zip = new AdmZip()
			// add folder
			zip.addFile('icons/', Buffer.alloc(0))
			const file: Buffer = (req as any).file.buffer

			Object.keys(faviconSizesPrefixes).map(async (size) => {
				const [width, height] = size.split('x')
				const scaledPng = await sharp(file)
					.resize(parseInt(width), parseInt(height), { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
					.png()
					.toBuffer()
				// @ts-ignore
				faviconSizesPrefixes[size].forEach((prefix) => {
					zip.addFile(`icons/${prefix}-${size}.png`, scaledPng)
				})
			})

			const scaledPng = await sharp(file)
				.resize(256, 256, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
				.png()
				.toBuffer()
			const ico = await convert(scaledPng)
			zip.addFile('icons/favicon.ico', ico)

			zip.addFile('icons/browserconfig.xml', Buffer.alloc(browserConfigTemplate.length, browserConfigTemplate))
			zip.addFile('readme.txt', Buffer.alloc(tutorialTemplate.length, tutorialTemplate))

			res.setHeader('Content-disposition', 'attachment; filename=favicons.zip')
			res.setHeader('Content-type', 'application/zip')
			res.status(200).end(zip.toBuffer())
			break
		default:
			res.setHeader('Allow', ['POST'])
			res.status(405).end(`Method ${req.method} Not Allowed`)
	}
}
