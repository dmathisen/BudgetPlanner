import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import { useSelector } from 'react-redux';

import { calculateExpense, calculateSavings } from '../BudgetPlanner/budgetPlannerSlice'

export function ThankYou() {
  let history = useHistory();

  // global state
  const userName = useSelector(state => state.login.userName);
  const contribution = useSelector(state => state.budgetPlanner.contribution);
  const salary = useSelector(state => state.budgetPlanner.salary);

  // local state
  const [expense, setExpense] = useState(null);
  const [savings, setSavings] = useState(null);

  useEffect(() => {
    if (contribution && salary) {
      setExpense(calculateExpense(contribution, salary));
      setSavings(calculateSavings(contribution, salary));
    } else {
      history.push("/");
    }
  }, [contribution, salary]);

  // events
  const handleGoBackClick = e => {
    e.preventDefault();
    history.push("/");
  }

  return (
    <>
      <p className="lead">Thank you {userName}</p>

      <div>
        <label>
          <span>Your Election</span>
          <span>{contribution}%</span>
        </label>
      </div>

      <div>
        <label>
          <span>Your Salary</span>
          <span>${salary}</span>
        </label>
      </div>

      <div>
        <label>
          <span>Your Expense</span>
          <span>${expense}</span>
        </label>
      </div>

      <div>
        <label>
          <span>Your Savings</span>
          <span>${savings}</span>
        </label>
      </div>

      <br />
      <a href="/" onClick={handleGoBackClick}>Go back</a>
    </>
  )
}