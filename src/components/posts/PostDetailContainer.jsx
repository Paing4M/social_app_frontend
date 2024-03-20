import { faComment } from '@fortawesome/free-regular-svg-icons'
import { faHeart } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
import CommentCard from './CommentCard'
import { faPaperPlane } from '@fortawesome/free-regular-svg-icons'
import { useNavigate } from 'react-router-dom'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { useParams } from 'react-router-dom'
import { useState } from 'react'
import { useEffect } from 'react'
import { getSinglePostService } from '../../services/post'
import { formatDate } from '../../helpers/formatDate'
import Loader from '../Loader'

const PostDetailContainer = () => {
	const navigate = useNavigate()
	const { postId } = useParams()
	const [post, setPost] = useState()
	const [loading, setLoading] = useState(false)

	useEffect(() => {
		getPost()
	}, [postId])

	const getPost = async () => {
		setLoading(true)
		if (postId) {
			const res = await getSinglePostService(postId)
			if (res) {
				setPost(res)
				setLoading(false)
			}
		}
	}

	return (
		<>
			{loading ? (
				<Loader loadingState={loading} size={30} auto />
			) : (
				<div className='p-4 bg-primary rounded-lg '>
					<button onClick={() => navigate(-1)}>
						<FontAwesomeIcon
							className='text-lg text-color'
							icon={faArrowLeft}
						/>
					</button>
					<div className='flex items-center gap-4 mb-4'>
						<img
							src={
								post?.user?.profile
									? post?.user?.profile
									: '/src/assets/images/default-profile.png'
							}
							alt=''
							className='w-10 h-10 object-cover rounded-full'
						/>
						<div>
							<p className='text-lg font-semibold'>{post?.user?.name}</p>
							<p className='text-gray-500 text-sm'>
								{formatDate(post?.created_at)}
							</p>
						</div>
					</div>

					<div>
						<p>{post?.desc}</p>
					</div>

					{post?.img && (
						<div className='mt-3'>
							<img
								src='https://images.unsplash.com/photo-1682687982468-4584ff11f88a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8'
								alt=''
								className='object-cover w-full  h-[400px] rounded-lg'
							/>
						</div>
					)}

					<div className='mt-2'>
						<div className='flex items-center gap-3'>
							<button>
								<FontAwesomeIcon className='text-xl' icon={faHeart} />
							</button>

							<button className='cursor-pointer'>
								<FontAwesomeIcon icon={faComment} className='text-xl' />
							</button>
						</div>
					</div>

					{/* comment */}
					<div className='relative'>
						<div className='mt-2'>
							<h3 className='text-xl font-semibold'>Comments</h3>
							<div className='max-h-[500px] h-fit mt-4 overflow-y-scroll  scrollbar-hide'>
								<CommentCard />
								<CommentCard />
								<CommentCard />
								<CommentCard />
								<CommentCard />
								<CommentCard />
								<CommentCard />
								<CommentCard />
								<CommentCard />
								<CommentCard />
								<CommentCard />
							</div>
						</div>

						<div className='mt-2 sticky bottom-0 border-gray-400  border-t-2 flex items-center gap-3 left-0  bg-primary right-0'>
							<input
								type='text'
								placeholder='Add a comment'
								className='w-full flex-1 p-2 border-none outline-none'
							/>
							<button className='pr-2'>
								<FontAwesomeIcon icon={faPaperPlane} />
							</button>
						</div>
					</div>
				</div>
			)}
		</>
	)
}

export default PostDetailContainer
