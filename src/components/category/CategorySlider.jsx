import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import { Navigation, Pagination } from 'swiper/modules'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { NavLink } from 'react-router-dom'
import { useLocation } from 'react-router-dom'

const CategorySlider = ({ categories }) => {
	const location = useLocation()

	const breakpoints = {
		0: {
			slidesPerView: 1,
		},
		200: {
			slidesPerView: 2,
		},
		300: {
			slidesPerView: 3,
		},
		450: {
			slidesPerView: 4,
		},
		650: {
			slidesPerView: 5,
		},
		800: {
			slidesPerView: 6,
		},
	}

	return (
		<div className='relative w-full'>
			<div className='w-[90%] sm:w-[95%] mx-auto'>
				<Swiper
					navigation={{
						nextEl: '.next',
						prevEl: '.prev',
						disabledClass: 'hidden',
					}}
					pagination
					modules={[Navigation, Pagination]}
					spaceBetween={15}
					breakpoints={breakpoints}
				>
					<SwiperSlide>
						<NavLink
							to='/categories'
							className={`select-none capitalize w-full inline-block text-center  py-1 rounded-md ${
								location?.pathname === '/categories'
									? 'text-primary bg-color'
									: 'bg-white/70'
							}`}
						>
							All
						</NavLink>
					</SwiperSlide>
					{categories?.map((item) => (
						<SwiperSlide key={item}>
							<NavLink
								to={'/categories/' + item}
								className={({ isActive }) =>
									`select-none capitalize w-full inline-block text-center  py-1 rounded-md ${
										isActive ? 'text-primary bg-color' : 'bg-white/70'
									}`
								}
							>
								{item}
							</NavLink>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
			{/* swiper navigation */}
			<button className='next disabled text-color text-xl  absolute z-[400] top-[50%] right-0 transform -translate-y-1/2'>
				<FontAwesomeIcon icon={faChevronRight} />
			</button>
			<button className='prev disabled text-color text-xl  absolute z-[400] top-[50%] left-0 transform -translate-y-1/2'>
				<FontAwesomeIcon icon={faChevronLeft} />
			</button>
		</div>
	)
}

export default CategorySlider
