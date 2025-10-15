import { createSlice } from '@reduxjs/toolkit';
import { addOrUpdateToCart } from '@features/cart/cart.helper';

const cartSlice = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {
    addToCart: (state, action) =>
      addOrUpdateToCart({ state, item: action.payload.item }),
    removeFromCart: (state, action) =>
      state.filter((item) => item.cartId !== action.payload.id),
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
