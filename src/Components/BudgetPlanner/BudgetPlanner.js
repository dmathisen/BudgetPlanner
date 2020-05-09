import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';

import { Login } from '../Login/Login';

import { logOut } from '../Login/loginSlice';
import { setContribution, setSalary, calculateExpense, calculateSavings } from './budgetPlannerSlice'

export function BudgetPlanner() {
  let history = useHistory();
  const dispatch = useDispatch();

  // global state
  const isLoggedIn = useSelector(state => state.login.isLoggedIn);
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
      setExpense(null);
      setSavings(null);
    }
  }, [contribution, salary]);

  // events
  const handleChange = e => {
    switch(e.target.name) {
      case 'salary':
        dispatch(setSalary({salary: e.target.value}));
        break;
      case 'contribution':
        dispatch(setContribution({contribution: e.target.value}));
        break;
      default:
         return;
    }
  }

  const handleSubmit = e => {
    e.preventDefault();
    history.push("/thank-you");
  }

  const handleSignOut = e => {
    e.preventDefault();
    var auth2 = window.gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
      dispatch(logOut());
    });
  };

  return (
    isLoggedIn ? (
      <>
        <p className="lead">Welcome to your monthly budget, {userName}</p>

        <form onSubmit={handleSubmit}>

          <div>
            <input
              type="range"
              name="contribution"
              min="1"
              max="30"
              value={contribution}
              onChange={handleChange}>
            </input>
          </div>

          <div>
            <label>
              <span>Your Contribution</span>
              <span>{contribution}%</span>
            </label>
          </div>

          <div>
            <label>
              <span>Your Salary ($)</span>
              <input
                type="number"
                name="salary"
                min="0"
                autoComplete="off"
                value={salary}
                onChange={handleChange}>
              </input>
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
          <button type="submit">Done</button>

        </form>

        <br/>
        <a href="/" onClick={handleSignOut}>Log out</a>
      </>
    ) : <Login />
  )
};