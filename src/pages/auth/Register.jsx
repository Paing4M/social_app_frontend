import { useNavigate } from 'react-router-dom'
import RegisterForm from '../../components/form/RegisterForm'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'

const Register = () => {
	const { user } = useSelector((state) => state.user)
	const navigate = useNavigate()

	useEffect(() => {
		if (user) navigate('/')
	}, [])

	return (
		<div>
			<h2 className='text-center text-3xl text-color font-semibold'>
				Welcome to MySocial
			</h2>

			<p className='text-center font-semibold text-lg'>
				Please register your account here.
			</p>

			<div className='mt-6'>
				<RegisterForm />
			</div>
		</div>
	)
}

export default Register
