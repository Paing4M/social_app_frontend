import { useSelector } from 'react-redux'
import LoginForm from '../../components/form/LoginForm'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
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
				Login to your social account .
			</p>

			<div className='mt-6'>
				<LoginForm />
			</div>
		</div>
	)
}

export default Login
