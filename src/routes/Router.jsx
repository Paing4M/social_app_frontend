import { createBrowserRouter } from 'react-router-dom'
import UserMainLayout from '../layouts/UserMainLayout'
import HomePage from '../pages/HomePage'
import PostsPage from '../pages/PostsPage'
import PostCreatePage from '../pages/PostCreatePage'
import PostDetailPage from '../pages/PostDetailPage'
import AuthLayout from '../layouts/AuthLayout'
import Login from '../pages/auth/Login'
import Register from '../pages/auth/Register'

export const router = createBrowserRouter([
	{
		path: '/',
		element: (
			<UserMainLayout>
				<HomePage />
			</UserMainLayout>
		),
	},

	{
		path: '/posts',
		element: (
			<UserMainLayout>
				<PostsPage />
			</UserMainLayout>
		),
	},

	{
		path: '/posts/:postId',
		element: (
			<UserMainLayout>
				<PostDetailPage />
			</UserMainLayout>
		),
	},

	{
		path: '/posts/create',
		element: (
			<UserMainLayout>
				<PostCreatePage />
			</UserMainLayout>
		),
	},

	{
		path: '/categories',
		element: <UserMainLayout>Category Page</UserMainLayout>,
	},

	{
		path: '/categories/:categoryId',
		element: <UserMainLayout>Category Page</UserMainLayout>,
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
		path: '/register',
		element: (
			<AuthLayout>
				<Register />
			</AuthLayout>
		),
	},
])
