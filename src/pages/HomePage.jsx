import HomePageComponent from '../components/pages/HomePageComponent'
import FeaturedPostsContainer from '../components/posts/FeaturedPostsContainer'
import LatestPostsContainer from '../components/posts/LatestPostsContainer'
import UserLayout from '../layouts/UserLayout'

const HomePage = () => {
	return (
		<UserLayout>
			<div className='col-span-4 md:col-span-3 lg:col-span-2'>
				<HomePageComponent />
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
