// src/store/productsSlice.ts
import { createAsyncThunk, createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { Api } from '@/utils/config'

// ---------------------
// Types
// ---------------------
export interface Product {
  id: string | number
  productName: string
  price: number
  image: string
  [key: string]: any
}

export interface Category {
  id: string | number
  name: string
  [key: string]: any
}

export interface ProductState {
  data: Product[]
  loading: boolean
  loadingCat: boolean
  dataCat: Category[]
  dataById: Product[]
}

// ---------------------
// Initial State
// ---------------------
const initialState: ProductState = {
  data: [],
  loading: false,
  loadingCat: false,
  dataCat: [],
  dataById: []
}

// ---------------------
// Async Thunks
// ---------------------
export const GetProd = createAsyncThunk<Product[], void>(
  "products/GetProd",
  async () => {
    try {
      const { data } = await Api.get(`Product/get-products`)
      return data.products as Product[]
    } catch (error) {
      console.error(error)
      return []
    }
  }
)

export const GetCat = createAsyncThunk<Category[], void>(
  "category/GetCat",
  async () => {
    try {
      const { data } = await Api.get(`Category/get-categories`)
      return data as Category[]
    } catch (error) {
      console.error(error)
      return []
    }
  }
)

export const getByIdData = createAsyncThunk<Product[], { catId: string | number, subId: string | number }>(
  "products/getById",
  async ({ catId, subId }) => {
    try {
      const { data } = await Api.get(`Product/get-products?CategoryId=${catId}&SubcategoryId=${subId}`)
      return data.products as Product[]
    } catch (error) {
      console.error(error)
      return []
    }
  }
)

// ---------------------
// Slice
// ---------------------
export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    // Агар лозим бошад, local reducers ҳам илова кун
    clearDataById(state) {
      state.dataById = []
    }
  },
  extraReducers: (builder) => {
    builder
      // GetProd
      .addCase(GetProd.pending, (state) => { state.loading = true })
      .addCase(GetProd.fulfilled, (state, action: PayloadAction<Product[]>) => {
        state.loading = false
        state.data = action.payload
      })
      .addCase(GetProd.rejected, (state) => { state.loading = false })

      // GetCat
      .addCase(GetCat.pending, (state) => { state.loadingCat = true })
      .addCase(GetCat.fulfilled, (state, action: PayloadAction<Category[]>) => {
        state.loadingCat = false
        state.dataCat = action.payload
      })
      .addCase(GetCat.rejected, (state) => { state.loadingCat = false })

      // getByIdData
      .addCase(getByIdData.fulfilled, (state, action: PayloadAction<Product[]>) => {
        state.dataById = action.payload
      })
  }
})

// ---------------------
// Export
// ---------------------
export const { clearDataById } = productsSlice.actions
export default productsSlice.reducer
