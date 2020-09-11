export const isTouchCapable = () => {
	if (typeof window === 'undefined') {
		return false
	}
	return (
		'ontouchstart' in window ||
		// @ts-ignore
		(window.DocumentTouch && document instanceof window.DocumentTouch) ||
		navigator.maxTouchPoints > 0 ||
		window.navigator.msMaxTouchPoints > 0
	)
}
