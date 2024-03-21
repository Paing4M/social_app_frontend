import UserProfile from '../profile/UserProfile'
import UserChangePassword from '../user/UserChangePassword'

const ProfilePageComponent = () => {
	return (
		<div className='flex flex-col gap-4'>
			<UserProfile />
			<UserChangePassword />
		</div>
	)
}

export default ProfilePageComponent
