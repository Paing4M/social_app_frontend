import { Link } from 'react-router-dom'
import AuthInput from '../../components/inputs/AuthInput'

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
				<AuthInput
					label={'Email address'}
					name={'email'}
					placeholder={'Your email address'}
					type={'text'}
				/>

				<AuthInput
					label={'Password'}
					name={'email'}
					placeholder={'Your password'}
					type={'text'}
				/>

				<div className='flex items-center justify-between'>
					<Link
						to={'/register'}
						className='font-semibold text-sm text-color'
					>
						Don't have an account?
					</Link>

					<button className='font-semibold text-sm text-color'>
						Forgot password?
					</button>
				</div>

				<button className='text-white bg-color py-2 w-full mt-4 rounded-lg'>
					Login
				</button>
			</div>
		</div>
	)
}

export default Login
