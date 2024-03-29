import { faComment } from '@fortawesome/free-solid-svg-icons'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
import { formatDate } from '../../helpers/formatDate'

const UserPostCard = ({ post, handleLike }) => {
	return (
		<div className='p-4 rounded-md bg-primary'>
			<div className='flex items-center gap-4'>
				<img
					src={
						post?.user?.profile
							? post?.user?.profile
							: '/src/assets/images/default-profile.png'
					}
					className='w-9 h-9 object-cover rounded-full'
					alt=''
				/>
				<div>
					<p className='font-semibold'>{post?.user?.name}</p>
					<div className='flex items-center gap-3'>
						<span className='text-gray-500 text-sm'>
							{formatDate(post?.created_at)}
						</span>
						<Link
							to={`/categories/${post?.category}`}
							className='bg-color inline-block text-white text-sm rounded px-2'
						>
							{post?.category}
						</Link>
					</div>
				</div>
			</div>
			<div className='mt-2'>
				<Link to={'/posts/' + post?.id} className='leading-tight'>
					{post?.desc.length > 300
						? post?.desc?.slice(0, 300) + ' ...'
						: post?.desc}
				</Link>
			</div>

			{post?.img && (
				<div className='mt-2'>
					<Link to={'/posts/' + post?.id}>
						<img
							className='h-[300px] w-full object-cover rounded-lg'
							src={post?.img}
							alt=''
						/>
					</Link>
				</div>
			)}
			<div>
				<div className='mt-2'>
					<div className='flex items-center gap-3'>
						<button onClick={() => handleLike(post?.id)}>
							<FontAwesomeIcon
								className={`text-xl ${
									post?.likeByUser ? 'text-red-500' : 'text-gray-300'
								}`}
								icon={faHeart}
							/>
						</button>

						<Link to={'/posts/' + post?.id} className='cursor-pointer'>
							<FontAwesomeIcon
								icon={faComment}
								className='text-gray-300 text-xl '
							/>
						</Link>
					</div>
				</div>

				{/* comment */}
				{post?.latestComment && (
					<div className='mt-2'>
						<div className='flex items-center gap-4'>
							<img
								src={
									post?.latestComment?.user?.profile ||
									'/src/assets/images/default-profile.png'
								}
								className='w-7 h-7 rounded-full object-cover'
								alt=''
							/>
							<div>
								<p className='font-semibold text-[15px]'>
									{post?.latestComment?.user?.name}
								</p>
								<p className='text-gray-500 text-[14px]'>
									{post?.latestComment?.comment}
								</p>
							</div>
						</div>

						<div>
							<Link
								to={'/posts/' + post?.id}
								className='font-semibold text-sm text-color'
							>
								View all comments
							</Link>
						</div>
					</div>
				)}
			</div>
		</div>
	)
}

export default UserPostCard
