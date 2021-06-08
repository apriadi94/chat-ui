import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import loginPage from './pages/loginPage'

export default function App() {
  return (
    <Router>
        <Switch>
          <Route path="/login" component={loginPage} />
        </Switch>
    </Router>
  );
}