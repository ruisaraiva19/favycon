import Router from 'next/router'

const commonRouterData = {
	push: () => new Promise((resolve) => resolve(true)),
	replace: () => new Promise((resolve) => resolve(true)),
	prefetch: () => new Promise((resolve) => resolve()),
	reload: () => {},
	back: () => {},
}

Router.router = {
	...commonRouterData,
}

export const myRouter = {
	...commonRouterData,
	pathname: '/',
	route: '/',
	query: {},
	asPath: '/',
	isFallback: false,
}
