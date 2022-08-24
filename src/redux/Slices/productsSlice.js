import ProductsData from "../../Data/ProductsData";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  list: [],
  listContainer: [],
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    filterItems: (state, { payload }) => {
      state.list = state.listContainer.filter((user) =>
        user.sear.toLowerCase().includes(payload)
    )
  },
    startFetch: (state) => {
      state.loading = true
    },
    save: (state, action) => {
      const {payload} = action
      state.loading = false
      state.list = payload
      state.listContainer = payload
    }
  }
});


export const {save , startFetch, filterItems} = productsSlice.actions

export const fetchAsyncProducts = () => {
  return async (dispatch) => {
    dispatch(save([]));
    dispatch(startFetch());

    const products = await new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(ProductsData);
      }, 1000);
    });

    dispatch(save(products));
  };
};

const productReducer = productsSlice.reducer

export default productReducer
