import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Menu from "./views/Menu.js";
import Login from "./views/Login.js";
import HomePage from "./views/HomePage.js";

const App = () => {
  return (
    <Router>
      <div>
        <h1>My App</h1>
        <Menu />
        <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
