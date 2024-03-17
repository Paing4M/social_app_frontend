import { Link } from 'react-router-dom'
import AuthInput from '../inputs/AuthInput'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { setLocatStorage } from '../../helpers/localStorage'
import { loginService } from '../../services/auth'
import Loader from '../Loader'
import { useDispatch } from 'react-redux'
import { setUser } from '../../slices/userSlice'

const LoginForm = () => {
	const {
		register,
		handleSubmit,
		setError,
		formState: { errors, isSubmitting },
	} = useForm()
	const navigate = useNavigate()
	const dispatch = useDispatch()

	const handleLogin = async (data) => {
		try {
			const res = await loginService(data)
			console.log(res)
			if (res) {
				dispatch(setUser(res.user))
				setLocatStorage('token', res.token)
				navigate('/')
			}
		} catch (error) {
			// console.log(error)
			// set error message
			if (error.response?.status === 422 || error.response?.status == 401) {
				Object.keys(error?.response?.data?.errors).forEach((key) => {
					setError(key, {
						message: error.response.data.errors[key][0],
					})
				})
			}
		}
	}

	return (
		<form onSubmit={handleSubmit(handleLogin)}>
			{errors?.incorrect && (
				<>
					<input type='text' hidden {...register('incorrect')} />
					<p className='text-sm text-red-400'>
						{errors?.incorrect?.message}
					</p>
				</>
			)}

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

			<div className='flex items-center justify-between'>
				<Link to={'/register'} className='font-semibold text-sm text-color'>
					Don't have an account?
				</Link>

				<Link
					to={'/forgot-password'}
					className='font-semibold text-sm text-color'
				>
					Forgot password?
				</Link>
			</div>

			<button
				type='submit'
				disabled={isSubmitting}
				className={`text-white bg-color flex items-center justify-center gap-2 py-2 w-full mt-4 rounded-lg ${
					isSubmitting && 'opacity-85'
				}`}
			>
				{isSubmitting ? (
					<Loader color={'#fff'} size={20} loadingState={isSubmitting} />
				) : (
					'Login'
				)}
			</button>
		</form>
	)
}

export default LoginForm
