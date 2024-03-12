import React from 'react'
import UserMenu from '../user/UserMenu'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

const MobileNav = ({ navOpen, setNavOpen }) => {
	console.log(navOpen)
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
					<button className='text-lg bg-red-400 text-white w-full py-2 rounded'>
						Logout
					</button>
				</div>
			</div>
		</div>
	)
}

export default MobileNav
