import { useEffect } from 'react'
import { useState } from 'react'
import { userService } from '../../services/user'
import Loader from '../Loader'
import { BeatLoader } from 'react-spinners'
import UserCard from '../user/UserCard'
import Pagination from '../Pagination'
import { useSelector } from 'react-redux'

const UserManagementComponent = () => {
	const { user } = useSelector((state) => state.user)
	const [users, setUsers] = useState(null)
	const [loading, setLoading] = useState(false)
	const [search, setSearch] = useState('')
	const [perPage, setPerPage] = useState(6)
	const [meta, setMeta] = useState(null)
	const [page, setPage] = useState(1)
	const [type, setType] = useState('All')
	const [success, setSuccess] = useState(false)

	const totalPages = Math.ceil(meta?.total / meta?.per_page)
	const handlePageChange = (data) => {
		const currentPage = data.selected + 1
		setPage(currentPage)
	}

	useEffect(() => {
		getUsers()
	}, [perPage, page, type, success])

	const getUsers = async () => {
		try {
			setLoading(true)
			setSuccess(false)
			const res = await userService(page, perPage, type)
			if (res) {
				setLoading(false)
				setUsers(res.data)
				setMeta(res.meta)
			}
		} catch (error) {
			console.log(error)
		}
	}

	return (
		<div>
			<div className='flex flex-col-reverse gap-3 sm:flex-row items-center justify-between'>
				<div className='flex  items-center gap-5'>
					<select
						onChange={(e) => setPerPage(e.target.value)}
						id='perPage'
						className='bg-white border border-gray-300  text-sm rounded-md outline-none focus:border-color block w-fit p-2'
					>
						<option defaultValue='6'>6</option>
						<option value='10'>10</option>
						<option value='20'>20</option>
						<option value='30'>30</option>
					</select>

					<select
						onChange={(e) => setType(e.target.value)}
						id='perPage'
						className='bg-white border border-gray-300  text-sm rounded-md outline-none focus:border-color block w-fit p-2'
					>
						<option defaultValue=''>All</option>
						<option value='1'>Admin</option>
						<option value='0'>User</option>
					</select>
				</div>

				<input
					onChange={(e) => setSearch(e.target.value)}
					type='text'
					placeholder='Search user .....'
					className='w-full outline-none px-2.5 py-1 sm:w-[300px] rounded-md bg-white'
				/>
			</div>

			<div className='mt-6'>
				<div className='max-w-[380px] mb-4 w-full mx-auto border border-color rounded-md'>
					<UserCard user={user} />
				</div>

				{loading && (
					<div className='flex items-center justify-center'>
						<Loader
							LoadindStyle={BeatLoader}
							loadingState={loading}
							size={15}
						/>
					</div>
				)}

				{!loading && users?.length > 0 && (
					<div className='grid grid-cols-1 md:grid-cols-2  gap-4'>
						{users
							?.filter((user) => user?.name.includes(search))
							.map((user) => (
								<div key={user.id}>
									<UserCard setSuccess={setSuccess} user={user} />
								</div>
							))}
					</div>
				)}
				{!loading && users?.length == 0 && (
					<p className='m-3 text-center text-color'>No user found.</p>
				)}
			</div>

			{/* pagination */}
			{totalPages > 1 && (
				<Pagination
					handlePageChange={handlePageChange}
					totalPages={totalPages}
				/>
			)}
		</div>
	)
}

export default UserManagementComponent
