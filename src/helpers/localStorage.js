export const setLocatStorage = (key, value) => {
	const res = localStorage.setItem(key, JSON.stringify(value))
	return res
}

export const getLocatStorage = (key) => {
	const res = localStorage.getItem(key)
		? JSON.parse(localStorage.getItem(key))
		: null
	return res
}

export const removeLocatStorage = (key) => {
	return localStorage.removeItem(key)
}
