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
    decrease: (state, { payload }) => {
      const itemIndex = state.cartItem.findIndex(
        (item) => item.id === payload.id
      );
      if (state.cartItem[itemIndex].cartQuantity > 1) {
        state.cartItem[itemIndex].cartQuantity -= 1;
        toast.info(
          `Decreased ${state.cartItem[itemIndex].title} Cart Quantity`,
          {
            position: "bottom-left",
          }
        );
      } else if (state.cartItem[itemIndex].cartQuantity === 1) {
        const nextCart = state.cartItem.filter(
          (cartItem) => cartItem.id !== payload.id
        );
        state.cartItem = nextCart;
        toast.error(`${payload.title} Removed From Cart`, {
          position: "bottom-left",
        });
      }
      localStorage.setItem("cartItem", JSON.stringify(state.cartItem));
    },
    remove: (state, { payload }) => {
      const nextCart = state.cartItem.filter(
        (cartItem) => cartItem.id !== payload.id
      );
      state.cartItem = nextCart;
      localStorage.setItem("cartItem", JSON.stringify(state.cartItem));
      toast.error(`${payload.title} Removed From Cart`, {
        position: "bottom-left",
      });
    },
    clear: (state, { payload }) => {
      state.cartItem = [];
      toast.error(`Cart Cleared`, {
        position: "bottom-left",
      });
      localStorage.setItem("cartItem", JSON.stringify(state.cartItem));
    },
    total: (state, { payload }) => {
      let { total, quantity } = state.cartItem.reduce(
        (cartTotal, cartItem) => {
          const { price, cartQuantity } = cartItem;
          const itemTotal = price * cartQuantity;

          cartTotal.total += itemTotal;
          cartTotal.quantity += cartQuantity;

          return cartTotal;
        },
        {
          total: 0,
          quantity: 0,
        }
      );
      state.cartTotalQuantity = quantity
      state.cartTotalAmount = total
    },
  },
});

export const { clear, addToCart, remove, decrease, total } = cartSlice.actions;

const cartReducer = cartSlice.reducer;

export default cartReducer;
