import FeaturedPostCard from '../components/posts/FeaturedPostCard'
import LatestPostCard from '../components/posts/LatestPostCard'
import UserPostInput from '../components/posts/UserPostInput'
import UserPostsContainer from '../components/posts/UserPostsContainer'
import UserLayout from '../layouts/UserLayout'

const HomePage = () => {
	return (
		<UserLayout>
			<div className='col-span-4 md:col-span-3 lg:col-span-2 flex flex-col gap-4 h-fit'>
				<UserPostInput />
				<UserPostsContainer />
			</div>
			<div className='hidden lg:flex flex-col gap-4 lg:col-span-1 h-fit'>
				<div>
					<div className='bg-primary w-full rounded-lg p-4'>
						<h4 className='text-lg border-b-2 border-color pb-1 font-semibold mb-1'>
							Featured posts
						</h4>
						<FeaturedPostCard />
						<FeaturedPostCard />
						<FeaturedPostCard />
						<FeaturedPostCard />
					</div>
				</div>

				<div>
					<div className='bg-primary w-full rounded-lg p-4'>
						<h4 className='text-lg border-b-2 border-color pb-1 font-semibold mb-1'>
							Latest posts
						</h4>
						<LatestPostCard />
						<LatestPostCard />
						<LatestPostCard />
						<LatestPostCard />
					</div>
				</div>
			</div>
		</UserLayout>
	)
}

export default HomePage
