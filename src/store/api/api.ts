import { createAsyncThunk } from '@reduxjs/toolkit'

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


