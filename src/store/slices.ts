import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { deleteOrder, deleteProduct, fetchDetailOrder, fetchOrderList, fetchProductList, fetchproductListBySelect } from './api';
import { IOrder, IProduct } from '../types/types';
import { initOrder, initProduct } from './initObj';

export interface IDzenCodeState {
  orderList: IOrder[];
  productList: IProduct[],
  detailOrder: IProduct[]
  isDetailOrder: boolean
  dataSelect: { type?: string, specefication?: string },
  isDelete: boolean,
  deleteOrder: IOrder
  deleteProduct: IProduct,
  isLoading: boolean,
  error: string | null;
}

const initialState: IDzenCodeState = {
  orderList: [],
  productList: [],
  detailOrder: [],
  isDetailOrder: false,
  dataSelect: {},
  isDelete: false,
  deleteOrder: initOrder,
  deleteProduct: initProduct,
  isLoading: false,
  error: null,
}

export const dzenCodeSlice = createSlice({
  name: 'dzenCode',
  initialState,
  reducers: {
    isDetailOrder: (state) => {
      state.isDetailOrder = !state.isDetailOrder
    },

    dataSelectChange: (state, action: PayloadAction<{ type?: string; specification?: string }>) => {
      state.dataSelect = { ...state.dataSelect, ...action.payload }
    },

    handleDelete: (state) => {
      state.isDelete = !state.isDelete
    },

    addDeleteOrder: (state, action) => {
      state.deleteOrder = action.payload
    },

    addDeleteProduct: (state, action) => {
      state.deleteProduct = action.payload
    }
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchOrderList.pending, (state) => {
        state.isLoading = true;
        state.error = null;
        state.isDetailOrder = false

      })
      .addCase(fetchOrderList.fulfilled, (state, action) => {
        // state.isDetailOrder = false
        state.orderList = action.payload
        state.isLoading = false;
        state.error = null;
      })
      .addCase(fetchOrderList.rejected, (state, action) => {
        state.isLoading = false;
        state.isDetailOrder = false
        state.error = action.error.message ?? 'Failed to fetch order list';
      }),

      builder
        .addCase(fetchProductList.pending, (state) => {
          state.isLoading = true;
          state.error = null;
        })
        .addCase(fetchProductList.fulfilled, (state, action) => {
          state.productList = action.payload;
          state.isLoading = false;
        })
        .addCase(fetchProductList.rejected, (state, action) => {
          state.isLoading = false;
          state.error = action.error.message ?? 'Failed to fetch product list';
        }),



      builder
        .addCase(fetchDetailOrder.pending, (state) => {
          state.isLoading = true;
          state.error = null;
        })
        .addCase(fetchDetailOrder.fulfilled, (state, action) => {
          state.detailOrder = action.payload
          state.isDetailOrder = true
        })
        .addCase(fetchDetailOrder.rejected, (state, action) => {
          state.isLoading = false;
          state.error = action.error.message ?? 'Failed to fetch detail order list';
        }),

      builder
        .addCase(fetchproductListBySelect.pending, (state) => {
          state.isLoading = true;
          state.error = null;
        })
        .addCase(fetchproductListBySelect.fulfilled, (state, action) => {
          state.productList = action.payload
        })
        .addCase(fetchproductListBySelect.rejected, (state, action) => {
          state.isLoading = false;
          state.error = action.error.message ?? 'Failed to fetch product list';
        }),

      builder.addCase(deleteProduct.fulfilled, (state, action) => {
        state.productList = state.productList.filter(product => product.id !== action.payload.id)//TODO Will be better use filter or new fetch
        state.detailOrder = state.detailOrder.filter(product => product.id !== action.payload.id)
        state.deleteProduct = initProduct
      })

    builder.addCase(deleteOrder.fulfilled, (state, action) => {
      state.orderList = state.orderList.filter(order => order.id !== action.payload.id)//TODO Will be better use filter or new fetch
      state.deleteOrder = initOrder
    })
  },
})

export const { isDetailOrder, dataSelectChange, handleDelete, addDeleteOrder, addDeleteProduct } = dzenCodeSlice.actions
export default dzenCodeSlice.reducer