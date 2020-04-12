const idCounter: { [key: string]: number } = {}

export const uniqueId = (prefix = '$unique$') => {
	if (!idCounter[prefix]) {
		idCounter[prefix] = 0
	}

	const id = ++idCounter[prefix]
	if (prefix === '$unique$') {
		return `${id}`
	}

	return `${prefix}${id}`
}
