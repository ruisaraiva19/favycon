import React from 'react'

export const useToggle = (initialValue = false): [boolean, () => void] => {
	const [value, setValue] = React.useState(initialValue)

	const toggle = React.useCallback(() => {
		setValue((v) => !v)
	}, [])

	return [value, toggle]
}
