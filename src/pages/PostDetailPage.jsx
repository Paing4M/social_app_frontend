import React from 'react'
import UserLayout from '../layouts/UserLayout'
import PostDetailContainer from '../components/posts/PostDetailContainer'
import FeaturedPostsContainer from '../components/posts/FeaturedPostsContainer'
import LatestPostsContainer from '../components/posts/LatestPostsContainer'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { alert } from '../helpers/alert'
import { useSelector } from 'react-redux'

const PostDetailPage = () => {
	const { user } = useSelector((state) => state.user)
	const navigate = useNavigate()

	useEffect(() => {
		if (!user) {
			navigate('/login')
			alert('warning', 'Please login first.')
		}
	}, [user])

	return (
		<UserLayout>
			<div className=' col-span-4 md:col-span-3 flex flex-col gap-4 lg:col-span-2  h-fit'>
				<PostDetailContainer />
			</div>
			<div className='hidden lg:flex flex-col gap-4  h-fit'>
				<div>
					<FeaturedPostsContainer />
				</div>

				<div>
					<LatestPostsContainer />
				</div>
			</div>
		</UserLayout>
	)
}

export default PostDetailPage
