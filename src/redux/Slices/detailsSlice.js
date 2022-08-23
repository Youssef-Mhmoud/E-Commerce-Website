import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  detailsList: [],
};

const detailsSlice = createSlice({
  name: "details",
  initialState,
  reducers: {
    addToDetails: (state, { payload }) => {
      const itemIndex = state.detailsList.findIndex(
        (item) => item.id === payload.id
      );
      if (itemIndex >= 0) {
        state.detailsList[itemIndex].cartQuantity += 1;
      } else {
        const tempProduct = { ...payload, cartQuantity: 1 };
        state.detailsList.push(tempProduct);
      }
      // localStorage.setItem("details", JSON.stringify(state.detailsList));
    },
  },
});

export const { addToDetails } = detailsSlice.actions;

const detailsReducer = detailsSlice.reducer;

export default detailsReducer;
