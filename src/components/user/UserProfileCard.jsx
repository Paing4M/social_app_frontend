import { useSelector } from 'react-redux'

const UserProfileCard = () => {
	const { user } = useSelector((state) => state.user)

	return (
		<div className='bg-primary rounded-md p-4 h-fit'>
			<div className='flex items-center gap-3'>
				<div className='bg-blue-100 p-2 rounded-full w-14  h-14'>
					<img
						src={
							user?.profile
								? user?.profile
								: '/src/assets/images/default-profile.png'
						}
						className='w-10 h-10 rounded-full object-cover'
						alt=''
					/>
				</div>

				<div>
					<p className='font-bold'>{user?.name}</p>
				</div>
			</div>
		</div>
	)
}

export default UserProfileCard
