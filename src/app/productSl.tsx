import { Api } from '@/utils/config'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'


const initialState = {
  data: [],
  loading: false,
  loadingCat: false,
  dataCat: [],
  dataById: []
}

export const GetProd = createAsyncThunk(
  "products/GetProd",
  async () => {
    try {
      const { data } = await Api.get(`Product/get-products`)
      return data
    } catch (error) { console.error(error) }
  })

export const GetCat = createAsyncThunk(
  "category/GetCat",
  async () => {
    try {
      const { data } = await Api.get(`Category/get-categories`)
      return data
    } catch (error) { console.error(error) }
  }
)


export const getByIdData = createAsyncThunk(
  "counter/getById",
  async ({ catId, subId }) => {
    try {
      const { data } = await Api.get(`get-products?CategoryId=${catId}&SubcategoryId=${subId}`)
      return data
    } catch (error) { console.error(error) }
  }
)





export const products = createSlice({
  name: 'counter',
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(GetProd.pending, (state) => {
        state.loading = true
      })
      .addCase(GetProd.fulfilled, (state, { payload }) => {
        state.loading = false,
          state.data = payload.data.products
      })
      .addCase(GetCat.pending, (state) => {
        state.loadingCat = true
      })
      .addCase(GetCat.fulfilled, (state, { payload }) => {
        state.loadingCat = false
        state.dataCat = payload.data
      })

      .addCase(getByIdData.fulfilled, (state, { payload }) => {
        state.dataById = payload.data.products
      })
  }
})

export const { } = products.actions

export default products.reducer
