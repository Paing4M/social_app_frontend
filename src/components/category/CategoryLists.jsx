import CategorySlider from './CategorySlider'

const CategoryLists = ({ categories }) => {
	return <div>{categories && <CategorySlider categories={categories} />}</div>
}

export default CategoryLists
