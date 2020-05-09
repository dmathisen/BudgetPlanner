import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Login } from '../Login/Login';
import { logOut } from '../Login/loginSlice';

export function BudgetPlanner() {
  const dispatch = useDispatch();

  // global state
  const isLoggedIn = useSelector(state => state.login.isLoggedIn);
  const userName = useSelector(state => state.login.userName);

  // local state
  const [contribution, setContribution] = useState(15);
  const [salary, setSalary] = useState(null);

  useEffect(() => {
    console.log('salary', salary);
    console.log('contribution', contribution);
  }, [contribution, salary]);

  // events
  const handleChange = e => {
    switch(e.target.name) {
      case 'salary':
        setSalary(e.target.value);
        break;
      case 'contribution':
        setContribution(e.target.value);
        break;
      default:
         return;
    }
  }

  const handleSubmit = e => {
    e.preventDefault();
    console.log('Submitted!');
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
                type="text"
                name="salary"
                autoComplete="off"
                onChange={handleChange}>
              </input>
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

          <br />
          <button type="submit">Done</button>

        </form>

        <br/>
        <a href="/" onClick={handleSignOut}>Log out</a>
      </>
    ) : <Login />
  )
};