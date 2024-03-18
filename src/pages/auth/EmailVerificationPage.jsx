import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import Loader from '../../components/Loader'
import {
	resendEmailVerificationService,
	verifyEmailService,
} from '../../services/auth'
import { useEffect } from 'react'
import { Bounce, toast } from 'react-toastify'
import { useDispatch } from 'react-redux'
import { setUser } from '../../slices/userSlice'
import { useNavigate } from 'react-router-dom'
import { alert } from '../../helpers/alert'
import { useSelector } from 'react-redux'

const Button = ({ handleClick, loading, children }) => {
	return (
		<button
			onClick={handleClick}
			disabled={loading}
			className={`bg-color  py-1 flex items-center gap-3 text-white px-6 rounded-md ${
				loading && 'opacity-85'
			}`}
		>
			{loading && <Loader color={'#fff'} loading={loading} size={20} />}
			{children}
		</button>
	)
}

const EmailVerificationPage = () => {
	const [URLSearchParams] = useSearchParams()
	const [loading, setLoading] = useState(false)
	const [data, setData] = useState(null)
	const dispatch = useDispatch()
	const navigate = useNavigate()
	const [disabled, setDisabled] = useState(false)
	const { user } = useSelector((state) => state.user)
	console.log(user)

	useEffect(() => {
		if (user?.email_verified_at) navigate('/')
	}, [user])

	// to disable resend button
	useEffect(() => {
		if (disabled) {
			const timer = setTimeout(() => {
				setDisabled(false)
			}, 60000) // 60 seconds

			return () => clearTimeout(timer)
		}
	}, [disabled])

	// get the search parmas
	useEffect(() => {
		if (URLSearchParams.get('email') && URLSearchParams.get('token')) {
			let email = URLSearchParams.get('email')
			let token = URLSearchParams.get('token')

			setData({ email: email, token: token })
		}
	}, [URLSearchParams])

	// handle email verification
	const handleVerification = async () => {
		setLoading(true)
		if (URLSearchParams.get('email') && URLSearchParams.get('token')) {
			try {
				const res = await verifyEmailService(data)
				// console.log(res)
				if (res.status === 200) {
					setLoading(false)
					dispatch(setUser(res.user))
					navigate('/')
				}
			} catch (error) {
				// console.log('err', error)
				if (error?.response?.data) {
					alert('error', error?.response?.data?.message)
				}
				setLoading(false)
			}
		}
	}

	// resend email verification
	const handleResend = async () => {
		setLoading(true)
		setDisabled(true)
		try {
			const res = await resendEmailVerificationService({
				email: URLSearchParams.get('email'),
			})
			// console.log(res)
			if (res.status == 200) {
				alert('success', res?.message)
				setLoading(false)
			}
		} catch (error) {
			console.log(error)
			if (error?.response?.status == 404) {
				alert('error', error?.response?.data?.message)
				setLoading(false)
			}
		}
	}

	let render

	if (URLSearchParams.get('email') && URLSearchParams.get('token')) {
		render = (
			<>
				<p className='text-gray-500 mb-6 text-[16px] text-center'>
					Please verify your account.
				</p>

				<div className='flex items-center justify-center'>
					<Button loading={loading} handleClick={handleVerification}>
						Verify
					</Button>
				</div>
			</>
		)
	} else {
		render = (
			<>
				<p className='text-gray-500 mb-6 text-[16px] text-center'>
					Please check your email to verify your account.
				</p>

				{!disabled && (
					<div className='flex items-center justify-center'>
						<Button loading={loading} handleClick={handleResend}>
							Resend
						</Button>
					</div>
				)}

				{loading && (
					<div className='flex items-center justify-between'>
						<Loader loading={loading} size={20} />
					</div>
				)}
			</>
		)
	}

	return (
		<div className='min-h-screen bg-secondary flex justify-center items-center'>
			<div className='max-w-md w-full mx-auto p-8 bg-primary shadow-lg rounded-lg'>
				<h2 className='text-2xl font-bold mb-4 text-color text-center'>
					MySocial
				</h2>
				<div>{render}</div>
			</div>
		</div>
	)
}

export default EmailVerificationPage
