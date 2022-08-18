import WatchData from "../../Data/WatchData";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  list: [],
};

const watchSlice = createSlice({
  name: "watch",
  initialState,
  reducers: {
    startFetch: (state) => {
      state.loading = true
    },
    save: (state, action) => {
      const {payload} = action
      state.loading = false
      state.list = payload
    }
  }
});


export const {save , startFetch} = watchSlice.actions

export const fetchAsyncWatch = () => {
  return async (dispatch) => {
    dispatch(save([]));
    dispatch(startFetch());

    const watch = await new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(WatchData);
      }, 1000);
    });

    dispatch(save(WatchData));
  };
};

const watchReducer = watchSlice.reducer

export default watchReducer
