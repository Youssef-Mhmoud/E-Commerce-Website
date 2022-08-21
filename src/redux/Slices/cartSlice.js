import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
const initialState = {
  cartItem: localStorage.getItem("cartItem")
    ? JSON.parse(localStorage.getItem("cartItem"))
    : [],
  cartTotalQuantity: 0,
  cartTotalAmount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, { payload }) => {
      const itemIndex = state.cartItem.findIndex(
        (item) => item.id === payload.id
      );

      if (itemIndex >= 0) {
        state.cartItem[itemIndex].cartQuantity += 1;
        toast.info(`Increased ${state.cartItem[itemIndex].title} Quantity`, {
          position: "bottom-left",
        });
      } else {
        const tempProduct = { ...payload, cartQuantity: 1 };
        state.cartItem.push(tempProduct);
        toast.success(`${payload.title} Added To Cart`, {
          position: "bottom-left",
        });
      }
      localStorage.setItem("cartItem", JSON.stringify(state.cartItem));
    },
    inc: (state, { payload }) => {
      const itemIndex = state.cartItem.findIndex(
        (item) => item.id === payload.id
      );
      state.cartItem[itemIndex].cartQuantity += 1;
    },
    dec: (state, { payload }) => {
      const itemIndex = state.cartItem.findIndex(
        (item) => item.id === payload.id
      );
      state.cartItem[itemIndex].cartQuantity -= 1;
    },
    remove: (state, { payload }) => {
      state.cartItem.pop(payload);
    },
    clear: (state) => {
      return [];
    },
  },
});

export const { clear, addToCart, remove, inc, dec } =
  cartSlice.actions;

const cartReducer = cartSlice.reducer;

export default cartReducer;
