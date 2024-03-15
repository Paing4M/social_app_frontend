import axiosInstance from '../config/axiosInstance'

export const registerService = async (data) => {
	const res = await axiosInstance.post('/api/register', data)
	return res.data
}

export const verifyEmailService = async (data) => {
	const res = await axiosInstance.post('/api/verify-email', data)
	return res.data
}

export const resendEmailVerificationService = async (data) => {
	const res = await axiosInstance.post(
		'/api/resend-email-verification-link',
		data
	)
	return res.data
}
