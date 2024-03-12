import React from 'react'

const AuthInput = ({ name, value, placeholder, type, label }) => {
	return (
		<div className='flex flex-col mb-3'>
			<label htmlFor='email' className='text-[15px] mb-1 inline-block'>
				{label}
			</label>
			<input
				name={name}
				className='border-color border rounded-lg px-2 py-1 outline-none '
				type={type}
				placeholder={placeholder}
			/>
		</div>
	)
}

export default AuthInput
