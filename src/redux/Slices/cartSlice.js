import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItem: []
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, { payload }) => {
      const { id } = payload;
      const itemExists = state.cartItem.find((item) => item.id === id);
      if (itemExists) {
        return state.cartItem.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1 };
          }
          return item;
        });
      } else {
        state.cartItem.push({
          ...payload,
          quantity: 1,
        });
      }
      console.log(initialState)

      // LocalStorage
      localStorage.setItem("cartItem", JSON.stringify(state.cartItem))
    },
    remove: (state, { payload }) => {
      const { id } = payload;
      const itemExists = state.cartItem.filter((item) => item.id !== id);
      if (itemExists) {
        return state.map((item) => {
          if (item.id !== id) {
            return { ...item, quantity: item.quantity - 1 };
          }
          return item;
        });
      } else {
        state.push({
          ...payload,
          quantity: 1,
        });
      }
    },
    clear: (state) => {
      return [];
    },
  },
});

export const { clear, addToCart, remove } = cartSlice.actions;

const cartReducer = cartSlice.reducer;

export default cartReducer;
