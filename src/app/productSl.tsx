import { Api } from '@/utils/config'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'


export interface Product {
  id: number;
  productName: string;
  image: string;
  color: string;
  price: number;
  hasDiscount: boolean;
  discountPrice: number;
  quantity: number;
  productInMyCart: boolean;
  categoryId: number;
  categoryName: string;
  productInfoFromCart: any | null;
}


export interface Color {
  id: number;
  colorName: string;
}


export interface Brand {
  id: number;
  brandName: string;
}


export interface MinMaxPrice {
  minPrice: number;
  maxPrice: number;
}


export interface ProductsData {
  products: Product[];
  colors: Color[];
  brands: Brand[];
  minMaxPrice: MinMaxPrice;
}


export interface ProductsResponse {
  pageNumber: number;
  pageSize: number;
  totalPage: number;
  totalRecord: number;
  data: ProductsData;
  errors: string[];
  statusCode: number;
}

const initialState = {
  data: [],
  loading: false,
  loadingCat: false,
  dataCat: [],
  dataById: [],
  dataId: [],
  loadDec: false,
  loadCorLen: false,
  dataWish: JSON.parse(localStorage.getItem("wishRed") || "[]"),
  dataInfo: [],
  loadInfo: false,
  dataSea: "",
  loadSear: false,
  dataprofile: {},
  loadiProfile: false
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
  "counter/delToCart",
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

export const GetInfo = createAsyncThunk(
  "counter/GetInfo",
  async (id) => {

    try {
      const { data } = await Api.get(`Product/get-product-by-id?id=${id}`)
      return data
    } catch (error) {

    }
  }
)


export const SearProduct = createAsyncThunk(
  "counter/SearProduct",
  async (val) => {
    try {
      const { data } = await Api.get(`Product/get-products?ProductName=${val}`)
      return data
    } catch (error) { console.error(error) }
  }
)

export const getMyProfile = createAsyncThunk(
  "counter/getMyProfile",
  async (id) => {
    try {
      const { data } = await Api.get(`UserProfile/get-user-profile-by-id?id=${id}`)
      return data
    } catch (error) { console.error(error) }
  }
)

export const editProfile = createAsyncThunk(
  "counter/editProfile",
  async (fd) => {
    try {
      await Api.put(`UserProfile/update-user-profile`, fd)
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
        console.log("corzina pending")
        state.loadCorLen = true
      })
      .addCase(corzina.fulfilled, (state, { payload }) => {
        console.log("corzina fulfilled")
        state.loadCorLen = false
        state.dataId = payload?.data[0]
      })
      .addCase(DecCart.pending, (state) => {
        state.loadDec = true
      })
      .addCase(DecCart.fulfilled, (state) => {
        state.loadDec = false
      })
      .addCase(GetInfo.pending, (state) => {
        state.loadInfo = true
      })
      .addCase(GetInfo.fulfilled, (state, { payload }) => {
        state.loadInfo = false
        state.dataInfo = payload?.data
      })
      .addCase(SearProduct.pending, (state) => {
        state.loadSear = true
      })
      .addCase(SearProduct.fulfilled, (state, { payload }) => {
        state.loadSear = false
        state.dataSea = payload?.data.products
      })
      .addCase(getMyProfile.pending, (state) => {
        state.loadiProfile = true
      })
      .addCase(getMyProfile.fulfilled, (state, { payload }) => {
        state.loadiProfile = false
        state.dataprofile = payload.data

      })

  }
})

export const { AddWishRed, clearWish } = products.actions


export default products.reducer
