import InputBox from '../inputs/InputBox'
import { useForm } from 'react-hook-form'
import PostImgInputBox from '../inputs/PostImgInputBox'
import { createPostService, updatePostService } from '../../services/post'
import { alert } from '../../helpers/alert'
import Loader from '../Loader'
import TextBox from '../inputs/TextBox'

const PostCreateForm = ({ closeModal, setSuccess, editPost, loading }) => {
	const {
		register,
		handleSubmit,
		setError,
		watch,
		formState: { errors, isSubmitting },
	} = useForm()
	const previewImg = watch('image')

	const handleCreatePost = async (data) => {
		try {
			const res = await createPostService(data)
			// console.log(res)
			if (res.status == 200) {
				setSuccess(true)
				closeModal()
				alert('success', res?.message)
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

	const handleEditPost = async (data) => {
		try {
			console.log(data)
			const res = await updatePostService(data, editPost?.id)
			console.log(res)
			// console.log(res)
			if (res) {
				setSuccess(true)
				closeModal()
				alert('success', res?.message)
			}
		} catch (error) {
			if (error.response?.status === 422) {
				makeErr(error?.response?.data?.errors)
			}
		}
	}

	return (
		<form
			onSubmit={
				editPost
					? handleSubmit(handleEditPost)
					: handleSubmit(handleCreatePost)
			}
		>
			{loading ? (
				<Loader auto loadingState={loading} size={25} />
			) : (
				<>
					<TextBox
						value={editPost?.desc}
						error={errors?.desc?.message}
						label={'Description'}
						name={'desc'}
						register={register}
						placeholder={'Enter your description'}
					/>

					<InputBox
						value={editPost?.category}
						label={'Category (optional)'}
						name={'category'}
						register={register}
						placeholder={'Enter your category'}
					/>

					<PostImgInputBox
						error={errors?.image && errors?.image[0]?.message}
						image={editPost?.img}
						register={register}
						previewImg={previewImg?.length > 0 && previewImg[0]}
					/>
				</>
			)}

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
						isSubmitting && 'opacity-80 min-w-[100px]'
					}`}
				>
					{isSubmitting ? (
						<Loader
							auto
							color={'#ff'}
							size={20}
							loadingState={isSubmitting}
						/>
					) : editPost ? (
						'Update Post'
					) : (
						'Create Post'
					)}
				</button>
			</div>
		</form>
	)
}

export default PostCreateForm
