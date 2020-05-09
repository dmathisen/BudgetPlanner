import { configureStore } from '@reduxjs/toolkit';
import loginReducer from '../Components/Login/loginSlice'
import budgetPlannerReducer from '../Components/BudgetPlanner/budgetPlannerSlice'

export default configureStore({
  reducer: {
    login: loginReducer,
    budgetPlanner: budgetPlannerReducer
  }
});