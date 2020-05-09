import { configureStore } from '@reduxjs/toolkit';
import loginReducer from '../Components/Login/loginSlice'
import budgetPlannerReducer from '../components/BudgetPlanner/budgetPlannerSlice';

export default configureStore({
  reducer: {
    login: loginReducer,
    budgetPlanner: budgetPlannerReducer
  }
});