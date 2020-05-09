import { createSlice } from '@reduxjs/toolkit';

export const loginSlice = createSlice({
  name: 'login',
  initialState: {
    isLoggedIn: false,
    userName: undefined
  },
  reducers: {
    logIn: (state, action) => {
      state.isLoggedIn = true;
      state.userName = action.payload.userName || undefined;
    },
    logOut: state => {
      state.isLoggedIn = false;
      state.userName = undefined;
    }
  },
});

export const { logIn, logOut } = loginSlice.actions;
export default loginSlice.reducer;
