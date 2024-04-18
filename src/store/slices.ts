import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { deleteOrder, deleteProduct, fetchDetailOrder, fetchOrderList, fetchProductList, fetchproductListBySelect } from './api';
import { IOrder, IProduct } from '../types/types';
import { initOrder, initProduct } from './initObj';

export interface IDzenCodeState {
  orderList: IOrder[];
  productList: IProduct[],
  detailOrder: IProduct[]
  statusDetailOrder: boolean
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
  statusDetailOrder: false,
  dataSelect: { type: '', specefication: '' },
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
    handleDetailOrder: (state) => {
      state.statusDetailOrder = !state.statusDetailOrder
    },

    disableDetailOrder: (state) => {
      state.statusDetailOrder = false
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
        state.statusDetailOrder = false

      })
      .addCase(fetchOrderList.fulfilled, (state, action) => {
        state.orderList = action.payload
        state.isLoading = false;
        state.error = null;
      })
      .addCase(fetchOrderList.rejected, (state, action) => {
        state.isLoading = false;
        state.statusDetailOrder = false
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
          state.error = null;
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
          state.statusDetailOrder = true
          state.isLoading = false;
          state.error = null;
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
          state.isLoading = false;
          state.error = null;
        })
        .addCase(fetchproductListBySelect.rejected, (state, action) => {
          state.isLoading = false;
          state.error = action.error.message ?? 'Failed to fetch product list';
        }),

      builder.addCase(deleteProduct.fulfilled, (state, action) => {
        state.productList = state.productList.filter(product => product.id !== action.payload.id)
        state.detailOrder = state.detailOrder.filter(product => product.id !== action.payload.id)
        state.deleteProduct = initProduct
      })

    builder.addCase(deleteOrder.fulfilled, (state, action) => {
      state.orderList = state.orderList.filter(order => order.id !== action.payload.id)
      state.deleteOrder = initOrder
    })
  },
})

export const { handleDetailOrder, dataSelectChange, handleDelete, addDeleteOrder, addDeleteProduct, disableDetailOrder } = dzenCodeSlice.actions
export default dzenCodeSlice.reducer