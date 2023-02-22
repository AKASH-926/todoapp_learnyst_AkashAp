import { configureStore } from '@reduxjs/toolkit'
import { TodoSlice } from './Reducers'
const store = configureStore({
    reducer: TodoSlice.reducer
})


export default store