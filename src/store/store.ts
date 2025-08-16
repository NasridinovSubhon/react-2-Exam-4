import { todoSlice } from '@/reducers/todoSlice'
import { configureStore } from '@reduxjs/toolkit'
// Or from '@reduxjs/toolkit/query/react'
import { setupListeners } from '@reduxjs/toolkit/query'
import themeReducer from '@/reducers/theme';


export const store = configureStore({
  reducer: {
    [todoSlice.reducerPath]: todoSlice.reducer,
    theme: themeReducer,


  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(todoSlice.middleware),
})


setupListeners(store.dispatch)
