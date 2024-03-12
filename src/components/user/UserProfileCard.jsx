const UserProfileCard = () => {
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

				<p className='font-bold'>Name</p>
			</div>
		</div>
	)
}

export default UserProfileCard
