import { Link } from 'react-router-dom'

const FeaturedPostCard = ({ post }) => {
	return (
		<div className='py-3 border-b-2  last:border-b-0 last:pb-0 first:pt-0'>
			<div className='flex items-start gap-3'>
				<Link to={`/posts/${post?.id}`}>
					<img
						className='w-14 h-14 rounded-md object-cover'
						src={
							post?.img
								? post?.img
								: '/src/assets/images/placeholder.png'
						}
						alt=''
					/>
				</Link>

				<div className='flex-1'>
					<Link
						to={`/posts/${post?.id}`}
						className='leading-none text-[15px] inline-block text-color'
					>
						{post?.desc?.length > 50
							? post?.desc?.slice(0, 50) + ' ...'
							: post?.desc}
					</Link>
					<p className='text-[13px] font-bold text-gray-500'>
						{post?.user?.name}
					</p>
				</div>
			</div>
		</div>
	)
}

export default FeaturedPostCard
