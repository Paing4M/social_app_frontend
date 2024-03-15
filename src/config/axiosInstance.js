import axios from 'axios'
import { getLocatStorage } from '../helpers/localStorage'

const axiosInstance = axios.create({
	baseURL: import.meta.env.VITE_API_URL,
	withCredentials: true,
	withXSRFToken: true,
})

axiosInstance.get('/sanctum/csrf-cookie').then((response) => {
	console.log(response)
})

axiosInstance.interceptors.request.use(
	async (config) => {
		const token = getLocatStorage('token')
		let headers = {
			Accept: 'application/json',
			'Content-Type': 'application/json',
			Authorization: `Bearer ${token}`,
		}

		config.headers = headers
		return config
	},
	async (response) => response,
	async (err) => Promise.reject(err)
)

export default axiosInstance
