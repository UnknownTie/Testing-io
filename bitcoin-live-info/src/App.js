
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PriceInfo from './components/PriceInfo';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/" exact component={PriceInfo} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
