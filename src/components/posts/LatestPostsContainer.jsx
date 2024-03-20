import { useState } from 'react'
import LatestPostCard from './LatestPostCard'
import { getLatestPostsService } from '../../services/post'
import { useEffect } from 'react'
import Loader from '../Loader'

const LatestPostsContainer = () => {
	const [posts, setPosts] = useState(null)
	const [loading, setLoading] = useState(false)

	useEffect(() => {
		getLatestPosts()
	}, [])

	const getLatestPosts = async () => {
		setLoading(true)
		const res = await getLatestPostsService()
		if (res.posts) {
			setPosts(res.posts)
			setLoading(false)
		}
	}

	if (posts?.length == 0) return

	return (
		<div className='bg-primary w-full rounded-lg p-4'>
			<h4 className='text-lg border-b-2 border-color pb-1 font-semibold mb-1'>
				Latest posts
			</h4>
			{loading && <Loader auto size={20} loadingState={loading} />}
			{!loading &&
				posts?.length > 0 &&
				posts?.map((post) => <LatestPostCard key={post?.id} post={post} />)}
		</div>
	)
}

export default LatestPostsContainer
