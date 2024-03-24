import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faGear } from '@fortawesome/free-solid-svg-icons'
import { faList } from '@fortawesome/free-solid-svg-icons'
import { faHouse } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'

const menuLists = [
	{
		name: 'Home',
		link: '/',
		icon: <FontAwesomeIcon icon={faHouse} />,
	},

	{
		name: 'Categories',
		link: '/categories',
		icon: <FontAwesomeIcon icon={faList} />,
	},

	{
		name: 'User Posts',
		link: '/posts',
		icon: <FontAwesomeIcon icon={faEnvelope} />,
	},

	{
		name: 'Profile',
		link: '/profile',
		icon: <FontAwesomeIcon icon={faUser} />,
	},
]

const UserMenu = ({ setNavOpen }) => {
	const { user } = useSelector((state) => state.user)

	return (
		<div className='bg-primary rounded-md'>
			<ul className='flex flex-col gap-y-4'>
				{menuLists.map((item) => (
					<li key={item.name}>
						<NavLink
							onClick={() => setNavOpen(false)}
							to={item.link}
							className={({ isActive }) =>
								`flex w-full items-center rounded-md py-4 px-6 gap-3 ${
									isActive
										? 'bg-secondary text-color  md:rounded-r-none border-l-4 border-color'
										: ''
								}`
							}
						>
							{item.icon}
							<p className='font-semibold'>{item.name}</p>
						</NavLink>
					</li>
				))}

				<li>
					{user?.type == 1 && (
						<NavLink
							onClick={() => setNavOpen(false)}
							to={'/user-manage'}
							className={({ isActive }) =>
								`flex w-full items-center rounded-md py-4 px-6 gap-3 ${
									isActive
										? 'bg-secondary text-color  md:rounded-r-none border-l-4 border-color'
										: ''
								}`
							}
						>
							<FontAwesomeIcon icon={faGear} />
							<p className='font-semibold'>User Manage</p>
						</NavLink>
					)}
				</li>
			</ul>
		</div>
	)
}

export default UserMenu
