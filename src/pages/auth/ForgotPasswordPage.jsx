import React from 'react'
import { useState } from 'react'
import { sendResetPasswordLinkService } from '../../services/auth'
import { alert } from '../../helpers/alert'
import Loader from '../../components/Loader'
import { useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import PasswordResetForm from '../../components/form/PasswordResetForm'

const ForgotPasswordPage = () => {
	const [email, setEmail] = useState('')
	const [errs, setErrs] = useState({})
	const [loading, setLoading] = useState(false)
	const [success, setSuccess] = useState(false)
	const [URLSearchParams] = useSearchParams()
	const [token, setToken] = useState(null)

	useEffect(() => {
		if (success) {
			const timer = setTimeout(() => {
				setSuccess(false)
			}, 5000)
			return () => clearTimeout(timer)
		}
	}, [success])

	useEffect(() => {
		if (URLSearchParams.get('email') && URLSearchParams.get('token')) {
			setEmail(URLSearchParams.get('email'))
			setToken(URLSearchParams.get('token'))
		}
	}, [URLSearchParams])

	const send = async () => {
		setErrs({})
		setLoading(true)
		setSuccess(false)
		try {
			const res = await sendResetPasswordLinkService({ email })
			if (res.status == 200) {
				setSuccess(true)
				alert('success', res?.message)
			}
		} catch (error) {
			console.log(error)
			if (error?.response?.status == 422 || error?.response?.status == 404) {
				setErrs(error?.response?.data?.errors)
			}
		}
		setLoading(false)
	}

	return (
		<div className='min-h-screen bg-secondary flex items-center justify-center '>
			<div className='p-4 bg-white rounded-lg w-[100%] max-w-[450px] shadow'>
				<h2 className='text-center text-3xl text-color font-semibold mb-1'>
					MySocial
				</h2>
				<div>
					{email && token ? (
						<PasswordResetForm email={email} />
					) : (
						<>
							<p className='mb-3 text-[15px] w-[80%]  mx-auto text-gray-500 text-center'>
								{success
									? 'Password reset link is sended. Please check your mail.'
									: "Enter your email. We'll email you to reset your password."}
							</p>
							<div className='flex flex-col'>
								{errs?.notFound && (
									<p className='text-sm text-red-500'>
										{errs?.notFound}
									</p>
								)}

								<label htmlFor='email' className='text-sm text-color'>
									Email
								</label>
								<input
									onChange={(e) => setEmail(e.target.value)}
									placeholder='Enter your email address'
									id='email'
									name='email'
									type='text'
									className='px-2 py-1 border border-color rounded outline-none w-full'
								/>
								{errs?.email && (
									<p className='text-sm text-red-500'>
										{errs?.email[0]}
									</p>
								)}
								<button
									disabled={loading}
									onClick={send}
									className={`mt-2 text-white rounded-md bg-color px-2 py-2 cursor-pointer ${
										loading && 'opacity-75'
									}`}
								>
									{loading ? (
										<Loader
											color={'#fff'}
											size={20}
											loadingState={loading}
										/>
									) : (
										'Submit'
									)}
								</button>
							</div>
						</>
					)}
				</div>
			</div>
		</div>
	)
}

export default ForgotPasswordPage
