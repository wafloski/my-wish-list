import { configureStore } from '@reduxjs/toolkit';
import { todoApi, wishlistApi } from './apiSlice';

export const store = configureStore({
  reducer: {
    [wishlistApi.reducerPath]: wishlistApi.reducer,
    [todoApi.reducerPath]: todoApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(todoApi.middleware)
      .concat(wishlistApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;