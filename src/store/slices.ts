import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { IOrder } from '../components/Order/Order';

export interface IDzenCodeState {
  orderList: IOrder[];
  value: number
}
const initialOrderListState: IOrder[] = [{
  "id": 0,
  "title": "",
  "date": "",
  "description": "",
  "products": [
    { "id": 0 }
  ]
}]

const initialState: IDzenCodeState = {
  orderList: initialOrderListState,
  value: 0

}

export const dzenCodeSlice = createSlice({
  name: 'dzenCode',
  initialState,
  reducers: {
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = dzenCodeSlice.actions

export default dzenCodeSlice.reducer