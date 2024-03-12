import UserPostCard from './UserPostCard'

const UserPostsContainer = () => {
	return (
		<div className='flex flex-col gap-y-3'>
			<UserPostCard />
			<UserPostCard />
			<UserPostCard />
		</div>
	)
}

export default UserPostsContainer
