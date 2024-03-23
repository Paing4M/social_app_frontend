import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { formatDate } from '../../helpers/formatDate'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { useSelector } from 'react-redux'

const CommentCard = ({ item, deleteComment }) => {
	const { user } = useSelector((state) => state.user)

	return (
		<div className='flex items-start gap-3 mb-3 last:mb-2'>
			<img
				src={
					item?.user?.profile
						? item?.user?.profile
						: '/src/assets/images/default-profile.png'
				}
				className='object-cover w-6 h-6 rounded-full'
				alt=''
			/>

			<div className='border border-color px-2 py-1 rounded-md flex-1'>
				<div className='flex gap-2 items-start '>
					<div className='flex-1'>
						<div className='flex gap-2 items-center'>
							<p className='font-semibold'>{item?.user?.name}</p>
							<span className='text-[13px] text-gray-400'>
								{formatDate(item?.created_at)}
							</span>
						</div>
						<p className='text-[16px] text-gray-600 leading-tight'>
							{item?.comment}
						</p>
					</div>

					{user?.id == item?.user?.id && (
						<button onClick={() => deleteComment(item?.id)}>
							<FontAwesomeIcon icon={faTrash} className='text-red-500' />
						</button>
					)}
				</div>
			</div>
		</div>
	)
}

export default CommentCard
