![Favycon logo](./public/favicon.svg)

# Favycon

> A favicon generator tool

A small online tool to help you generate your favicon in all the sizes and formats you need.

<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
[![All Contributors](https://img.shields.io/badge/all_contributors-5-orange.svg?style=flat-square)](#contributors-)
<!-- ALL-CONTRIBUTORS-BADGE:END -->
![Release](https://github.com/ruisaraiva19/favycon/workflows/Release/badge.svg)
![Lint](https://github.com/ruisaraiva19/favycon/workflows/Lint/badge.svg)
![Commitlint](https://github.com/ruisaraiva19/favycon/workflows/Commitlint/badge.svg)
[![Netlify Status](https://api.netlify.com/api/v1/badges/d2e6694d-1f2c-4b50-ad21-ff5c3fcbc3c4/deploy-status)](https://app.netlify.com/sites/favycon-storybook/deploys)

## Browser favicon formats supported

|     | IE  | Edge | Firefox | Chrome | Safari | iOS Safari | Chrome Android |
| --- | --- | ---- | ------- | ------ | ------ | ---------- | -------------- |
| ico | ✅   | ✅    | ✅       | ✅      | ✅      | ✅          | ✅              |
| png | ✅   | ✅    | ✅       | ✅      | ✅      | ❌          | ✅              |
| svg | ❌   | ✅    | ✅       | ✅      | ⚠️      | ⚠️          | ✅              |

## Favicon recommended sizes

|         | apple-icon | favicon | ms-icon | pwa |
| ------- | ---------- | ------- | ------- | --- |
| 57x57   | ✅          |         |         |     |
| 60x60   | ✅          |         |         |     |
| 72x72   | ✅          |         |         | ✅   |
| 76x76   | ✅          |         |         |     |
| 114x114 | ✅          |         |         |     |
| 120x120 | ✅          |         |         |     |
| 144x144 | ✅          |         | ✅       | ✅   |
| 152x152 | ✅          |         |         | ✅   |
| 180x180 | ✅          |         |         |     |
| 16x16   |            | ✅       |         |     |
| 32x32   |            | ✅       |         |     |
| 96x96   |            | ✅       |         | ✅   |
| 128x128 |            |         |         | ✅   |
| 192x192 |            | ✅       |         | ✅   |
| 384x384 |            |         |         | ✅   |
| 512x512 |            |         |         | ✅   |
| 70x70   |            |         | ✅       |     |
| 150x150 |            |         | ✅       |     |
| 310x150 |            |         | ✅       |     |
| 310x310 |            |         | ✅       |     |

## HTML tags to add for all favicon sizes

```html
<link rel="apple-touch-icon" sizes="57x57" href="/favicon-57x57.png">
<link rel="apple-touch-icon" sizes="60x60" href="/favicon-60x60.png">
<link rel="apple-touch-icon" sizes="72x72" href="/favicon-72x72.png">
<link rel="apple-touch-icon" sizes="76x76" href="/favicon-76x76.png">
<link rel="apple-touch-icon" sizes="114x114" href="/favicon-114x114.png">
<link rel="apple-touch-icon" sizes="120x120" href="/favicon-120x120.png">
<link rel="apple-touch-icon" sizes="144x144" href="/favicon-144x144.png">
<link rel="apple-touch-icon" sizes="152x152" href="/favicon-152x152.png">
<link rel="apple-touch-icon" sizes="180x180" href="/favicon-180x180.png">
<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
<link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png">
<link rel="icon" type="image/png" sizes="192x192" href="/favicon-192x192.png">
<link rel="shortcut icon" type="image/x-icon" href="/favicon.ico">
<link rel="icon" type="image/x-icon" href="/favicon.ico">
<meta name="msapplication-TileColor" content="#ffffff">
<meta name="msapplication-TileImage" content="/favicon-144x144.png">
<meta name="msapplication-config" content="/browserconfig.xml">
<!-- SVG favicon -->
<link rel="icon" type="image/svg+xml" href="/favicon.svg">
<!-- PWA compatible -->
<link rel="manifest" href="/manifest.json">
<meta name="theme-color" content="#ffffff">
```

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/zeit/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, install the project dependencies:

```bash
yarn install
```

Then, run the development server:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

Also, you can run the Storybook server:

```bash
yarn storybook
```

Open [http://localhost:6006](http://localhost:6006) with your browser to see all stories.

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://ruisaraiva.com"><img src="https://avatars2.githubusercontent.com/u/7356098?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Rui Saraiva</b></sub></a><br /><a href="#infra-ruisaraiva19" title="Infrastructure (Hosting, Build-Tools, etc)">🚇</a> <a href="https://github.com/toolslab/favycon/commits?author=ruisaraiva19" title="Code">💻</a> <a href="https://github.com/toolslab/favycon/commits?author=ruisaraiva19" title="Documentation">📖</a> <a href="#question-ruisaraiva19" title="Answering Questions">💬</a> <a href="#maintenance-ruisaraiva19" title="Maintenance">🚧</a></td>
    <td align="center"><a href="https://github.com/eduardoPinto12"><img src="https://avatars1.githubusercontent.com/u/45365656?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Eduardo Pinto</b></sub></a><br /><a href="https://github.com/toolslab/favycon/commits?author=eduardoPinto12" title="Code">💻</a> <a href="https://github.com/toolslab/favycon/pulls?q=is%3Apr+reviewed-by%3AeduardoPinto12" title="Reviewed Pull Requests">👀</a></td>
    <td align="center"><a href="https://github.com/otsugua"><img src="https://avatars2.githubusercontent.com/u/9093629?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Augusto Lopes</b></sub></a><br /><a href="#design-otsugua" title="Design">🎨</a></td>
    <td align="center"><a href="https://rgllm.com"><img src="https://avatars3.githubusercontent.com/u/9056941?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Rogério Moreira</b></sub></a><br /><a href="https://github.com/toolslab/favycon/commits?author=rgllm" title="Code">💻</a> <a href="https://github.com/toolslab/favycon/pulls?q=is%3Apr+reviewed-by%3Argllm" title="Reviewed Pull Requests">👀</a></td>
    <td align="center"><a href="https://github.com/miguellteixeira"><img src="https://avatars1.githubusercontent.com/u/17954325?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Miguel Teixeira</b></sub></a><br /><a href="https://github.com/toolslab/favycon/commits?author=miguellteixeira" title="Code">💻</a> <a href="https://github.com/toolslab/favycon/pulls?q=is%3Apr+reviewed-by%3Amiguellteixeira" title="Reviewed Pull Requests">👀</a></td>
  </tr>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->
<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!
