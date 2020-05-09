import { configureStore } from '@reduxjs/toolkit';
import loginReducer from '../Components/Login/loginSlice'

export default configureStore({
  reducer: {
    login: loginReducer
  },
});