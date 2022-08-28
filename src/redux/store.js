import { combineReducers, configureStore } from "@reduxjs/toolkit";
import cartReducer from "./Slices/cartSlice";
import detailsReducer from "./Slices/detailsSlice";
import productReducer from "./Slices/productsSlice";
import userSlice from "./Slices/userSlice";


const reducer = combineReducers({
  cart: cartReducer,
  products: productReducer,
  details: detailsReducer,
  user: userSlice,

});

const store = configureStore({
  reducer,
});

export default store;
