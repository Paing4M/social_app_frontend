import { useDispatch } from 'react-redux'
import UserMenu from '../components/user/UserMenu'
import UserProfileCard from '../components/user/UserProfileCard'
import { logoutService } from '../services/auth'
import { removeUser } from '../slices/userSlice'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const UserLayout = ({ children }) => {
	const { user } = useSelector((state) => state.user)
	const dispatch = useDispatch()

	const logout = () => {
		logoutService().then((res) => {
			if (res.status == 200) {
				dispatch(removeUser())
			}
		})
	}
	return (
		<div className='grid grid-cols-4 gap-4'>
			<div className='hidden md:flex lg:col-span-1 flex-col gap-4 h-fit '>
				<UserProfileCard />
				<UserMenu />
				{user ? (
					<div>
						<button
							onClick={logout}
							className='outline-none border-none bg-red-400 py-2 px-4 w-full text-white rounded-full'
						>
							Logout
						</button>
					</div>
				) : (
					<div>
						<Link
							to={'/login'}
							onClick={logout}
							className='outline-none border-none bg-color py-2 px-4 w-full text-white inline-block text-center rounded-full'
						>
							Login
						</Link>
					</div>
				)}
			</div>

			{children}
		</div>
	)
}

export default UserLayout
