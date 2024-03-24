import axiosInstance from '../config/axiosInstance'

export const userService = async (page, perPage, type) => {
	const res = await axiosInstance.get(
		`/api/users?page=${page}&perPage=${perPage}&type=${type}`
	)
	return res.data
}

export const userDeleteService = async (id) => {
	const res = await axiosInstance.delete(`/api/users/${id}`)
	return res.data
}

export const userTypeService = async (type) => {
	const res = await axiosInstance.post('/api/users', type)
	return res.data
}
