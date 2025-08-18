import { todoSlice } from '@/reducers/todoSlice'
import { configureStore } from '@reduxjs/toolkit'
// Or from '@reduxjs/toolkit/query/react'
import { setupListeners } from '@reduxjs/toolkit/query'
import themeReducer from '@/reducers/theme';
import products from '@/app/productSl';


export const store = configureStore({
  reducer: { theme: themeReducer, prod: products, },
})


setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
