export const faviconSizes = [
	'57x57',
	'60x60',
	'72x72',
	'76x76',
	'114x114',
	'120x120',
	'144x144',
	'152x152',
	'180x180',
	'16x16',
	'32x32',
	'96x96',
	'192x192',
	'70x70',
	'150x150',
	'310x310',
]

export const pwaFaviconSizes = ['128x128', '384x384', '512x512']

export const browserConfigTemplate = (color = '#ffffff') => `
<?xml version="1.0" encoding="utf-8"?>
<browserconfig>
	<msapplication>
		<tile>
			<square70x70logo src="/favicon-70x70.png"/>
			<square150x150logo src="/favicon-150x150.png"/>
			<square310x310logo src="/favicon-310x310.png"/>
			<TileColor>${color}</TileColor>
		</tile>
	</msapplication>
</browserconfig>
`

export const headTemplate = (
	color = '#ffffff',
	isSvg = false,
	isPwa = false
) => `<link rel="apple-touch-icon" sizes="57x57" href="/favicon-57x57.png">
<link rel="apple-touch-icon" sizes="60x60" href="/favicon-60x60.png">
<link rel="apple-touch-icon" sizes="72x72" href="/favicon-72x72.png">
<link rel="apple-touch-icon" sizes="76x76" href="/favicon-76x76.png">
<link rel="apple-touch-icon" sizes="114x114" href="/favicon-114x114.png">
<link rel="apple-touch-icon" sizes="120x120" href="/favicon-120x120.png">
<link rel="apple-touch-icon" sizes="144x144" href="/favicon-144x144.png">
<link rel="apple-touch-icon" sizes="152x152" href="/favicon-152x152.png">
<link rel="apple-touch-icon" sizes="180x180" href="/favicon-180x180.png">${
	isSvg ? '\n<link rel="icon" type="image/svg+xml" href="/favicon.svg">' : ''
}
<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
<link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png">
<link rel="icon" type="image/png" sizes="192x192" href="/favicon-192x192.png">
<link rel="shortcut icon" type="image/x-icon" href="/favicon.ico">
<link rel="icon" type="image/x-icon" href="/favicon.ico">
<meta name="msapplication-TileColor" content="${color}">
<meta name="msapplication-TileImage" content="/favicon-144x144.png">
<meta name="msapplication-config" content="/browserconfig.xml">${
	isPwa ? `\n<link rel="manifest" href="/manifest.json">\n<meta name="theme-color" content="${color}">` : ''
}`

export const readmeTemplate = (color = '#ffffff', isSvg = false, isPwa = false) => `Thank you for using Favycon!

Now that you have all favicon files generator, you can copy all files
from the icons folder into your project public folder.

Last but not least add the following HTML tags to your index.html file.

${headTemplate(color, isSvg, isPwa)}`

export const manifestCode = (color = '#ffffff') => `{
  "name": "My App",
  "description": "My App description",
  "short_name": "My App",
  "icons": [
    {
      "src": "/favicon-72x72.png",
      "type": "image/png",
      "sizes": "72x72",
      "purpose": "any maskable"
    },
    {
      "src": "/favicon-96x96.png",
      "type": "image/png",
      "sizes": "96x96",
      "purpose": "any maskable"
    },
    {
      "src": "/favicon-128x128.png",
      "type": "image/png",
      "sizes": "128x128",
      "purpose": "any maskable"
    },
    {
      "src": "/favicon-144x144.png",
      "type": "image/png",
      "sizes": "144x144",
      "purpose": "any maskable"
    },
    {
      "src": "/favicon-152x152.png",
      "type": "image/png",
      "sizes": "152x152",
      "purpose": "any maskable"
    },
    {
      "src": "/favicon-192x192.png",
      "type": "image/png",
      "sizes": "192x192",
      "purpose": "any maskable"
    },
    {
      "src": "/favicon-384x384.png",
      "type": "image/png",
      "sizes": "384x384",
      "purpose": "any maskable"
    },
    {
      "src": "/favicon-512x512.png",
      "type": "image/png",
      "sizes": "512x512",
      "purpose": "any maskable"
    }
  ],
  "scope": "/",
  "start_url": "/?source=pwa",
  "display": "standalone",
  "theme_color": "${color}",
  "background_color": "${color}"
}`
