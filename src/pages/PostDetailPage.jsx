import React from 'react'
import UserLayout from '../layouts/UserLayout'
import PostDetailContainer from '../components/posts/PostDetailContainer'

const PostDetailPage = () => {
	return (
		<UserLayout>
			<div className=' col-span-4 md:col-span-3 flex flex-col gap-4 lg:col-span-2  h-fit'>
				<PostDetailContainer />
			</div>
			<div className='hidden lg:flex p-4 h-fit'>2</div>
		</UserLayout>
	)
}

export default PostDetailPage
