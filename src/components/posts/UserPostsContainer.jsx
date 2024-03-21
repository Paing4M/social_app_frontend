import UserPostCard from './UserPostCard'

import Loader from '../Loader'
import Pagination from '../Pagination'

const UserPostsContainer = ({ setPage, meta, loading, posts, handleLike }) => {
	const totalPages = Math.ceil(meta?.total / meta?.per_page)
	const handlePageChange = (data) => {
		const currentPage = data.selected + 1
		setPage(currentPage)
	}

	return (
		<div className='flex flex-col gap-y-3'>
			{loading && <Loader auto loadingState={loading} size={30} />}
			{!loading && posts?.length == 0 && (
				<p className='text-center text-color'>No post found.</p>
			)}
			{!loading &&
				posts?.length > 0 &&
				posts?.map((post) => (
					<UserPostCard
						handleLike={handleLike}
						key={post?.id}
						post={post}
					/>
				))}

			{/* pagination */}
			{totalPages > 1 && (
				<Pagination
					handlePageChange={handlePageChange}
					totalPages={totalPages}
				/>
			)}
		</div>
	)
}

export default UserPostsContainer
