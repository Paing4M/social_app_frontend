import { useState } from 'react'
import UserLayout from '../layouts/UserLayout'
import PostMoal from '../components/modal/PostMoal'
import PostsContainer from '../components/posts/PostsContainer'

const PostsPage = () => {
	let [isOpen, setIsOpen] = useState(false)

	function closeModal() {
		setIsOpen(false)
	}

	function openModal() {
		setIsOpen(true)
	}

	return (
		<UserLayout>
			<div className='col-span-4  md:col-span-3 lg:col-span-3 h-fit'>
				<div className='flex items-center justify-end'>
					<button
						onClick={openModal}
						className='px-2 py-1 bg-color rounded cursor-pointer text-white'
					>
						Create Post
					</button>
				</div>

				<div className='mt-6'>
					<PostsContainer />
				</div>
			</div>

			<PostMoal isOpen={isOpen} closeModal={closeModal} />
		</UserLayout>
	)
}

export default PostsPage
