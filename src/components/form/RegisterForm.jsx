import { Link } from 'react-router-dom'
import AuthInput from '../inputs/AuthInput'
import { registerService } from '../../services/auth'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { setLocatStorage } from '../../helpers/localStorage'

const RegisterForm = () => {
	const {
		register,
		handleSubmit,
		setError,
		formState: { errors, isSubmitting },
	} = useForm()
	const navigate = useNavigate()

	const handleRegister = async (data) => {
		try {
			const res = await registerService(data)
			// console.log(res)
			if (res.status == 201) {
				setLocatStorage('token', res.token)
				navigate('/email-verification?email=' + res.user?.email)
			}
		} catch (error) {
			// console.log(error)
			if (error.response?.status === 422) {
				Object.keys(error?.response?.data?.errors).forEach((key) => {
					setError(key, {
						message: error.response.data.errors[key][0],
					})
				})
			}
		}
	}

	return (
		<form onSubmit={handleSubmit(handleRegister)}>
			<AuthInput
				register={register}
				label={'Name'}
				name={'name'}
				placeholder={'Your name'}
				type={'text'}
				error={errors?.name?.message}
			/>

			<AuthInput
				register={register}
				label={'Email address'}
				name={'email'}
				placeholder={'Your email address'}
				type={'text'}
				error={errors?.email?.message}
			/>

			<AuthInput
				register={register}
				label={'Password'}
				name={'password'}
				placeholder={'Your password'}
				type={'password'}
				error={errors?.password?.message}
			/>

			<AuthInput
				register={register}
				label={'Confirm password'}
				name={'confirm_password'}
				placeholder={'Repeat your password'}
				type={'password'}
				error={errors?.confirm_password?.message}
			/>

			<div className='flex items-center justify-between'>
				<p className='leading-tight text-sm'>
					Already have an account?{' '}
					<Link to={'/login'} className='font-semibold  text-color'>
						Login here.
					</Link>
				</p>
			</div>

			<button
				disabled={isSubmitting}
				className={`text-white bg-color py-2 w-full mt-4 rounded-lg  ${
					isSubmitting && 'opacity-60'
				}`}
			>
				Login
			</button>
		</form>
	)
}

export default RegisterForm
