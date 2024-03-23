import axiosInstance from '../config/axiosInstance'

export const createPostService = async (data) => {
	const res = await axiosInstance.post('/api/posts', data)
	return res.data
}

export const updatePostService = async (data, id) => {
	const postData = {
		...data,
		method: '_put',
	}
	const res = await axiosInstance.post(
		'/api/posts/update-post/' + id,
		postData
	)
	return res.data
}

export const getUserPostsService = async (selectedCategory, perPage, page) => {
	const res = await axiosInstance.get(
		'/api/get-user-posts?page=' +
			page +
			'&perPage=' +
			perPage +
			'&category=' +
			selectedCategory
	)
	return res.data
}

export const postCategoryService = async () => {
	const res = await axiosInstance.get('/api/get-post-categories')
	return res.data
}

export const getSinglePostService = async (id) => {
	const res = await axiosInstance.get('/api/posts/' + id)
	return res.data
}

export const getFeaturedPostsService = async () => {
	const res = await axiosInstance.get('/api/get-random-posts')
	return res.data
}

export const getLatestPostsService = async () => {
	const res = await axiosInstance.get('/api/get-latest-posts')
	return res.data
}

export const deletePostService = async (id) => {
	const res = await axiosInstance.delete('/api/posts/' + id)
	return res.data
}

export const getPostsService = async (page, category) => {
	const res = await axiosInstance.get(
		'/api/posts?page=' + page + '&category=' + category
	)
	return res.data
}
