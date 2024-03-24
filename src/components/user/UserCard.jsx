import { useState } from 'react'
import DeleteModal from '../modal/DeleteModal'
import { userDeleteService, userTypeService } from '../../services/user'
import { alert } from '../../helpers/alert'
import { useDispatch } from 'react-redux'
import { removeUser } from '../../slices/userSlice'

const UserCard = ({ user, setSuccess }) => {
	const [isOpen, setIsOpen] = useState(false)
	const [loading, setLoading] = useState(false)
	const dispatch = useDispatch()

	function closeModal() {
		setIsOpen(false)
	}

	function openModal() {
		setIsOpen(true)
	}

	const handleDelete = async () => {
		try {
			setLoading(true)
			const res = await userDeleteService(user?.id)
			console.log(res)
			if (res.status == 200) {
				setSuccess(true)
				alert('success', res?.message)
				setLoading(false)
				closeModal()
			}

			if (res.status == 404) {
				closeModal()
				dispatch(removeUser())
			}
		} catch (error) {
			console.log(error)
		}
	}

	const handleTypeChange = async (e) => {
		const type = e.target.value
		const res = await userTypeService({ type, id: user?.id })
		if (res.status == 200) {
			setSuccess(true)
			alert('success', res.message)
		}
	}

	const handleSuccess = (res) => {
		alert('success', res?.message)
		setLoading(false)
		closeModal()
	}

	return (
		<div className='bg-primary p-4 rounded-md'>
			<div className='flex items-center justify-center flex-col'>
				<img
					className='w-[150px] h-[150px] rounded-full object-cover'
					src={user?.profile || '/src/assets/images/default-profile.png'}
					alt=''
				/>
			</div>
			<div className='mt-3'>
				<div className='flex items-start justify-center flex-col'>
					<h4 className='font-bold text-color'>Name: {user?.name}</h4>
					<h6 className='text-color'>Email: {user?.email}</h6>
					<div className='flex items-center text-color '>
						<label htmlFor='userType' className='mr-2'>
							Type:
						</label>
						<select
							id='userType'
							className='border outline-none border-color rounded px-1'
							defaultValue={user?.type}
							onChange={handleTypeChange}
						>
							<option value='1'>Admin</option>
							<option value='0'>User</option>
						</select>
					</div>
				</div>
			</div>
			<div className='flex justify-end mt-4'>
				<button
					onClick={openModal}
					className='bg-red-400 hover:bg-red-500 text-white font-bold py-1 px-4 rounded'
				>
					Delete
				</button>
			</div>

			{/* delete modal */}
			<DeleteModal
				loading={loading}
				handleDelete={handleDelete}
				isOpen={isOpen}
				closeModal={closeModal}
			/>
		</div>
	)
}

export default UserCard

{
	/* <h4 className='font-bold text-xl text-color'>
							{user?.name}
							{user?.id == currentUser.id && (
								<span className='text-sm inline-block ml-2 text-black'>
									(your account)
								</span>
							)}
						</h4>
						<h6 className='text-color'>{user?.email}</h6>
						<p className='text-color'>
							{user?.type == 1 ? 'admin' : 'user'}
						</p> */
}
