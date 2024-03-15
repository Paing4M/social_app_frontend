import React from 'react'

const AuthInput = ({ name, placeholder, type, label, error, register }) => {
	return (
		<div className='flex flex-col mb-2'>
			<label htmlFor='email' className='text-[15px] mb-1 inline-block'>
				{label}
			</label>
			<input
				{...register(name)}
				name={name}
				className='border-color border rounded-lg px-2 py-1 outline-none '
				type={type}
				placeholder={placeholder}
			/>
			{error && <p className='text-sm text-red-400'>{error}</p>}
		</div>
	)
}

export default AuthInput
