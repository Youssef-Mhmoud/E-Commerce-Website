import { combineReducers, configureStore } from "@reduxjs/toolkit";
import cartReducer from "./Slices/cartSlice";
import productReducer from "./Slices/productsSlice";

const reducer = combineReducers({
  cart: cartReducer,
  products: productReducer,
});

const store = configureStore({
  reducer,
});

export default store;
