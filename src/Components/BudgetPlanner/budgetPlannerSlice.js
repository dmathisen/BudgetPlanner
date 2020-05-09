import { createSlice } from '@reduxjs/toolkit';

export const budgetPlannerSlice = createSlice({
  name: 'budgetPlanner',
  initialState: {
    contribution: 15,
    salary: null
  },
  reducers: {
    setContribution: (state, action) => {
      state.contribution = action.payload.contribution;
    },
    setSalary: (state, action) => {
      state.salary = action.payload.salary;
    }
  },
});

export const calculateExpense = (contribution, salary) => {
  const expense = (salary / 12) * (contribution / 100);
  return expense.toFixed(2);
};

export const calculateSavings = (contribution, salary) => {
  const savings = (salary / 12) * (1 - (contribution / 100));
  return savings.toFixed(2);
};

export const { setContribution, setSalary } = budgetPlannerSlice.actions;
export default budgetPlannerSlice.reducer;
