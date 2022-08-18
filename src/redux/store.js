import { combineReducers, configureStore } from "@reduxjs/toolkit";
import airpodsReducer from "./Slices/airpodsSlice";
import cartReducer from "./Slices/cartSlice";
import productReducer from "./Slices/productSlice";
import watchReducer from "./Slices/watchSlice";

const reducer = combineReducers({
  products: productReducer,
  cart: cartReducer,
  airpods: airpodsReducer,
  watch: watchReducer,
});

const store = configureStore({
  reducer,
});

export default store;
