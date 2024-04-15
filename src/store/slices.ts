import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { IOrder } from '../components/Order/Order';
import { fetchOrderList, fetchProductList } from './api/api';
import { IProduct } from '../components/Product/Product';

export interface IDzenCodeState {
  orderList: IOrder[];
  productList: IProduct[]
  value: number
}

const initialState: IDzenCodeState = {
  orderList: [],
  productList: [],
  value: 0
}

export const dzenCodeSlice = createSlice({
  name: 'dzenCode',
  initialState,
  reducers: {
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload
    },
  },

  extraReducers: (builder) => {
    builder.addCase(fetchOrderList.fulfilled, (state, action) => {
      state.orderList = action.payload
    })

    builder.addCase(fetchProductList.fulfilled, (state, action) => {
      state.productList = action.payload
    })
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = dzenCodeSlice.actions

export default dzenCodeSlice.reducer