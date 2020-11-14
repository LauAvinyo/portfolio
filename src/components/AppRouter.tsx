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
import DesignWeek from './design/designWeek/DesignWeek'
import PortfolioApp from './design/portfolioApp/PortfolioApp'

export default function AppRouter() {
  return (
    <Router basename="/">
    <Route exact path="/science" component={Science} />
    <Route path="/about" component={About} />
    <Route path="/design" component={ Design } />
    <Route path="/fitnessApp" component={ Fitness } />
    <Route path="/designWeek" component={ DesignWeek } />
    <Route path="/portfolioApp" component={ PortfolioApp } />
    </Router>
  );
}
