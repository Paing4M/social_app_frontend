import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import MobileNav from './MobileNav'
import { faX } from '@fortawesome/free-solid-svg-icons'
import { useSelector } from 'react-redux'
import { logoutService } from '../../services/auth'
import { useDispatch } from 'react-redux'
import { removeUser } from '../../slices/userSlice'

const Navbar = () => {
	const [navOpen, setNavOpen] = useState(false)
	const user = useSelector((state) => state.user.user)
	const dispatch = useDispatch()

	const logout = () => {
		logoutService().then((res) => {
			if (res.status == 200) {
				dispatch(removeUser())
			}
		})
	}

	return (
		<div className='bg-primary sticky top-0  shadow-md'>
			<div className='flex top-0 mx-auto max-w-[1300px] items-center h-[60px] border-b-2 md:border-0 justify-between px-5 relative '>
				<h1 className='text-xl font-bold'>MySocial</h1>

				{/* user info */}
				{user ? (
					<div className='hidden md:block dropdown dropdown-end dropdown-hover'>
						<div
							tabIndex={0}
							role='button'
							className='cursor-pointer flex items-center   bg-color overflow-hidden text-white rounded-md gap-3 pr-3'
						>
							<img
								src={
									user?.profile
										? user?.profile
										: '/src/assets/images/default-profile.png'
								}
								className='w-[30px] object-cover h-[30px] bg-gray-300'
								alt=''
							/>

							<span>{user?.name}</span>
							<FontAwesomeIcon icon={faChevronDown} />
						</div>

						<ul
							tabIndex={0}
							className='dropdown-content z-[1] menu p-2 shadow  rounded-md w-52 bg-white border border-gray-200 '
						>
							<li className='hover:bg-blue-200 rounded-md'>
								<button onClick={logout}>Logout</button>
							</li>
						</ul>
					</div>
				) : (
					<Link
						to={'/login'}
						className='cursor-pointer hidden md:block flex items-center px-8 py-1 bg-color rounded-md border-none outline-none text-[16px] font-semibold text-white'
					>
						Login
					</Link>
				)}

				{/* menu */}
				<button
					onClick={() => setNavOpen((prev) => !prev)}
					className='bock md:hidden border-none outline-none cursor-pointer'
				>
					<FontAwesomeIcon
						icon={navOpen ? faX : faBars}
						className='text-2xl'
					/>
				</button>
			</div>

			{/* mobile nav */}
			<MobileNav navOpen={navOpen} setNavOpen={setNavOpen} />
		</div>
	)
}

export default Navbar
