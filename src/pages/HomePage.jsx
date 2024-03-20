import FeaturedPostCard from '../components/posts/FeaturedPostCard'
import FeaturedPostsContainer from '../components/posts/FeaturedPostsContainer'
import LatestPostCard from '../components/posts/LatestPostCard'
import LatestPostsContainer from '../components/posts/LatestPostsContainer'
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
					<FeaturedPostsContainer />
				</div>

				<div>
					<LatestPostsContainer />
				</div>
			</div>
		</UserLayout>
	)
}

export default HomePage
