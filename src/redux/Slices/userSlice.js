import { createSlice } from "@reduxjs/toolkit";

export const UserSlice = createSlice({
  name: "user",
  initialState: {
    firstName: "",
    lastName: "",
    email: "",
    phone: '',
    password: '',
    confirmPassword: '',
  },
  reducers: {
    addUser: (state,action) => {
      state.firstName = action.payload.firstName
      state.lastName = action.payload.lastName
      state.email = action.payload.email
      state.phone = action.payload.phone
      state.password = action.payload.password
      state.confirmPassword = action.payload.confirmPassword
    }
  },
});

export const { addUser } = UserSlice.actions;

export default UserSlice.reducer;
