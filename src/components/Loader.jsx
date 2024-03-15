import MoonLoader from 'react-spinners/ClipLoader'

const override = {
	display: 'block',
	margin: '0 auto',
}

const Loader = ({ LoadindStyle, color, loadingState, size }) => {
	return (
		<LoadindStyle
			color={color}
			loading={loadingState}
			cssOverride={override}
			size={size}
		></LoadindStyle>
	)
}

Loader.defaultProps = {
	LoadindStyle: MoonLoader,
	color: '#74A2DA',
	size: 50,
}

export default Loader
