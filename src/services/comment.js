import axiosInstance from '../config/axiosInstance'

export const createCommentService = async (data) => {
	const res = await axiosInstance.post('/api/comments', data)
	return res.data
}

export const getCommentsService = async (id) => {
	const res = await axiosInstance.get('/api/comments/' + id)
	return res.data
}

export const deleteCommentService = async (id) => {
	const res = await axiosInstance.delete('/api/comments/' + id)
	return res.data
}
