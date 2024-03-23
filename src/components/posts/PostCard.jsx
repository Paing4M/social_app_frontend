import { Link } from 'react-router-dom'
import { formatDate } from '../../helpers/formatDate'
import DeleteModal from '../modal/DeleteModal'
import { useState } from 'react'
import { deletePostService } from '../../services/post'
import { alert } from '../../helpers/alert'

const PostCard = ({ post, handleEdit, setSuccess }) => {
	let [isOpen, setIsOpen] = useState(false)
	const [loading, setLoading] = useState(false)

	function closeModal() {
		setIsOpen(false)
	}

	function openModal() {
		setIsOpen(true)
	}

	const deletePost = async () => {
		if (post) {
			setLoading(true)
			const res = await deletePostService(post?.id)
			console.log(res)
			if (res?.status == 200) {
				setSuccess(true)
				alert('success', res?.message)
				setLoading(false)
				closeModal()
			}
		}
	}

	const handleDelete = () => {
		openModal()
	}

	return (
		<div className='p-4 rounded-lg bg-primary lg:min-h-[470px]'>
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
				<button
					onClick={handleDelete}
					className='bg-red-400  min-w-[100px] rounded text-white px-4 py-1'
				>
					Delete
				</button>
				<button
					onClick={() => handleEdit(post?.id)}
					className='bg-color  min-w-[100px] rounded text-white px-4 py-1'
				>
					Edit
				</button>
			</div>

			{/* delete modal */}
			<DeleteModal
				loading={loading}
				post={post}
				deletePost={deletePost}
				isOpen={isOpen}
				closeModal={closeModal}
			/>
		</div>
	)
}

export default PostCard
