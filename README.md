# favycon

Favicon generator tool

<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
[![All Contributors](https://img.shields.io/badge/all_contributors-0-orange.svg?style=flat-square)](#contributors-)
<!-- ALL-CONTRIBUTORS-BADGE:END -->
![Release](https://github.com/ruisaraiva19/favycon/workflows/Release/badge.svg)
![Lint](https://github.com/ruisaraiva19/favycon/workflows/Lint/badge.svg)
![Commitlint](https://github.com/ruisaraiva19/favycon/workflows/Commitlint/badge.svg)
[![Netlify Status](https://api.netlify.com/api/v1/badges/d2e6694d-1f2c-4b50-ad21-ff5c3fcbc3c4/deploy-status)](https://app.netlify.com/sites/favycon/deploys)

## Browser favicon formats supported

|     | IE  | Edge | Firefox | Chrome | Safari | iOS Safari | Chrome Android |
| --- | --- | ---- | ------- | ------ | ------ | ---------- | -------------- |
| ico | ✅   | ✅    | ✅       | ✅      | ✅      | ✅          | ✅              |
| png | ✅   | ✅    | ✅       | ✅      | ✅      | ❌          | ✅              |
| svg | ❌   | ✅    | ✅       | ✅      | ⚠️      | ⚠️          | ✅              |

## Favicon recommended sizes

|         | apple-touch-icon | icon | msapplication |
| ------- | ---------------- | ---- | ------------- |
| 57x57   | ✅                |      |               |
| 60x60   | ✅                |      |               |
| 72x72   | ✅                |      |               |
| 76x76   | ✅                |      |               |
| 114x114 | ✅                |      |               |
| 120x120 | ✅                |      |               |
| 144x144 | ✅                |      | ✅             |
| 152x152 | ✅                |      |               |
| 180x180 | ✅                |      |               |
| 16x16   |                  | ✅    |               |
| 32x32   |                  | ✅    |               |
| 96x96   |                  | ✅    |               |
| 192x192 |                  | ✅    |               |
| 70x70   |                  |      | ✅             |
| 150x150 |                  |      | ✅             |
| 310x150 |                  |      | ✅             |
| 310x310 |                  |      | ✅             |

## HTML tags to add for all favicon sizes

```html
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
<meta name="msapplication-config" content="browserconfig.xml" />
<meta name="msapplication-TileColor" content="#ffffff">
<meta name="msapplication-TileImage" content="/ms-icon-144x144.png">
```

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/zeit/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<!-- markdownlint-enable -->
<!-- prettier-ignore-end -->
<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!