import { faPaperPlane } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import CommentCard from '../posts/CommentCard'
import {
	createCommentService,
	deleteCommentService,
	getCommentsService,
} from '../../services/comment'
import { alert } from '../../helpers/alert'
import { useForm } from 'react-hook-form'
import { useEffect } from 'react'
import { useState } from 'react'

const CommentContainer = ({ id }) => {
	const { register, handleSubmit, watch, reset } = useForm()
	const comment = watch('comment')
	const [comments, setComments] = useState([])

	useEffect(() => {
		getComments()
	}, [id])

	const getComments = async () => {
		const res = await getCommentsService(id)
		if (res) {
			setComments(res?.comments)
			console.log(res)
		}
	}

	const sendComment = async (data) => {
		try {
			let postData = {
				comment: data?.comment,
				post_id: id,
			}
			const res = await createCommentService(postData)
			if (res.status == 200) {
				getComments()
				reset()
				alert('success', res?.message)
			}
		} catch (error) {
			// console.log(error)
		}
	}

	const deleteComment = async (id) => {
		try {
			const res = await deleteCommentService(id)
			if (res.status == 200) {
				getComments()
				alert('success', res?.message)
			}
		} catch (error) {
			// console.log(error)
		}
	}

	return (
		<div className='relative'>
			<div className='mt-2'>
				<h3 className='text-xl font-semibold'>Comments</h3>
				<div className='max-h-[500px] h-fit mt-4 overflow-y-scroll  scrollbar-hide'>
					{comments?.length > 0 &&
						comments?.map((item, idx) => (
							<CommentCard
								key={item.id + idx}
								deleteComment={deleteComment}
								item={item}
							/>
						))}
				</div>
			</div>

			<form onSubmit={handleSubmit(sendComment)}>
				<div className='mt-2 sticky bottom-0 border-gray-400  border-t-2 flex items-center gap-3 left-0  bg-primary right-0'>
					<input
						{...register('comment')}
						type='text'
						placeholder='Add a comment'
						className='w-full flex-1 p-2 border-none outline-none'
					/>
					<button type='submit' disabled={!comment} className='pr-2'>
						<FontAwesomeIcon
							className={`${comment ? 'text-black' : 'text-gray-400'}`}
							icon={faPaperPlane}
						/>
					</button>
				</div>
			</form>
		</div>
	)
}

export default CommentContainer
