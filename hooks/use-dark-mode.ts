import { useEffect, useCallback, useMemo } from 'react'
import { useEvent, useLocalStorage } from 'react-use'

type DarkModeConfig = {
	element?: HTMLElement
	classNameDark?: string
	classNameLight?: string
	onChange?: (val: boolean) => void
	storageKey?: string
	global?: typeof globalThis
}

type MediaQueryEvents = {
	addEventListener: (_: string, handler: (ev: MediaQueryListEvent) => void) => void
	removeEventListener: (_: string, handler: (ev: MediaQueryListEvent) => void) => void
}

// eslint-disable-next-line @typescript-eslint/no-empty-function
const noop = () => {}

const mockElement = {
	classList: {
		add: noop,
		remove: noop,
	},
}

const preferDarkQuery = '(prefers-color-scheme: dark)'

export const useDarkMode = (
	initialValue = false,
	{
		element,
		classNameDark,
		classNameLight,
		onChange,
		storageKey = 'darkMode',
		global: glbl = global,
	}: DarkModeConfig = {}
) => {
	const mql = glbl.matchMedia ? glbl.matchMedia(preferDarkQuery) : ({} as MediaQueryList)

	const mediaQueryEventTarget: MediaQueryEvents = {
		addEventListener: (_, handler) => mql.addListener && mql.addListener(handler),
		removeEventListener: (_, handler) => mql.removeListener && mql.removeListener(handler),
	}

	const isColorSchemeQuerySupported = mql.media === preferDarkQuery

	const getInitialValue = (usersInitialState: boolean) =>
		isColorSchemeQuerySupported ? mql.matches : usersInitialState

	// Mock element if SSR else real body element.
	const defaultElement = (glbl.document && glbl.document.body) || mockElement

	const getDefaultOnChange = useCallback(
		(element = defaultElement, classNameDark = 'dark-mode', classNameLight = 'light-mode') =>
			(val: boolean) => {
				element.classList.add(val ? classNameDark : classNameLight)
				element.classList.remove(val ? classNameLight : classNameDark)
			},
		[defaultElement]
	)

	const [state, setState] = useLocalStorage(storageKey, getInitialValue(initialValue))

	const stateChangeCallback = useMemo(
		() => onChange || getDefaultOnChange(element, classNameDark, classNameLight),
		[onChange, element, classNameDark, classNameLight, getDefaultOnChange]
	)

	// Call the onChange handler
	useEffect(() => {
		stateChangeCallback(state || false)
	}, [stateChangeCallback, state])

	// Listen for media changes and set state.
	useEvent('change', ({ matches }) => setState(matches), mediaQueryEventTarget)

	return {
		value: state,
		enable: useCallback(() => setState(true), [setState]),
		disable: useCallback(() => setState(false), [setState]),
		toggle: useCallback(() => setState(!state), [state, setState]),
	}
}
