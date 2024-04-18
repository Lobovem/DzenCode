import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { deleteOrder, fetchDeleteProduct, fetchDetailOrder, fetchOrderList, fetchproductListBySelect } from './api';
import { IItemToDelete, IOrder, IProduct } from '../types/types';
import { initItem, initProduct } from './initObj';

export interface IDzenCodeState {
  orderList: IOrder[];
  productList: IProduct[],
  detailOrder: IProduct[]
  statusDetailOrder: boolean
  dataSelect: { type?: string, specification?: string },
  isDelete: boolean,
  deleteItem: IItemToDelete
  isLoading: boolean,
  isLoadingDetail: boolean,
  isLoadingProduct: boolean,
  errorOrderDetail: string | null;
  errorProductList: string | null;
  errorOrderList: string | null;
  handleDeleteItem: () => void
}

const initialState: IDzenCodeState = {
  orderList: [],
  productList: [],
  detailOrder: [],
  statusDetailOrder: false,
  dataSelect: {},
  isDelete: false,
  deleteItem: initItem,
  isLoading: false,
  isLoadingDetail: false,
  isLoadingProduct: false,
  errorOrderDetail: null,
  errorProductList: null,
  errorOrderList: null,
  handleDeleteItem: () => { }
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

    handlePopUpOpen: (state) => {
      state.isDelete = !state.isDelete
    },

    addDeleteOrder: (state, action) => {
      state.deleteItem = action.payload
    },

    addItemToDelete: (state, action) => {
      state.deleteItem = action.payload
    },

    addHandleDeleteItem: (state, action) => {
      state.handleDeleteItem = action.payload
    }
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchOrderList.pending, (state) => {
        state.isLoading = true;
        state.errorOrderList = null;
        state.statusDetailOrder = false

      })
      .addCase(fetchOrderList.fulfilled, (state, action) => {
        state.isLoading = false;
        state.errorOrderList = null;
        state.orderList = action.payload
      })
      .addCase(fetchOrderList.rejected, (state, action) => {
        state.isLoading = false;
        state.statusDetailOrder = false
        state.errorOrderList = action.error.message ?? 'Failed to fetch order list';
      }),

      // builder
      //   .addCase(fetchProductList.pending, (state) => {
      //     state.isLoading = true;
      //     state.error = null;
      //   })
      //   .addCase(fetchProductList.fulfilled, (state, action) => {
      //     state.isLoading = false;
      //     state.error = null;
      //     state.productList = action.payload;
      //   })
      //   .addCase(fetchProductList.rejected, (state, action) => {
      //     state.isLoading = false;
      //     state.error = action.error.message ?? 'Failed to fetch product list';
      //   }),

      builder
        .addCase(fetchDetailOrder.pending, (state) => {
          state.isLoadingDetail = true;
          state.errorOrderDetail = null;
        })
        .addCase(fetchDetailOrder.fulfilled, (state, action) => {
          state.statusDetailOrder = true
          state.isLoadingDetail = false;
          state.errorOrderDetail = null;
          state.detailOrder = action.payload
        })
        .addCase(fetchDetailOrder.rejected, (state, action) => {
          state.isLoadingDetail = false;
          state.errorOrderDetail = action.error.message ?? 'Failed to fetch detail order list';
        }),

      builder
        .addCase(fetchproductListBySelect.pending, (state) => {
          state.isLoadingProduct = true;
          state.errorProductList = null;
        })
        .addCase(fetchproductListBySelect.fulfilled, (state, action) => {

          state.isLoadingProduct = false;
          state.errorProductList = null;
          state.productList = action.payload
        })
        .addCase(fetchproductListBySelect.rejected, (state, action) => {
          state.isLoadingProduct = false;
          state.errorProductList = action.error.message ?? 'Failed to fetch product list';
        }),

      builder.addCase(fetchDeleteProduct.fulfilled, (state, action) => {
        state.productList = state.productList.filter(product => product.id !== action.payload.id)
        state.detailOrder = state.detailOrder.filter(product => product.id !== action.payload.id)
        state.deleteItem = initProduct
      }),

      builder.addCase(deleteOrder.fulfilled, (state, action) => {
        state.orderList = state.orderList.filter(order => order.id !== action.payload.id)
        state.deleteItem = initItem
      })
  },
})

export const { handleDetailOrder, dataSelectChange, addHandleDeleteItem, handlePopUpOpen, addDeleteOrder, addItemToDelete, disableDetailOrder } = dzenCodeSlice.actions
export default dzenCodeSlice.reducer