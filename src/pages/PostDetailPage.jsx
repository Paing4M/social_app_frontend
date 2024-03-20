import React from 'react'
import UserLayout from '../layouts/UserLayout'
import PostDetailContainer from '../components/posts/PostDetailContainer'
import FeaturedPostsContainer from '../components/posts/FeaturedPostsContainer'
import LatestPostsContainer from '../components/posts/LatestPostsContainer'

const PostDetailPage = () => {
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
