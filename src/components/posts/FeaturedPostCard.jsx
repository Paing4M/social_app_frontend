import React from 'react'
import { Link } from 'react-router-dom'

const FeaturedPostCard = () => {
	return (
		<div className='py-3 border-b-2  last:border-b-0 last:pb-0 first:pt-0'>
			<div className='flex items-start gap-3'>
				<img
					className='w-14 h-14 rounded-md object-cover'
					src='https://images.unsplash.com/photo-1709653688483-fc2b356c1f36?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHx8'
					alt=''
				/>

				<div className='flex-1'>
					<Link className='leading-none text-[15px] inline-block text-color'>
						Lorem ipsum dolor sit amet consectetur.
					</Link>
					<p className='text-[13px] font-bold text-gray-500'>name</p>
				</div>
			</div>
		</div>
	)
}

export default FeaturedPostCard
