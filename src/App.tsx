import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { Home } from './components/Home/index';
import { SendMoney } from './components/SendMoney/index';
import Accounts from './components/Accounts';

import './App.scss';

export function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <main className="App__main-content">
          <Switch>
            <Route path="/send-money">
              <SendMoney />
            </Route>
            <Route path="/accounts">
              <Accounts />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </main>
      </Router>
    </div>
  );
}
