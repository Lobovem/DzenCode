import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { IOrder } from '../components/Order/Order';
import { deleteOrder, deleteProduct, fetchDetailOrder, fetchOrderList, fetchProductList, fetchProductListAndOrderList, fetchproductListBySelect } from './api';
import { IProduct } from '../components/Product/Product';

export interface IDzenCodeState {
  orderList: IOrder[];
  productList: IProduct[]
  orderListWithProduct: IOrder[],
  detailOrder: IProduct[]
  isDetailOrder: boolean
  value: number
  dataSelect: { type?: string, specefication?: string }
}

const initialState: IDzenCodeState = {
  orderList: [],
  productList: [],
  orderListWithProduct: [],
  detailOrder: [],
  isDetailOrder: false,
  value: 0,
  dataSelect: {}
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
    },

    dataSelectChange: (state, action) => {
      state.dataSelect = { ...state.dataSelect, ...action.payload }
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

    builder.addCase(fetchproductListBySelect.fulfilled, (state, action) => {
      state.productList = action.payload
    })

    builder.addCase(deleteProduct.fulfilled, (state, action) => {
      state.productList = state.productList.filter(product => product.id !== action.payload.id)//TODO Will be better use filter or new fetch
      state.productList = state.productList.filter(product => product.id !== action.payload.id)//TODO Will be better use filter or new fetch
      state.detailOrder = state.detailOrder.filter(product => product.id !== action.payload.id)//TODO Will be better use filter or new fetch
    })

    builder.addCase(deleteOrder.fulfilled, (state, action) => {
      state.orderListWithProduct = state.orderListWithProduct.filter(order => order.id !== action.payload.id)//TODO Will be better use filter or new fetch

    })
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount, isDetailOrder, dataSelectChange } = dzenCodeSlice.actions
export default dzenCodeSlice.reducer