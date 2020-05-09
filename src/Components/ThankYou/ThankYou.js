import React from 'react';
import { useHistory } from "react-router-dom";
import { useSelector } from 'react-redux';

export function ThankYou() {
  let history = useHistory();

  // global state
  const userName = useSelector(state => state.login.userName);
  const contribution = useSelector(state => state.budgetPlanner.contribution);
  const salary = useSelector(state => state.budgetPlanner.salary);

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
          <span>$x</span>
        </label>
      </div>

      <div>
        <label>
          <span>Your Savings</span>
          <span>$x</span>
        </label>
      </div>

      <a href="/" onClick={handleGoBackClick}>Go back</a>
    </>
  )
}