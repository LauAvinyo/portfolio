import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import About from './About'
import Design from './design/Design'
import Science from './Science'
import Fitness from './design/fitness/Fitness'

export default function AppRouter() {
  return (
    <Router>
      <Switch>
        <Route path="/about" component = { About } />
        <Route path="/design" component = { Design } />
        <Route path="/case-one" component = { Fitness } />
        <Route path="/case-two" component = { About } />
        <Route path="/case-three" component = { About } />
        <Route path="/science" component = { Science } />
      </Switch>
    </Router>
  );
}