import ReactPaginate from 'react-paginate'

const Pagination = ({ handlePageChange, totalPages }) => {
	return (
		<div className='mt-3'>
			<div className='flex justify-center'>
				<nav className='bg-white rounded-full p-1'>
					<ReactPaginate
						breakLabel='...'
						nextLabel=''
						previousLabel=''
						containerClassName='flex text-gray-600 gap-4 font-medium py-2'
						pageLinkClassName='rounded-full px-4 py-2  text-gray-600'
						onPageChange={handlePageChange}
						pageRangeDisplayed={5}
						pageCount={totalPages}
						activeLinkClassName='rounded-full px-4 py-2 bg-secondary text-gray-600'
						renderOnZeroPageCount={null}
					/>
				</nav>
			</div>
		</div>
	)
}

export default Pagination
