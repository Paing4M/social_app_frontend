import { faUpload } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const PostImgInputBox = ({ register, previewImg, image, error }) => {
	return (
		<div className='grid grid-cols-2 gap-3 items-center'>
			<div className=' sm:grid-cols-1'>
				<label htmlFor='image'>
					<div className='flex gap-3 items-center bg-color text-white py-1 px-4 rounded justify-center cursor-pointer'>
						<FontAwesomeIcon icon={faUpload} />
						<p>upload</p>
					</div>
					<input type='file' id='image' hidden {...register('image')} />
				</label>
				{error && <p className='text-sm text-red-400'>{error}</p>}
			</div>

			<div className='grid-cols-1'>
				{previewImg && (
					<img
						src={URL.createObjectURL(previewImg)}
						className='w-full object-cover rounded-md h-[100px]'
					/>
				)}
				{image && !previewImg && (
					<img
						src={image}
						className='w-full object-cover rounded-md h-[100px]'
					/>
				)}
			</div>
		</div>
	)
}

export default PostImgInputBox
