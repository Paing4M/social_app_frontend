import axiosInstance from '../config/axiosInstance'

export const updateProfileService = async (data) => {
	const res = await axiosInstance.post('/api/profile/update-profile', data)
	return res.data
}

export const changePasswordService = async (data) => {
	const res = await axiosInstance.post('/api/profile/change-password', data)
	return res.data
}
