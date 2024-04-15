import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { IOrder } from '../components/Order/Order';
import { fetchDetailOrder, fetchOrderList, fetchProductList, fetchProductListAndOrderList } from './api/api';
import { IProduct } from '../components/Product/Product';

export interface IDzenCodeState {
  orderList: IOrder[];
  productList: IProduct[]
  orderListWithProduct: IOrder[],
  detailOrder: IProduct[]
  isDetailOrder: boolean
  value: number
}

const initialState: IDzenCodeState = {
  orderList: [],
  productList: [],
  orderListWithProduct: [],
  detailOrder: [],
  isDetailOrder: false,
  value: 0
}

export const dzenCodeSlice = createSlice({
  name: 'dzenCode',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload
    },

    isDetailOrder: (state) => {
      state.isDetailOrder = false
    }
  },

  extraReducers: (builder) => {
    builder.addCase(fetchOrderList.fulfilled, (state, action) => {
      state.orderList = action.payload
    })

    builder.addCase(fetchProductList.fulfilled, (state, action) => {
      state.productList = action.payload
    })

    builder.addCase(fetchProductListAndOrderList.fulfilled, (state, action) => {
      state.orderListWithProduct = action.payload
    })

    builder.addCase(fetchDetailOrder.fulfilled, (state, action) => {
      state.detailOrder = action.payload
      state.isDetailOrder = true
    })
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount, isDetailOrder } = dzenCodeSlice.actions
export default dzenCodeSlice.reducer