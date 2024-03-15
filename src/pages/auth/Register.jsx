import RegisterForm from '../../components/form/RegisterForm'

const Register = () => {
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
