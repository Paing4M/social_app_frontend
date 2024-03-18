import { faImage } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'

const UserPostInput = () => {
	const [preview, setPreview] = useState(null)

	const handleImg = (e) => {
		let img = e.target.files[0]
		if (img) {
			let url = URL.createObjectURL(img)
			setPreview(url)
		}
	}

	return (
		<div className='p-4 rounded-lg bg-primary'>
			<div className='flex gap-3 items-center'>
				<img
					src='/src/assets/images/default-profile.png'
					alt=''
					className='w-10 h-10 object-cover rounded-full'
				/>

				<input
					type='text'
					className='border-none bg-gray-200 px-4 rounded-full outline-none flex-1 py-1'
					placeholder='What is in your mind?'
				/>

				<label
					htmlFor='image'
					className='border-none outline-none inline-block cursor-pointer'
				>
					<FontAwesomeIcon
						icon={faImage}
						className='text-xl text-green-400'
					/>
					<input
						onChange={handleImg}
						type='file'
						hidden
						id='image'
						name='image'
					/>
				</label>

				<button className='bg-color rounded-full px-4 cursor-pointer text-white py-1'>
					post
				</button>
			</div>

			{/* img preview */}
			{preview && (
				<div className='w-full h-[350px] mt-3 rounded-md overflow-hidden'>
					<img
						src={preview}
						className='w-full h-full object-cover'
						alt=''
					/>
				</div>
			)}
		</div>
	)
}

export default UserPostInput
