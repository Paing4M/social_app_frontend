import CategorySlider from './CategorySlider'

const CategoryLists = ({ categories, loading }) => {
	return <div>{!loading && <CategorySlider categories={categories} />}</div>
}

export default CategoryLists
