import { useState } from 'react'
import PostCard from './PostCard'
import { getUserPostsService, postCategoryService } from '../../services/post'
import { useEffect } from 'react'
import Loader from '../Loader'
import { BeatLoader } from 'react-spinners'
import Pagination from '../Pagination'

const PostsContainer = ({ openModal, setSuccess, success, handleEdit }) => {
	const [posts, setPosts] = useState(null)
	const [loading, setLoading] = useState(false)
	const [search, setSearch] = useState('')
	const [categories, setCategories] = useState([])
	const [selectedCategory, setSelectedCategory] = useState('')
	const [perPage, setPerPage] = useState(6)
	const [meta, setMeta] = useState(null)
	const [page, setPage] = useState(1)

	const totalPages = Math.ceil(meta?.total / meta?.per_page)
	const handlePageChange = (data) => {
		const currentPage = data.selected + 1
		setPage(currentPage)
	}

	useEffect(() => {
		getPosts()
		getCategories()
	}, [success])

	useEffect(() => {
		getPosts()
	}, [selectedCategory, perPage, page])

	const getPosts = async () => {
		setLoading(true)
		try {
			const res = await getUserPostsService(selectedCategory, perPage, page)
			// console.log(res)
			if (res) {
				setLoading(false)
				setPosts(res?.data)
				setMeta(res?.meta)
			}
		} catch (error) {
			setLoading(false)
			console.log(error)
		}
	}

	const getCategories = async () => {
		try {
			const res = await postCategoryService()
			// console.log(res)
			if (res) {
				setCategories(res.categories)
			}
		} catch (error) {
			console.log(error)
		}
	}

	return (
		<div>
			<div className='flex flex-col-reverse gap-3 sm:flex-row items-center justify-between'>
				<div className='flex  items-center gap-5'>
					<select
						onChange={(e) => setPerPage(e.target.value)}
						id='perPage'
						className='bg-white border border-gray-300  text-sm rounded-md outline-none focus:border-color block w-fit p-2'
					>
						<option defaultValue='6'>6</option>
						<option value='10'>10</option>
						<option value='20'>20</option>
						<option value='30'>30</option>
					</select>

					<select
						onChange={(e) => setSelectedCategory(e.target.value)}
						id='perPage'
						className='bg-white border border-gray-300  text-sm rounded-md outline-none focus:border-color block w-fit p-2'
					>
						<option value=''>All</option>
						{categories?.map((item) => (
							<option key={item} value={item}>
								{item}
							</option>
						))}
					</select>
				</div>

				<input
					onChange={(e) => setSearch(e.target.value)}
					type='text'
					placeholder='Search posts .....'
					className='w-full outline-none px-2.5 py-1 sm:w-[300px] rounded-md bg-white'
				/>

				<button
					onClick={openModal}
					className='px-2 py-1 bg-color rounded cursor-pointer text-white'
				>
					Create Post
				</button>
			</div>

			<div className='mt-6'>
				{loading && (
					<div className='flex items-center justify-center'>
						<Loader
							LoadindStyle={BeatLoader}
							loadingState={loading}
							size={15}
						/>
					</div>
				)}

				{!loading && posts?.length > 0 && (
					<div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
						{posts
							?.filter((post) => post?.desc.includes(search))
							.map((post) => (
								<div key={post.id}>
									<PostCard
										setSuccess={setSuccess}
										handleEdit={handleEdit}
										openModal={openModal}
										post={post}
									/>
								</div>
							))}
					</div>
				)}
				{!loading && posts?.length == 0 && (
					<p className='m-3 text-center text-color'>No post found.</p>
				)}
			</div>

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

export default PostsContainer
