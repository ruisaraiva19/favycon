export const faviconSizesPrefixes = {
	'57x57': ['apple-icon'],
	'60x60': ['apple-icon'],
	'72x72': ['apple-icon'],
	'76x76': ['apple-icon'],
	'114x114': ['apple-icon'],
	'120x120': ['apple-icon'],
	'144x144': ['apple-icon', 'ms-icon'],
	'152x152': ['apple-icon'],
	'180x180': ['apple-icon'],
	'16x16': ['favicon'],
	'32x32': ['favicon'],
	'96x96': ['favicon'],
	'192x192': ['favicon'],
	'70x70': ['ms-icon'],
	'150x150': ['ms-icon'],
	'310x150': ['ms-icon'],
	'310x310': ['ms-icon'],
}

export const browserConfigTemplate = `
<?xml version="1.0" encoding="utf-8"?>
<browserconfig>
	<msapplication>
		<tile>
			<square70x70logo src="/ms-icon-70x70.png"/>
			<square150x150logo src="/ms-icon-150x150.png"/>
			<wide310x150logo src="/ms-icon-310x150.png"/>
			<square310x310logo src="/ms-icon-310x310.png"/>
			<TileColor>#ffffff</TileColor>
		</tile>
	</msapplication>
</browserconfig>
`

export const tutorialTemplate = `
Thank you for using Favycon!

Now that you have all favicon files generator, you can copy all files
from the icons folder into your project public folder.

Last but not least add the following HTML tags to your index.html file.

<link rel="apple-touch-icon" sizes="57x57" href="/apple-icon-57x57.png">
<link rel="apple-touch-icon" sizes="60x60" href="/apple-icon-60x60.png">
<link rel="apple-touch-icon" sizes="72x72" href="/apple-icon-72x72.png">
<link rel="apple-touch-icon" sizes="76x76" href="/apple-icon-76x76.png">
<link rel="apple-touch-icon" sizes="114x114" href="/apple-icon-114x114.png">
<link rel="apple-touch-icon" sizes="120x120" href="/apple-icon-120x120.png">
<link rel="apple-touch-icon" sizes="144x144" href="/apple-icon-144x144.png">
<link rel="apple-touch-icon" sizes="152x152" href="/apple-icon-152x152.png">
<link rel="apple-touch-icon" sizes="180x180" href="/apple-icon-180x180.png">
<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
<link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png">
<link rel="icon" type="image/png" sizes="192x192" href="/favicon-192x192.png">
<link rel="shortcut icon" type="image/x-icon" href="/favicon.ico">
<link rel="icon" type="image/x-icon" href="/favicon.ico">
<meta name="msapplication-config" content="/browserconfig.xml">
<meta name="msapplication-TileColor" content="#ffffff">
<meta name="msapplication-TileImage" content="/ms-icon-144x144.png">
`
