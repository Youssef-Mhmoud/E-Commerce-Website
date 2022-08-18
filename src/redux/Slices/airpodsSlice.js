import AirPods from "../../Data/AirData";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  list: [],
};

const airpodsSlice = createSlice({
  name: "airpods",
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


export const {save , startFetch} = airpodsSlice.actions

export const fetchAsyncAirpods = () => {
  return async (dispatch) => {
    dispatch(save([]));
    dispatch(startFetch());

    const airpods = await new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(AirPods);
      }, 1000);
    });

    dispatch(save(airpods));
  };
};

const airpodsReducer = airpodsSlice.reducer

export default airpodsReducer
