import { useForm } from 'react-hook-form'
import { changePasswordService } from '../../services/profile'
import Loader from '../Loader'
import { alert } from '../../helpers/alert'

const Input = ({ name, label, placeholder, error, register }) => (
	<div className='flex flex-col mb-2'>
		<label className='inline-block text-sm' htmlFor='name'>
			{label}
		</label>
		<input
			{...register(name)}
			id={name}
			type='password'
			placeholder={placeholder}
			className='w-full max-w-[450px] py-1 px-2 rounded-md border border-color outline-none'
		/>
		{error && <p className='text-sm text-red-400'>{error}</p>}
	</div>
)

const UserChangePassword = () => {
	const {
		register,
		handleSubmit,
		setError,
		reset,
		formState: { errors, isSubmitting },
	} = useForm()

	const handleChangePassword = async (data) => {
		try {
			const res = await changePasswordService(data)
			console.log(res)
			if (res?.status == 200) {
				alert('success', res?.message)
				reset()
			}
		} catch (error) {
			if (error.response?.status === 422 || error.response?.status === 401) {
				Object.keys(error?.response?.data?.errors).forEach((key) => {
					setError(key, {
						message: error.response.data.errors[key][0],
					})
				})
			}
		}
	}

	console.log(errors)

	return (
		<div className='p-4 rounded-md bg-primary'>
			<div className='flex flex-col'>
				<h2 className='text-lf font-bold'>Password</h2>
				<p className='leading-tight text-sm text-gray-500'>
					Change your password here.
				</p>
			</div>

			<form onSubmit={handleSubmit(handleChangePassword)}>
				<div className='mt-6'>
					<input type='text' hidden {...register('incorrect')} />
					{errors?.incorrect && (
						<p className='text-sm text-red-400'>
							{errors?.incorrect?.message}
						</p>
					)}

					<Input
						error={errors?.currentPassword?.message}
						register={register}
						label={'Current Password'}
						name='currentPassword'
						placeholder={'Your current password'}
					/>

					<Input
						error={errors?.newPassword?.message}
						register={register}
						label={'New Password'}
						name='newPassword'
						placeholder={'Your new password'}
					/>

					<Input
						error={errors?.confirmPassword?.message}
						register={register}
						label={'Confirm New Password'}
						name='confirmPassword'
						placeholder={'Confirm your new password'}
					/>
				</div>
				<button
					disabled={isSubmitting}
					className='mt-1 bg-color min-w-28 px-4 py-1 text-white rounded'
				>
					{isSubmitting ? (
						<Loader
							color={'#fff'}
							size={20}
							loadingState={isSubmitting}
							auto
						/>
					) : (
						'Save'
					)}
				</button>
			</form>
		</div>
	)
}

export default UserChangePassword
