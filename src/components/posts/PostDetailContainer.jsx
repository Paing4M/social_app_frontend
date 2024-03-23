import { faComment } from '@fortawesome/free-solid-svg-icons'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { useEffect, useState } from 'react'
import { getSinglePostService } from '../../services/post'
import { formatDate } from '../../helpers/formatDate'
import Loader from '../Loader'
import { likeService } from '../../services/like'
import CommentContainer from '../comment/CommentContainer'

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
				setPost(res.data)
				setLoading(false)
			}
		}
	}

	const handleLike = async (post_id) => {
		const res = await likeService({ post_id })
		if (res) {
			getPost()
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
								src={post?.img}
								alt=''
								className='object-cover w-full  h-[400px] rounded-lg'
							/>
						</div>
					)}

					<div className='mt-2'>
						<div className='flex items-center gap-3'>
							<button onClick={() => handleLike(post?.id)}>
								<FontAwesomeIcon
									className={`text-xl ${
										post?.likeByUser
											? 'text-red-500'
											: 'text-gray-300'
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
					<CommentContainer id={postId} />
				</div>
			)}
		</>
	)
}

export default PostDetailContainer
