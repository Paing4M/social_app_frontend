import React from 'react'
import UserProfileChangeInput from '../inputs/UserProfileChangeInput'

const UserProfile = () => {
	return (
		<div className='bg-primary rounded-md p-4 w-full '>
			<h2 className='text-lf font-bold'>Profile</h2>
			<p className='leading-tight text-sm text-gray-500'>
				Change your profile here.
			</p>
			<UserProfileChangeInput />
		</div>
	)
}

export default UserProfile
