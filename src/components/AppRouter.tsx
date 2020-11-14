import React from "react";
import {
  HashRouter as Router,
  Link,
  Route
} from "react-router-dom";
import About from './About'
import Design from './design/Design'
import Science from './Science'
import Fitness from './design/fitness/Fitness'

export default function AppRouter() {
  return (
    <Router basename="/">
    <Route exact path="/science" component={Science} />
    <Route path="/about" component={About} />
    <Route path="/design" component={ Design } />
    <Route path="/fitnessApp" component={ Fitness } />
    <Route path="/designWeek" component={ Fitness } />
    <Route path="/portfolioApp" component={ Fitness } />
    </Router>
  );
}

{/* <Route path="/portfolio" component = { About } />
<Route path="/portfolio/design" component = { Design } />
<Route path="/case-one" component = { Fitness } />
<Route path="/case-two" component = { About } />
<Route path="/case-three" component = { About } />
<Route path="/science" component = { Science } /> */}