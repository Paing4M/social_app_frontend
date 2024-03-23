import { Outlet } from 'react-router-dom'
import Navbar from '../components/nav/Navbar'

const UserMainLayout = ({ children }) => {
	return (
		<div>
			<Navbar />
			<div className='p-5 min-h-[calc(100vh-60px)] max-w-[1300px] mx-auto'>
				<Outlet />
			</div>
		</div>
	)
}

export default UserMainLayout
