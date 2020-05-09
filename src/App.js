import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { BudgetPlanner } from './Components/BudgetPlanner/BudgetPlanner';
import { ThankYou } from './Components/ThankYou/ThankYou';

function App() {
  return (
    <BrowserRouter>
      <div className="App">

        <Switch>
          <Route exact path="/" component={BudgetPlanner} />
          <Route path="/thank-you" component={ThankYou} />
        </Switch>

      </div>
    </BrowserRouter>
  );
}

export default App;