import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
    name: 'users',
    initialState: {
        username: '',
    },
    reducers: {
        login: (state) => {
            state.username = 'admin'
        }
    }
})

export const { login } = userSlice.actions

export default userSlice.reducer