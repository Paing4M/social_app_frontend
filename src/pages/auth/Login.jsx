import { Link } from 'react-router-dom'
import InputBox from '../../components/inputs/InputBox'
import LoginForm from '../../components/form/LoginForm'

const Login = () => {
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
