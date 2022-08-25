import { combineReducers, configureStore } from "@reduxjs/toolkit";
import cartReducer from "./Slices/cartSlice";
import detailsReducer from "./Slices/detailsSlice";
import productReducer from "./Slices/productsSlice";
import bestSellerReducer from "./Slices/bestSellerSlice";
import userSlice from "./Slices/userSlice";

const reducer = combineReducers({
  cart: cartReducer,
  products: productReducer,
  details: detailsReducer,
  user: userSlice,
  bestSeller: bestSellerReducer,
});

const store = configureStore({
  reducer,
});

export default store;
