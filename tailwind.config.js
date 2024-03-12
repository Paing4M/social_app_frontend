/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				primary: 'var(--bg-color)',
				secondary: 'var(--sec-bg-color)',
				color: 'var(--color)',
			},
		},
	},
	plugins: [require('daisyui'), require('tailwind-scrollbar-hide')],
}
