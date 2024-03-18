import axiosInstance from '../config/axiosInstance'

export const createPostService = async (data) => {
	const res = await axiosInstance.post('/api/posts', data)
	return res.data
}
