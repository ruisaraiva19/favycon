import { useState, useCallback } from 'react'

export const useToggle = (initialValue = false): [boolean, () => void] => {
	const [value, setValue] = useState(initialValue)

	const toggle = useCallback(() => {
		setValue((v) => !v)
	}, [])

	return [value, toggle]
}
