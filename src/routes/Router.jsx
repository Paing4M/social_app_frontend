import { createBrowserRouter } from 'react-router-dom'
import UserMainLayout from '../layouts/UserMainLayout'
import HomePage from '../pages/HomePage'
import PostsPage from '../pages/PostsPage'
import PostDetailPage from '../pages/PostDetailPage'
import AuthLayout from '../layouts/AuthLayout'
import Login from '../pages/auth/Login'
import Register from '../pages/auth/Register'
import EmailVerificationPage from '../pages/auth/EmailVerificationPage'
import ForgotPasswordPage from '../pages/auth/ForgotPasswordPage'
import ProfilePage from '../pages/ProfilePage'
import CategoryPage from '../pages/CategoryPage'

export const router = createBrowserRouter([
	{
		element: <UserMainLayout />,
		children: [
			{
				path: '/',
				element: <HomePage />,
			},

			{
				path: '/posts',
				element: <PostsPage />,
			},

			{
				path: '/posts/:postId',
				element: <PostDetailPage />,
			},

			{
				path: '/profile',
				element: <ProfilePage />,
			},

			{
				path: '/categories',
				children: [
					{
						element: <CategoryPage />,
						index: true,
					},
					// {
					// 	path: 'all',
					// 	element: <CategoryPage />,
					// },
					{
						path: ':category',
						element: <CategoryPage />,
					},
				],
			},
		],
	},

	{
		path: '/login',
		element: (
			<AuthLayout>
				<Login />
			</AuthLayout>
		),
	},

	{
		path: '/forgot-password',
		element: <ForgotPasswordPage />,
	},

	{
		path: '/register',
		element: (
			<AuthLayout>
				<Register />
			</AuthLayout>
		),
	},

	{
		path: '/email-verification',
		element: <EmailVerificationPage />,
	},
])
