import React from 'react'
import FeaturedPostCard from './FeaturedPostCard'
import { useState } from 'react'
import { useEffect } from 'react'
import Loader from '../Loader'
import { getFeaturedPostsService } from '../../services/post'

const FeaturedPostsContainer = () => {
	const [posts, setPosts] = useState(null)
	const [loading, setLoading] = useState(false)

	useEffect(() => {
		getLatestPosts()
	}, [])

	const getLatestPosts = async () => {
		setLoading(true)
		const res = await getFeaturedPostsService()
		if (res.posts) {
			setPosts(res.posts)
			setLoading(false)
		}
	}

	if (posts?.length == 0) return
	return (
		<div className='bg-primary w-full rounded-lg p-4'>
			<h4 className='text-lg border-b-2 border-color pb-1 font-semibold mb-1'>
				Featured posts
			</h4>
			{loading && <Loader auto size={20} loadingState={loading} />}
			{!loading &&
				posts?.length > 0 &&
				posts?.map((post) => (
					<FeaturedPostCard key={post?.id} post={post} />
				))}
		</div>
	)
}

export default FeaturedPostsContainer
