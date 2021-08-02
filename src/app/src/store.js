import { configureStore } from '@reduxjs/toolkit'
import userReducer from './reducers/users-slice'

export default configureStore({
    reducer: {
        user: userReducer
    },
})