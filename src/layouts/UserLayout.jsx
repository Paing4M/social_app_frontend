import UserMenu from '../components/user/UserMenu'
import UserProfileCard from '../components/user/UserProfileCard'

const UserLayout = ({ children }) => {
	return (
		<div className='grid grid-cols-4 gap-4'>
			<div className='hidden md:flex lg:col-span-1 flex-col gap-4 h-fit '>
				<UserProfileCard />
				<UserMenu />
				<div>
					<button className='outline-none border-none bg-color py-2 px-4 w-full text-white rounded-full'>
						Create Post
					</button>
				</div>

				<div>
					<button className='outline-none border-none bg-red-400 py-2 px-4 w-full text-white rounded-full'>
						Logout
					</button>
				</div>
			</div>

			{children}
		</div>
	)
}

export default UserLayout
