import React from 'react'

const TextBox = ({ label, name, value, register, placeholder, error }) => {
	return (
		<div className='flex flex-col mb-2'>
			<label htmlFor={name} className='text-[15px]  inline-block'>
				{label}
			</label>

			<textarea
				placeholder={placeholder}
				className='border-color border rounded-lg px-2 py-1 outline-none '
				{...register(name)}
				name={name}
				id=''
				rows='5'
				defaultValue={value}
			></textarea>
			{error && <p className='text-sm text-red-400'>{error}</p>}
		</div>
	)
}

export default TextBox
