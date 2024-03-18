import { useForm } from 'react-hook-form'
import InputBox from '../inputs/InputBox'
import Loader from '../Loader'
import { resetPasswordService } from '../../services/auth'
import { alert } from '../../helpers/alert'
import { useNavigate } from 'react-router-dom'

const PasswordResetForm = ({ email }) => {
	const {
		register,
		handleSubmit,
		setError,
		formState: { errors, isSubmitting },
	} = useForm()
	const navigate = useNavigate()

	const resetPassword = async (data) => {
		try {
			const res = await resetPasswordService(data)
			console.log(res)
			if (res.status == 200) {
				navigate('/login')
				alert('success', 'Please login with your new password.')
			}
		} catch (error) {
			console.log(error)
			if (error.response?.status === 422) {
				Object.keys(error?.response?.data?.errors).forEach((key) => {
					setError(key, {
						message: error.response.data.errors[key][0],
					})
				})
			}

			if (
				error?.response.status === 404 &&
				error?.response?.data?.status == 404
			) {
				alert('error', error?.response?.data?.message)
			}
		}
	}

	console.log(errors)

	return (
		<form onSubmit={handleSubmit(resetPassword)}>
			<div className='mt-3'>
				<input
					type='text'
					hidden
					defaultValue={email}
					{...register('email')}
				/>
				<InputBox
					error={errors?.new_password?.message}
					type={'password'}
					name={'new_password'}
					label={'New password'}
					placeholder={'Your new password'}
					register={register}
				/>
				<InputBox
					error={errors?.confirm_password?.message}
					type={'password'}
					name={'confirm_password'}
					label={'Confirm password'}
					placeholder={'Confirm your password'}
					register={register}
				/>
				<button
					disabled={isSubmitting}
					type='submit'
					className={`mt-2 flex items-center justify-center gap-3 w-full border-none outline-none bg-color text-white rounded-md py-1 ${
						isSubmitting && 'opacity-75'
					}`}
				>
					{isSubmitting && (
						<Loader
							color={'#fff'}
							size={20}
							loadingState={isSubmitting}
						/>
					)}
					Submit
				</button>
			</div>
		</form>
	)
}

export default PasswordResetForm
