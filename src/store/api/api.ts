import { createAsyncThunk } from '@reduxjs/toolkit'
import { IOrder } from '../../components/Order/Order';
import { IProduct } from '../../components/Product/Product';

const API_URL: string = "http://localhost:3000/"

export const fetchOrderList = createAsyncThunk(
  'orders', async () => {

    try {
      const response = await fetch(`${API_URL}orders`)
      if (!response.ok) {
        throw new Error('Error fetching news list');
      }
      return response.json()
    }
    catch (error: any) {
      throw new Error(error.message);
    }
  })

export const fetchProductList = createAsyncThunk(
  'products', async () => {

    try {
      const response = await fetch(`${API_URL}products`)
      if (!response.ok) {
        throw new Error('Error fetching news list');
      }
      return response.json()
    }
    catch (error: any) {
      throw new Error(error.message);
    }
  })


export const fetchProductListAndOrderList = createAsyncThunk(
  'productsAndOrders', async () => {

    try {
      const orderResponse = await fetch(`${API_URL}orders`)
      const productResponse = await fetch(`${API_URL}products`)

      if (!orderResponse.ok || !productResponse.ok) {
        throw new Error('Error fetching news list');
      }

      const orderList: IOrder[] = await orderResponse.json()
      const productList: IProduct[] = await productResponse.json()


      console.log("productListFetch", productList);

      const orderWithProduct = orderList.map((order) => {
        return { ...order, products: productList.filter((product) => product.order.toString() === order.id) }
      })

      console.log('orderWithProduct', orderWithProduct);

      return orderWithProduct
    }
    catch (error: any) {
      throw new Error(error.message);
    }
  })


export const fetchDetailOrder = createAsyncThunk(
  'detailOrder', async (id: string | undefined) => {

    try {
      const response = await fetch(`${API_URL}products`)
      if (!response.ok) {
        throw new Error('Error fetching news list');
      }

      const productList: IProduct[] = await response.json()
      const result = productList.filter((product) => product.order.toString() === id)
      return result
    }
    catch (error: any) {
      throw new Error(error.message);
    }
  })

