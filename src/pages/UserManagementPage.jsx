import { useSelector } from 'react-redux'
import UserManagementComponent from '../components/manage/UserManagementComponent'
import UserLayout from '../layouts/UserLayout'
import { useEffect } from 'react'
import { alert } from '../helpers/alert'
import { useNavigate } from 'react-router-dom'

const UserManagementPage = () => {
	const { user } = useSelector((state) => state.user)
	const navigate = useNavigate()

	useEffect(() => {
		if (!user) {
			alert('warning', 'Please login first.')
			navigate('/login')
		}

		if (user && user?.type == 0) {
			alert('warning', 'You cannot access this page.')
			navigate('/')
		}
	}, [user])

	return (
		<UserLayout>
			<div className='col-span-4  md:col-span-3 lg:col-span-3 h-fit'>
				<div>
					<UserManagementComponent />
				</div>
			</div>
		</UserLayout>
	)
}

export default UserManagementPage
