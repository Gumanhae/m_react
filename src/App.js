import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./routes/Home"
import Detail from "./routes/Detail";

import { hot } from 'react-hot-loader/root';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/movie">
          <Detail />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  )
}

export default hot(App);
