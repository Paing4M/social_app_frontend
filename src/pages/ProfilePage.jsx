import { useSelector } from 'react-redux'
import ProfilePageComponent from '../components/pages/ProfilePageComponent'
import UserLayout from '../layouts/UserLayout'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { alert } from '../helpers/alert'

const ProfilePage = () => {
	const { user } = useSelector((state) => state.user)
	const navigate = useNavigate()

	useEffect(() => {
		if (!user) {
			navigate('/login')
			alert('warning', 'Please login first.')
		}
	}, [user])

	return (
		<UserLayout>
			<div className='col-span-4  md:col-span-3 lg:col-span-3 h-fit'>
				<ProfilePageComponent />
			</div>
		</UserLayout>
	)
}

export default ProfilePage
