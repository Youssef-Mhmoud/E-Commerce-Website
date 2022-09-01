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
    addUser: (state,{payload}) => {
      state.firstName = payload.firstName
      state.lastName = payload.lastName
      state.email = payload.email
      state.phone = payload.phone
      state.password = payload.password
      state.confirmPassword = payload.confirmPassword
    },
    logOut: (state, {payload}) => {
      state.firstName = ''
    }
  },
});

export const { addUser, logOut } = UserSlice.actions;

export default UserSlice.reducer;
