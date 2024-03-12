import React from 'react'

const CommentCard = () => {
	return (
		<div className='flex items-start gap-3 mb-2'>
			<img
				src='/src/assets/images/default-profile.png'
				className='object-cover w-6 h-6 rounded-full'
				alt=''
			/>

			<div className='border border-color p-2 rounded-md flex-1'>
				<p className='font-semibold'>Name</p>
				<p className='text-sm text-gray-500 leading-tight'>
					Lorem, ipsum dolor sit amet consectetur adipisicing
				</p>
			</div>
		</div>
	)
}

export default CommentCard
