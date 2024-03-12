import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faGear } from '@fortawesome/free-solid-svg-icons'
import { faList } from '@fortawesome/free-solid-svg-icons'
import { faHouse } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { NavLink } from 'react-router-dom'

const menuLists = [
	{
		name: 'Home',
		link: '/',
		icon: <FontAwesomeIcon icon={faHouse} />,
	},

	{
		name: 'Posts',
		link: '/posts',
		icon: <FontAwesomeIcon icon={faEnvelope} />,
	},

	{
		name: 'Categories',
		link: '/categories',
		icon: <FontAwesomeIcon icon={faList} />,
	},

	{
		name: 'Profile',
		link: '/categories',
		icon: <FontAwesomeIcon icon={faUser} />,
	},

	{
		name: 'Settings',
		link: '/settings',
		icon: <FontAwesomeIcon icon={faGear} />,
	},
]

const UserMenu = ({ setNavOpen }) => {
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
			</ul>
		</div>
	)
}

export default UserMenu