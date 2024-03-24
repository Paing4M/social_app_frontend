import UserLayout from '../layouts/UserLayout'
import CategoryPageComponent from '../components/pages/CategoryPageComponent'

const CategoryPage = () => {
	return (
		<UserLayout>
			<div className='col-span-4  md:col-span-3 lg:col-span-3 h-fit'>
				<div>
					<CategoryPageComponent />
				</div>
			</div>
		</UserLayout>
	)
}

export default CategoryPage
