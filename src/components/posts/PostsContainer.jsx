import PostCard from './PostCard'

const PostsContainer = () => {
	let admin = true

	return (
		<div>
			<div className='flex flex-col gap-3 sm:flex-row items-center justify-between'>
				<div className='flex  items-center gap-5'>
					<select
						id='perPage'
						className='bg-white border border-gray-300  text-sm rounded-md outline-none focus:border-color block w-fit px-2 py-1'
					>
						<option selected>Page</option>
						<option value='10'>10</option>
						<option value='20'>20</option>
						<option value='30'>30</option>
					</select>

					<select
						id='perPage'
						className='bg-white border border-gray-300  text-sm rounded-md outline-none focus:border-color block w-fit px-2 py-1'
					>
						<option selected>Categories</option>
						<option value='10'>10</option>
						<option value='20'>20</option>
						<option value='30'>30</option>
					</select>
				</div>

				<input
					type='text'
					placeholder='Search posts .....'
					className='w-full outline-none px-2.5 py-1 sm:w-[300px] rounded-md bg-white'
				/>
			</div>

			<div className='mt-6 sm:mt-3'>
				<PostCard />
			</div>
		</div>
	)
}

export default PostsContainer
