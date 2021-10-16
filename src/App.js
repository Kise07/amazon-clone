import React from 'react';
import './App.css';
import Headers from './Header';
import Home from './Home';
import Checkout from './Checkout';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/checkout">
            <Headers />
            <Checkout />
          </Route>
          <Route path="/">
            <Headers />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
