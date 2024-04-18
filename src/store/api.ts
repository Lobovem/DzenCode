import { createAsyncThunk } from '@reduxjs/toolkit'
import { IOrder, IProduct } from '../types/types'
import { errorBuilder } from '../utils/errorBuilder'

const API_URL: string = "http://localhost:3000/"

export const fetchOrderList = createAsyncThunk(
  'orders', async () => {

    try {
      const orderResponse = await fetch(`${API_URL}orders`)
      const productResponse = await fetch(`${API_URL}products`)

      if (!orderResponse.ok || !productResponse.ok) {
        throw new Error('Error fetching news list');
      }

      const orderList: IOrder[] = await orderResponse.json()
      const productList: IProduct[] = await productResponse.json()

      const result = orderList.map(order => {
        let totalPriceUSD = 0;
        let totalPriceUAH = 0;

        const productCount = productList.filter((product) => product.order.toString() === order.id)

        productList.filter((product) => product.order.toString() === order.id).forEach(product => {
          product.price.forEach(price => {
            if (price.symbol === "USD") {
              totalPriceUSD += price.value;
            } else if (price.symbol === "UAH") {
              totalPriceUAH += price.value;
            }
          });
        });

        return {
          ...order,
          totalPrice: [{
            value: totalPriceUSD, symbol: "USD", isDefault: false
          },
          {
            value: totalPriceUAH, symbol: "UAH", isDefault: true
          }],
          productCount: productCount.length
        };
      });

      return result
    }
    catch (error) {
      errorBuilder(error)
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
    catch (error) {
      errorBuilder(error)
    }
  })

export const fetchproductListBySelect = createAsyncThunk(
  'productListBySelect',
  async ({ type, specification }: { type?: string | undefined, specification?: string | undefined }) => {

    let url = `${API_URL}products`;
    if (type && specification) {
      url += `?type=${type}&specification=${specification}`;
    } else if (type) {
      url += `?type=${type}`;
    } else if (specification) {
      url += `?specification=${specification}`;
    }

    try {
      const productResponse = await fetch(url);
      const orderResponse = await fetch(`${API_URL}orders`)

      if (!orderResponse.ok || !productResponse.ok) {
        throw new Error('Error fetching news list');
      }

      const orderList: IOrder[] = await orderResponse.json()
      const productList: IProduct[] = await productResponse.json()

      const result = productList.map((product) => {
        return { ...product, orderName: orderList.find((order) => order.id === product.order.toString())?.title }
      })

      return result

    } catch (error) {
      errorBuilder(error)
    }
  }
);

export const deleteProduct = createAsyncThunk(
  'deleteProduct', async (id: string | undefined) => {

    try {
      const response = await fetch(`${API_URL}products/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (!response.ok) {
        throw new Error('Error fetching news list');
      }

      return response.json();
    } catch (error) {
      errorBuilder(error)
    }
  }
);

export const deleteOrder = createAsyncThunk(
  'deleteOrder', async (id: string) => {

    try {
      const response = await fetch(`${API_URL}orders/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (!response.ok) {
        throw new Error('Error fetching news list');
      }

      return response.json();
    } catch (error) {
      errorBuilder(error)
    }
  }
);



