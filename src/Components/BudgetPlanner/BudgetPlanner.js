import React from 'react';

export function BudgetPlanner() {
  // events
  const handleChange = e => {
    switch(e.target.name) {
      case 'salary':
        console.log('salary changed', e.target.value);
        break;
      case 'contribution':
        console.log('contribution changed', e.target.value);
        break;
      default:
         return;
    }
  }

  const handleSubmit = e => {
    e.preventDefault();
    console.log('Submitted!');
  }

  return (
    <>
      <p className="lead">Welcome to your monthly budget, x</p>

      <form onSubmit={handleSubmit}>

        <div>
          <input
            type="range"
            name="contribution"
            min="1"
            max="30"
            onChange={handleChange}>
          </input>
        </div>

        <div>
          <label>
            <span>Your Contribution</span>
            <span>x%</span>
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
    </>
  )
};