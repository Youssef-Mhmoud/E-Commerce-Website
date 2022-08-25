import BestData from "../../Data/BestData";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  list: [],
  listContainer: [],
};

const bestSellerSlice = createSlice({
  name: "best",
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


export const {save , startFetch, filterItems} = bestSellerSlice.actions

export const fetchAsyncBest = () => {
  return async (dispatch) => {
    dispatch(save([]));
    dispatch(startFetch());

    const bestSeller = await new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(BestData);
      }, 1000);
    });

    dispatch(save(bestSeller));
  };
};

const bestSellerReducer = bestSellerSlice.reducer

export default bestSellerReducer
