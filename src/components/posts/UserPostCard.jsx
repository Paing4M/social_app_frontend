import { faComment } from '@fortawesome/free-regular-svg-icons'
import { faHeart } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'

const UserPostCard = () => {
	return (
		<div className='p-4 rounded-lg bg-primary'>
			<div className='flex items-center gap-4'>
				<img
					src='/src/assets/images/default-profile.png'
					className='w-7 h-7 rounded-full'
					alt=''
				/>
				<div>
					<p className='font-semibold'>Name</p>
					<span className='text-gray-500 text-sm'>12 , 2 , 2000</span>
				</div>
			</div>

			<div className='mt-2'>
				<h2 className='font-semibold'>Header </h2>
			</div>

			<div className='mt-2'>
				<Link to={'/posts/12'}>
					<img
						className='h-[300px] w-full object-cover rounded-lg'
						src='https://images.unsplash.com/photo-1682687982468-4584ff11f88a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8'
						alt=''
					/>
				</Link>
			</div>

			<div className='mt-2'>
				<div className='flex items-center gap-3'>
					<button>
						<FontAwesomeIcon className='text-xl' icon={faHeart} />
					</button>

					<Link to={'/posts/12'} className='cursor-pointer'>
						<FontAwesomeIcon icon={faComment} className='text-xl' />
					</Link>
				</div>
			</div>

			<div className='mt-2'>
				<div className='flex items-center gap-4'>
					<img
						src='/src/assets/images/default-profile.png'
						className='w-5 h-5 rounded-full object-cover'
						alt=''
					/>
					<div>
						<p className='font-semibold text-[16px]'>Name</p>
						<p className='text-gray-500 text-sm'>
							Lorem ipsum dolor, sit amet consectetur adipisicing elit.
						</p>
					</div>
				</div>

				<div>
					<Link className='font-semibold text-color'>
						View all comments
					</Link>
				</div>
			</div>
		</div>
	)
}

export default UserPostCard
