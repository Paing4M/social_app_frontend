import React from 'react'
import UserMenu from '../user/UserMenu'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const MobileNav = ({ navOpen, setNavOpen }) => {
	const { user } = useSelector((state) => state.user)

	return (
		<div
			className={`fixed top-[60px] z-[1000]  ${
				navOpen ? 'right-0' : ' right-[-100%]'
			} transition-all duration-100 ease-linear w-full bg-primary h-screen  block md:hidden`}
		>
			<div className='p-4'>
				<div className='border border-color w-full py-4 px-6 mb-4 items-center rounded-lg font-semibold'>
					<FontAwesomeIcon
						className='text-color text-lg'
						icon={faMagnifyingGlass}
					/>
					<input
						className='flex-1 ml-2 bg-transparent outline-none border-none'
						type='text'
						placeholder='Search post ... '
					/>
				</div>

				<UserMenu setNavOpen={setNavOpen} />
				<hr />

				<div className='pt-4 '>
					{user ? (
						<button className='text-lg bg-red-400 text-white w-full py-2 rounded'>
							Logout
						</button>
					) : (
						<Link
							to={'/login'}
							className='inline-block text-center text-lg bg-color text-white w-full py-2 rounded'
						>
							Login
						</Link>
					)}
				</div>
			</div>
		</div>
	)
}

export default MobileNav
