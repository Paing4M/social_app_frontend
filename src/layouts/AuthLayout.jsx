import React from 'react'

const AuthLayout = ({ children }) => {
	return (
		<div className='bg-secondary flex items-center justify-center min-h-screen'>
			<div className='p-6 bg-primary max-w-[450px] w-full rounded-lg shadow'>
				{children}
			</div>
		</div>
	)
}

export default AuthLayout
