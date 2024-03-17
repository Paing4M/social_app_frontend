import { useSelector } from 'react-redux'

const UserProfileCard = () => {
	const { user } = useSelector((state) => state.user)

	return (
		<div className='bg-primary rounded-md p-4 h-fit'>
			<div className='flex items-center gap-3'>
				<div className='bg-blue-200 p-2 rounded-full'>
					<img
						src='/src/assets/images/default-profile.png'
						className='w-10'
						alt=''
					/>
				</div>

				<p className='font-bold'>{user?.name}</p>
			</div>
		</div>
	)
}

export default UserProfileCard
