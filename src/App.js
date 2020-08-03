import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { BudgetPlanner } from './Components/BudgetPlanner/BudgetPlanner';
import { ThankYou } from './Components/ThankYou/ThankYou';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="wrapper">
        <div>
          <h1>Budget Planner App</h1>

          <Switch>
            <Route exact path="/" component={BudgetPlanner} />
            <Route path="/thank-you" component={ThankYou} />
          </Switch>

        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;