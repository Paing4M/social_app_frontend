import { faImage } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useForm } from 'react-hook-form'
import { createPostService } from '../../services/post'
import { alert } from '../../helpers/alert'
import Loader from '../Loader'
import { useSelector } from 'react-redux'

const UserPostInput = ({ setSuccess }) => {
	const {
		register,
		handleSubmit,
		setError,
		watch,
		reset,
		formState: { errors, isSubmitting },
	} = useForm()
	const previewImg = watch('image')
	const { user } = useSelector((state) => state.user)

	const handleCreatePost = async (data) => {
		try {
			const res = await createPostService(data)
			// console.log(res)
			if (res.status == 200) {
				alert('success', res?.message)
				setSuccess(true)
				reset()
			}
		} catch (error) {
			// console.log(error)
			if (error.response?.status === 422) {
				makeErr(error?.response?.data?.errors)
			}
		}
	}

	const makeErr = (errors) => {
		Object.keys(errors).forEach((key) => {
			setError(key, {
				message: errors[key][0],
			})
		})
	}

	console.log(errors)

	return (
		<div className='p-4 rounded-lg bg-primary'>
			<form onSubmit={handleSubmit(handleCreatePost)}>
				<div className='flex gap-3 items-center'>
					<img
						src={
							user?.profile
								? user?.profile
								: '/src/assets/images/default-profile.png'
						}
						alt=''
						className='w-10 h-10 object-cover rounded-full'
					/>

					<div className='flex-1'>
						<input
							type='text'
							{...register('desc')}
							className='border-none bg-gray-200 px-4 rounded-full outline-none w-full  py-1'
							placeholder='What is in your mind?'
						/>
					</div>

					<div>
						<label
							htmlFor='image'
							className='border-none outline-none inline-block cursor-pointer'
						>
							<FontAwesomeIcon
								icon={faImage}
								className='text-xl text-green-400'
							/>
							<input
								type='file'
								hidden
								{...register('image')}
								id='image'
								name='image'
							/>
						</label>
					</div>

					<button
						disabled={isSubmitting}
						className='bg-color rounded-full px-4 cursor-pointer text-white py-1'
					>
						{isSubmitting ? (
							<Loader size={20} color={'#fff'} auto />
						) : (
							'Post'
						)}
					</button>
				</div>

				{errors?.desc && (
					<p className='text-sm text-center text-red-400'>
						{errors?.desc?.message}
					</p>
				)}
			</form>

			{/* img preview */}
			{previewImg && previewImg?.length > 0 && (
				<div className='w-full h-[350px] mt-3 rounded-md overflow-hidden'>
					<img
						src={URL.createObjectURL(previewImg[0])}
						className='w-full h-full object-cover'
						alt=''
					/>
				</div>
			)}
			{errors?.image && (
				<p className='text-sm text-center text-red-400'>
					{errors?.image[0]?.message}
				</p>
			)}
		</div>
	)
}

export default UserPostInput
