import { useState } from 'react'
import CategoryLists from '../category/CategoryLists'
import { useEffect } from 'react'
import { getPostsService, postCategoryService } from '../../services/post'
import { useParams } from 'react-router-dom'
import UserPostCard from '../posts/UserPostCard'
import Loader from '../Loader'
import { useSelector } from 'react-redux'
import Pagination from '../Pagination'
import { likeService } from '../../services/like'

const CategoryPageComponent = () => {
	const { user } = useSelector((state) => state.user)
	const [categories, setCategories] = useState(null)
	const [loading, setLoading] = useState(false)
	const [posts, setPosts] = useState(null)
	const { category } = useParams()
	const [meta, setMeta] = useState(null)
	const [page, setPage] = useState(1)

	console.log(category)

	const totalPages = Math.ceil(meta?.total / meta?.per_page)
	const handlePageChange = (data) => {
		const currentPage = data.selected + 1
		setPage(currentPage)
	}

	useEffect(() => {
		getCategoryLists()
	}, [])

	const getCategoryLists = async () => {
		setLoading(true)
		const res = await postCategoryService()
		console.log(res)
		if (res) {
			setCategories(res.categories)
			setLoading(false)
		}
	}

	useEffect(() => {
		getPosts('loading')
	}, [page, user, category])

	const getPosts = async (loading) => {
		if (loading) setLoading(true)
		const res = await getPostsService(page, category ? category : '')
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
		<div className='w-full flex flex-col gap-4'>
			<CategoryLists categories={categories} loading={loading} />

			{loading && <Loader loadingState={loading} size={30} auto />}

			{!loading && posts?.length > 0 && (
				<div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
					{posts?.map((post) => (
						<UserPostCard
							key={post?.id}
							post={post}
							handleLike={handleLike}
						/>
					))}
				</div>
			)}
			{!loading && posts?.length == 0 && (
				<p className='text-center text-color'>No posts found.</p>
			)}

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

export default CategoryPageComponent
