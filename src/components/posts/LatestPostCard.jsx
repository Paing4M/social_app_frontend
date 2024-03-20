import { Link } from 'react-router-dom'
import { formatDate } from '../../helpers/formatDate'

const LatestPostCard = ({ post }) => {
	return (
		<div className='py-3 border-b-2  last:border-b-0 last:pb-0 first:pt-0'>
			<div className='flex items-start gap-3'>
				<img
					className='w-6 h-6'
					src={
						post?.user?.profile
							? post?.user?.profile
							: '/src/assets/images/default-profile.png'
					}
					alt=''
				/>
				<div className='flex-1'>
					<Link
						to={'/posts/' + post?.id}
						className='leading-none text-wrap text-[15px] truncate block text-color'
					>
						{post?.desc?.length > 40
							? post?.desc?.slice(0, 40) + ' ...'
							: post?.desc}
					</Link>

					<p className='text-[13px] text-gray-500'>
						{formatDate(post?.created_at)}
					</p>
				</div>
			</div>
		</div>
	)
}

export default LatestPostCard
