import { createAsyncThunk } from '@reduxjs/toolkit'
import { IOrder } from '../components/Order/Order';
import { IProduct } from '../components/Product/Product';

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

export const fetchProductListWithOrdersName = createAsyncThunk(
  'productListWithOrdersName', async () => {

    try {
      const productResponse = await fetch(`${API_URL}products`)
      const orderResponse = await fetch(`${API_URL}orders`)

      if (!orderResponse.ok || !productResponse.ok) {
        throw new Error('Error fetching news list');
      }

      const orderList: IOrder[] = await orderResponse.json()
      const productList: IProduct[] = await productResponse.json()

      const productListWithOrdersName = productList.map((product) => {
        return { ...product, orderName: orderList.find((order) => order.id === product.order.toString())?.title }
      })

      return productListWithOrdersName
    }
    catch (error: any) {
      throw new Error(error.message);
    }
  })


export const fetchOrderListWithProductList = createAsyncThunk(
  'orderListWithProductList', async () => {

    try {
      const orderResponse = await fetch(`${API_URL}orders`)
      const productResponse = await fetch(`${API_URL}products`)

      if (!orderResponse.ok || !productResponse.ok) {
        throw new Error('Error fetching news list');
      }

      const orderList: IOrder[] = await orderResponse.json()
      const productList: IProduct[] = await productResponse.json()

      const orderWithProduct = orderList.map((order) => {
        return { ...order, products: productList.filter((product) => product.order.toString() === order.id) }
      })

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

export const fetchproductListBySelect = createAsyncThunk(
  'productListBySelect',
  async ({ type, specification }: { type?: string | undefined, specification?: string | undefined }) => {

    try {
      let url = `${API_URL}products`;

      if (type && specification) {
        url += `?type=${type}&specification=${specification}`;
      } else if (type) {
        url += `?type=${type}`;
      } else if (specification) {
        url += `?specification=${specification}`;
      }

      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Error fetching news list');
      }

      return response.json();
    } catch (error: any) {
      throw new Error(error.message);
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
          // Добавьте любые другие необходимые заголовки, такие как авторизация
        },
      });
      if (!response.ok) {
        throw new Error('Error fetching news list');
      }

      return response.json();
    } catch (error: any) {
      throw new Error(error.message);
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
          // Добавьте любые другие необходимые заголовки, такие как авторизация
        },
      });
      if (!response.ok) {
        throw new Error('Error fetching news list');
      }

      return response.json();
    } catch (error: any) {
      throw new Error(error.message);
    }
  }
);



// export const deleteOrder = createAsyncThunk(
//   'deleteOrder', async (id: string) => {

//     try {
//       const response = await fetch(`${API_URL}orders/${id}`, {
//         method: 'DELETE',
//         headers: {
//           'Content-Type': 'application/json',
//           // Добавьте любые другие необходимые заголовки, такие как авторизация
//         },
//       });
//       if (!response.ok) {
//         throw new Error('Error fetching news list');
//       }

//       return response.json();
//     } catch (error: any) {
//       throw new Error(error.message);
//     }
//   }
// );


