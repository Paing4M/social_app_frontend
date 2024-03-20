import { Link } from 'react-router-dom'
import { formatDate } from '../../helpers/formatDate'

const PostCard = ({ post, handleEdit }) => {
	return (
		<div className='p-4 rounded-lg bg-primary lg:min-h-[470px]'>
			<div className='flex items-center gap-4'>
				<img
					src={
						post?.user?.profile
							? post?.user?.profile
							: '/src/assets/images/default-profile.png'
					}
					className='w-7 h-7 rounded-full'
					alt=''
				/>
				<div>
					<p className='font-semibold'>{post?.user?.name}</p>
					<div className='flex items-center gap-3'>
						<span className='text-gray-500 text-[13px]'>
							{formatDate(post?.created_at)}
						</span>
						<div className='bg-color text-white text-[12px] rounded px-2'>
							{post?.category}
						</div>
					</div>
				</div>
			</div>

			<div className='mt-2'>
				<Link to={'/posts/' + post?.id} className='truncate block'>
					{post?.desc}
				</Link>
			</div>

			<div className='mt-2'>
				<Link to={'/posts/' + post?.id}>
					<img
						className='h-[350px] md:h-[200px] lg:h-[300px] w-full object-cover rounded-lg'
						src={
							post?.img
								? post?.img
								: '/src/assets/images/placeholder.png'
						}
						alt=''
					/>
				</Link>
			</div>

			<div className='flex items-center justify-between mt-3 pt-2 border-t border-color'>
				<button className='bg-red-400  min-w-[100px] rounded text-white px-4 py-1'>
					Delete
				</button>
				<button
					onClick={() => handleEdit(post?.id)}
					className='bg-color  min-w-[100px] rounded text-white px-4 py-1'
				>
					Edit
				</button>
			</div>
		</div>
	)
}

export default PostCard
