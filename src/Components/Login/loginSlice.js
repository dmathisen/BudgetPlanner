import { createSlice } from '@reduxjs/toolkit';

export const loginSlice = createSlice({
  name: 'login',
  initialState: {
    isLoggedIn: false,
    userName: null
  },
  reducers: {
    logIn: (state, action) => {
      state.isLoggedIn = true;
      state.userName = action.payload.userName || null;
    },
    logOut: state => {
      state.isLoggedIn = false;
      state.userName = null;
    }
  },
});

export const { logIn, logOut } = loginSlice.actions;
export default loginSlice.reducer;
