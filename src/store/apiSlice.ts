import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

interface WishlistItem {
  id: string;
  name: string;
}

interface TodoItem {
  id: string;
  task: string;
  completed: boolean
}

export const wishlistApi = createApi({
  reducerPath: 'wishlistApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3005/' }),
  tagTypes: ['Wishlist'],
  endpoints: (builder) => ({
    getWishlist: builder.query<WishlistItem[], void>({
      query: () => 'wishlist',
      providesTags: ['Wishlist'],
    }),
    addWishlistItem: builder.mutation({
      query: (newWish) => ({
        url: 'wishlist',
        method: 'POST',
        body: newWish,
      }),
      invalidatesTags: ['Wishlist'],
    }),
    removeWishlistItem: builder.mutation({
      query: (id) => ({
        url: `wishlist/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Wishlist'],
    }),
  }),
});

export const todoApi = createApi({
  reducerPath: 'todoApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3005/' }),
  tagTypes: ['Todos'],
  endpoints: (builder) => ({
    getTodos: builder.query<TodoItem[], void>({
      query: () => 'todos',
      providesTags: ['Todos'],
    }),
    addTodo: builder.mutation<void, { id: string; task: string; completed: boolean }>({
      query: (newTodo) => ({
        url: 'todos',
        method: 'POST',
        body: newTodo,
      }),
      invalidatesTags: ['Todos'],
    }),
    updateTodo: builder.mutation<void, { id: string; task?: string; completed: boolean }>({
      query: ({ id, ...patch }) => ({
        url: `todos/${id}`,
        method: 'PUT',
        body: patch,
      }),
      invalidatesTags: ['Todos'],
    }),
    deleteTodo: builder.mutation<void, string>({
      query: (id) => ({
        url: `todos/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Todos'],
    }),
  }),
});

export const {
  useGetWishlistQuery,
  useAddWishlistItemMutation,
  useRemoveWishlistItemMutation,
} = wishlistApi;

export const {
  useGetTodosQuery,
  useAddTodoMutation,
  useUpdateTodoMutation,
  useDeleteTodoMutation,
} = todoApi;
