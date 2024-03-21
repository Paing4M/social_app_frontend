import axiosInstance from '../config/axiosInstance'

export const likeService = async (data) => {
	const res = await axiosInstance.post('/api/like', data)
	return res.data
}
