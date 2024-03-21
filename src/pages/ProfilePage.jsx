import ProfilePageComponent from '../components/pages/ProfilePageComponent'
import UserLayout from '../layouts/UserLayout'

const ProfilePage = () => {
	return (
		<UserLayout>
			<div className='col-span-4  md:col-span-3 lg:col-span-3 h-fit'>
				<ProfilePageComponent />
			</div>
		</UserLayout>
	)
}

export default ProfilePage
