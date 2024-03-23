import { useState } from 'react'
import UserPostInput from '../posts/UserPostInput'
import UserPostsContainer from '../posts/UserPostsContainer'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'
import { getPostsService } from '../../services/post'
import { likeService } from '../../services/like'

const HomePageComponent = () => {
	const [posts, setPosts] = useState([])
	const [loading, setLoading] = useState(false)
	const [meta, setMeta] = useState(null)
	const [page, setPage] = useState(1)
	const [success, setSuccess] = useState(false)
	const { user } = useSelector((state) => state.user)

	useEffect(() => {
		getPosts('loading')
	}, [page, user, success])

	const getPosts = async (loading) => {
		if (loading) setLoading(true)
		const res = await getPostsService(page, '')
		if (res?.data) {
			setPosts(res?.data)
			setMeta(res?.meta)
			setLoading(false)
		}
	}

	const handleLike = async (post_id) => {
		if (!user) {
			alert('warning', 'Please login to like a post.')
		}

		const res = await likeService({ post_id })
		if (res) {
			getPosts()
		}
	}

	return (
		<div className='flex flex-col gap-4 h-fit'>
			<UserPostInput setSuccess={setSuccess} />
			<UserPostsContainer
				setPage={setPage}
				meta={meta}
				posts={posts}
				loading={loading}
				handleLike={handleLike}
			/>
		</div>
	)
}

export default HomePageComponent
