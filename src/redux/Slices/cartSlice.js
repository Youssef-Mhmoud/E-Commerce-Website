import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, { payload }) => {
      const { id } = payload;
      const itemExists = state.find((item) => item.id === id);
      if (itemExists) {
        return state.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1 };
          }
          return item;
        });
      } else {
        state.push({
          ...payload, quantity: 1
        })
      }
    },
    clear: (state) => {
      return [];
    },
  },
});

export const { clear, addToCart } = cartSlice.actions;



const cartReducer = cartSlice.reducer;

export default cartReducer;
