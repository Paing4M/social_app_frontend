import { useState } from 'react'
import { useSelector } from 'react-redux'
import { updateProfileService } from '../../services/profile'
import { useDispatch } from 'react-redux'
import { setUser } from '../../slices/userSlice'
import { alert } from '../../helpers/alert'
import Loader from '../Loader'

const UserProfileChangeInput = () => {
	const { user } = useSelector((state) => state.user)
	const [img, setImg] = useState(null)
	const [loading, setLoading] = useState(false)
	const dispatch = useDispatch()

	const handleSubmit = async (e) => {
		e.preventDefault()
		if (img) {
			setLoading(true)
			try {
				let data = { image: img }
				const res = await updateProfileService(data)
				console.log(res)
				if (res?.status == 200) {
					setLoading(false)
					dispatch(setUser(res?.user))
					alert('success', res?.message)
				}
			} catch (error) {
				console.log(error)
			}
		}
	}

	return (
		<form onSubmit={handleSubmit} encType='multipart/form-data'>
			<div className='mt-6'>
				<div className='flex items-center gap-3'>
					{img ? (
						<img
							className='w-[150px] rounded-full h-[150px] object-cover'
							src={URL.createObjectURL(img)}
							alt=''
						/>
					) : (
						<img
							className='w-[150px] rounded-full h-[150px] object-cover'
							src={
								user?.profile
									? user?.profile
									: '/src/assets/images/default-profile.png'
							}
							alt=''
						/>
					)}

					<div>
						<label htmlFor='image'>
							<p className='bg-gray-500 cursor-pointer select-none px-2 text-white rounded'>
								change
							</p>
							<input
								onChange={(e) => setImg(e.target.files[0])}
								id='image'
								type='file'
								hidden
							/>
						</label>
					</div>
				</div>
			</div>

			<button
				disabled={loading}
				className='mt-6 bg-color min-w-28 px-4 py-1 text-white rounded'
			>
				{loading ? (
					<Loader color={'#fff'} size={20} loadingState={loading} auto />
				) : (
					'Save'
				)}
			</button>
		</form>
	)
}

export default UserProfileChangeInput
