import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { IOrder } from '../components/Order/Order';
import { deleteOrder, deleteProduct, fetchDetailOrder, fetchOrderList, fetchProductList, fetchOrderListWithProductList, fetchproductListBySelect } from './api';
import { IProduct } from '../components/Product/Product';

export interface IDzenCodeState {
  orderList: IOrder[];
  productList: IProduct[],
  detailOrder: IProduct[]
  isDetailOrder: boolean
  dataSelect: { type?: string, specefication?: string },
  isDelete: boolean,
  deleteItem: any
}

const initialState: IDzenCodeState = {
  orderList: [],
  productList: [],
  detailOrder: [],
  isDetailOrder: false,
  dataSelect: {},
  isDelete: false,
  deleteItem: ''//TODO add TS
}

export const dzenCodeSlice = createSlice({
  name: 'dzenCode',
  initialState,
  reducers: {
    isDetailOrder: (state) => {
      state.isDetailOrder = !state.isDetailOrder
    },

    dataSelectChange: (state, action) => {
      state.dataSelect = { ...state.dataSelect, ...action.payload }
    },

    handleDelete: (state) => {
      state.isDelete = !state.isDelete
    },

    addDeleteItem: (state, action) => {
      state.deleteItem = action.payload
    }
  },

  extraReducers: (builder) => {
    builder.addCase(fetchProductList.fulfilled, (state, action) => {
      state.productList = action.payload
    }),

      builder.addCase(fetchOrderList.fulfilled, (state, action) => {
        state.isDetailOrder = false
        state.orderList = action.payload
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
      state.detailOrder = state.detailOrder.filter(product => product.id !== action.payload.id)//TODO Will be better use filter or new fetch
      state.deleteItem = ''
    })

    builder.addCase(deleteOrder.fulfilled, (state, action) => {
      state.orderList = state.orderList.filter(order => order.id !== action.payload.id)//TODO Will be better use filter or new fetch
      state.deleteItem = ''

    })
  },
})

export const { increment, decrement, incrementByAmount, isDetailOrder, dataSelectChange, handleDelete, addDeleteItem } = dzenCodeSlice.actions
export default dzenCodeSlice.reducer