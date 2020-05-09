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

export const { setContribution, setSalary } = budgetPlannerSlice.actions;
export default budgetPlannerSlice.reducer;
