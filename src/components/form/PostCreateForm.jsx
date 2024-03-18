import { useNavigate } from 'react-router-dom'
import InputBox from '../inputs/InputBox'
import { useForm } from 'react-hook-form'
import PostImgInputBox from '../inputs/PostImgInputBox'
import { createPostService } from '../../services/post'
import { alert } from '../../helpers/alert'
import Loader from '../Loader'

const PostCreateForm = ({ closeModal }) => {
	const {
		register,
		handleSubmit,
		setError,
		watch,
		formState: { errors, isSubmitting },
	} = useForm()
	const previewImg = watch('image')

	const createPost = async (data) => {
		try {
			const res = await createPostService(data)
			console.log(res)
			if (res) {
				closeModal()
				alert('success', res?.message)
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
		<form onSubmit={handleSubmit(createPost)}>
			<InputBox
				error={errors?.desc?.message}
				label={'Description'}
				name={'desc'}
				register={register}
				placeholder={'Enter your description'}
			/>

			<InputBox
				label={'Category (optional)'}
				name={'category'}
				register={register}
				placeholder={'Enter your category'}
			/>

			<PostImgInputBox
				register={register}
				previewImg={previewImg?.length > 0 && previewImg[0]}
			/>

			<div className='mt-4 flex items-center justify-between'>
				<button
					type='button'
					className='px-3 rounded py-1 bg-gray-300 '
					onClick={closeModal}
				>
					Cancle
				</button>

				<button
					type='submit'
					className={`px-3 rounded py-1 bg-color text-white ${
						isSubmitting && 'opacity-80'
					}`}
				>
					{isSubmitting ? (
						<Loader color={'#ff'} size={20} loadingState={isSubmitting} />
					) : (
						'Create'
					)}
				</button>
			</div>
		</form>
	)
}

export default PostCreateForm
