import { configureStore } from '@reduxjs/toolkit'
import dzenCodeSlice from './slices'

export const store = configureStore({
  reducer: {
    dzenCode: dzenCodeSlice,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch