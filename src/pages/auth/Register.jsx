import { Link } from 'react-router-dom'
import AuthInput from '../../components/inputs/AuthInput'

const Register = () => {
	return (
		<div>
			<h2 className='text-center text-3xl text-color font-semibold'>
				Welcome to MySocial
			</h2>

			<p className='text-center font-semibold text-lg'>
				Please register your account here .
			</p>

			<div className='mt-6'>
				<AuthInput
					label={'Name'}
					name={'name'}
					placeholder={'Your name'}
					type={'text'}
				/>

				<AuthInput
					label={'Email address'}
					name={'email'}
					placeholder={'Your email address'}
					type={'text'}
				/>

				<AuthInput
					label={'Password'}
					name={'password'}
					placeholder={'Your password'}
					type={'text'}
				/>

				<AuthInput
					label={'Confirm password'}
					name={'confirm_password'}
					placeholder={'Repeat your password'}
					type={'text'}
				/>

				<div className='flex items-center justify-between'>
					<Link to={'/login'} className='font-semibold text-sm text-color'>
						Already have an account?
					</Link>
				</div>

				<button className='text-white bg-color py-2 w-full mt-4 rounded-lg'>
					Login
				</button>
			</div>
		</div>
	)
}

export default Register
