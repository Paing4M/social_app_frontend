import { useState } from 'react'
import UserLayout from '../layouts/UserLayout'
import PostMoal from '../components/modal/PostMoal'
import PostsContainer from '../components/posts/PostsContainer'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { alert } from '../helpers/alert'
import { getSinglePostService } from '../services/post'

const PostsPage = () => {
	let [isOpen, setIsOpen] = useState(false)
	const { user } = useSelector((state) => state.user)
	const navigate = useNavigate()
	const [success, setSuccess] = useState(false)
	const [editId, setEditId] = useState(null)
	const [post, setPost] = useState(null)
	const [loading, setLoading] = useState(false)

	useEffect(() => {
		if (!user) {
			alert('warning', 'Please login first.')
			navigate('/login')
		}
	}, [user])

	function closeModal() {
		setIsOpen(false)
		setPost(null)
		setEditId(null)
	}

	function openModal(id) {
		setIsOpen(true)
		setSuccess(false)
	}

	// edit function
	const handleEdit = (id) => {
		setEditId(id)
		getSinglePost(id)
		openModal()
	}

	const getSinglePost = async (id) => {
		try {
			setLoading(true)
			const res = await getSinglePostService(id)
			// console.log(res)
			if (res) {
				setPost(res.data)
				setLoading(false)
			}
		} catch (error) {
			console.log(error)
			setLoading(false)
		}
	}

	return (
		<UserLayout>
			<div className='col-span-4  md:col-span-3 lg:col-span-3 h-fit'>
				<div>
					<PostsContainer
						setSuccess={setSuccess}
						handleEdit={handleEdit}
						success={success}
						openModal={openModal}
					/>
				</div>
			</div>

			<PostMoal
				loading={loading}
				editId={editId}
				editPost={post}
				setSuccess={setSuccess}
				isOpen={isOpen}
				closeModal={closeModal}
			/>
		</UserLayout>
	)
}

export default PostsPage
