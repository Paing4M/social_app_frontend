import React from 'react'
import { Link } from 'react-router-dom'

const LatestPostCard = () => {
	return (
		<div className='py-3 border-b-2  last:border-b-0 last:pb-0 first:pt-0'>
			<div className='flex items-start gap-3'>
				<img
					className='w-6 h-6'
					src='/src/assets/images/default-profile.png'
					alt=''
				/>
				<div className='flex-1'>
					<Link className='leading-none text-[15px] inline-block text-color'>
						Lorem ipsum dolor sit amet consectetur.
					</Link>
					<p className='text-[13px] text-gray-500'>12, 23,2334</p>
				</div>
			</div>
		</div>
	)
}

export default LatestPostCard
