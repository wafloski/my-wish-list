import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface WishlistItem {
  id: string;
  name: string;
}

interface WishlistState {
  items: WishlistItem[];
}

const initialState: WishlistState = {
  items: [],
};

const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<WishlistItem>) => {
      const exists = state.items.some((item) => item.name === action.payload.name);
      if (!exists) {
        state.items.push(action.payload);
      }
    },
    removeItem: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter(item => item.id !== action.payload);
    },
  },
});

export const { addItem, removeItem } = wishlistSlice.actions;
export default wishlistSlice.reducer;
