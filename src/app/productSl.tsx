import { Api } from '@/utils/config'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'


const initialState = {
  data: [],
  loading: false,
  loadingCat: false,
  dataCat: [],
  dataById: [],
  dataId: [],
  loadDec: false,
  loadCorLen: false,
  dataWish: JSON.parse(localStorage.getItem("wishRed")) || []
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
  async ({ catId, subId }: { catId: string | number, subId: string | number }) => {
    try {
      const { data } = await Api.get(`Product/get-products?CategoryId=${catId}&SubcategoryId=${subId}`)
      return data
    } catch (error) { console.error(error) }
  }
)


export const corzina = createAsyncThunk(
  "counter/corzina",
  async () => {
    try {
      const { data } = await Api.get(`Cart/get-products-from-cart`)
      return data
    } catch (error) {

    }
  }
)

export const adToCart = createAsyncThunk(
  "counter/adToCart",
  async (id) => {
    try {
      await Api.post(`Cart/add-product-to-cart?id=${id}`)
    } catch (error) { console.error(error) }
  }
)

export const delToCart = createAsyncThunk(
  "counter/adToCart",
  async (id) => {
    try {
      await Api.delete(`Cart/delete-product-from-cart?id=${id}`)
    } catch (error) { console.error(error) }
  }
)

export const inCremCart = createAsyncThunk(
  "counter/inCremCart",
  async (id) => {
    try {
      await Api.put(`Cart/increase-product-in-cart?id=${id}`)
    } catch (error) { console.error(error) }
  }
)

export const AllDecCart = createAsyncThunk(
  "counter/AllDecCart",
  async () => {
    try {
      await Api.delete(`Cart/clear-cart`)
    } catch (error) { console.error(error) }
  }
)

export const DecCart = createAsyncThunk(
  "counter/inCremCart",
  async (id) => {
    try {
      await Api.put(`Cart/reduce-product-in-cart?id=${id}`)
    } catch (error) { console.error(error) }
  }
)


export const products = createSlice({
  name: 'counter',
  initialState,

  reducers: {
    AddWishRed: (state, { payload: e }) => {
      const wish = state.dataWish
      const id = wish.find((el: any) => el.id === e.id);
      if (id) {
        const newWish = wish.filter((el: any) => el.id !== id.id);
        state.dataWish = newWish
        localStorage.setItem("wishRed", JSON.stringify(newWish));
      } else {
        const update = [...wish, e];
        state.dataWish = update
        localStorage.setItem("wishRed", JSON.stringify(update));
      }
    },
    clearWish: (state) => {
      state.dataWish = [],
        localStorage.setItem("wishRed", JSON.stringify([]))
    }
  },



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
      .addCase(corzina.pending, (state) => {
        state.loadCorLen = true
      })
      .addCase(corzina.fulfilled, (state, { payload }) => {
        state.loadCorLen = false
        state.dataId = payload?.data[0]
      })
      .addCase(DecCart.pending, (state) => {
        state.loadDec = true
      })
      .addCase(DecCart.fulfilled, (state) => {
        state.loadDec = false
      })
  }
})

export const { AddWishRed, clearWish } = products.actions


export default products.reducer
