import { combineReducers, configureStore } from "@reduxjs/toolkit";
import cartReducer from "./Slices/cartSlice";
import detailsReducer from "./Slices/detailsSlice";
import productReducer from "./Slices/productsSlice";

const reducer = combineReducers({
  cart: cartReducer,
  products: productReducer,
  details: detailsReducer,
});

const store = configureStore({
  reducer,
});

export default store;
