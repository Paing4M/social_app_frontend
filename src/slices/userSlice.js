import { createSlice } from '@reduxjs/toolkit'
import {
	getLocatStorage,
	removeLocatStorage,
	setLocatStorage,
} from '../helpers/localStorage'

const initialState = {
	user: getLocatStorage('user'),
}

export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		setUser: (state, action) => {
			state.user = action.payload
			setLocatStorage('user', action.payload)
		},

		removeUser: (state) => {
			state.user = null
			removeLocatStorage('user')
		},
	},
})

export const { setUser } = userSlice.actions
export default userSlice.reducer
