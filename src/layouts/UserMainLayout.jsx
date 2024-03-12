import Navbar from '../components/nav/Navbar'

const UserMainLayout = ({ children }) => {
	return (
		<div>
			<Navbar />
			<div className='p-5 min-h-[calc(100vh-60px)] max-w-[1300px] mx-auto'>
				{children}
			</div>
		</div>
	)
}

export default UserMainLayout
