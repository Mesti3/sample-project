import React, { Component, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { Spin } from 'antd';

import Aux from '../../hoc/Auxx/Auxx';

const Home = lazy(() => import('./containers/home/home'));
const Generator = lazy(() => import('./containers/generator/generator'));
const Account = lazy(() => import('./containers/account/account'));
const About = lazy(() => import('./containers/about/about'));
const Invitation = lazy(() => import('./containers/invitation/invitation'));


class App extends Component {

  render() {
    return (
      <Router>
        <Aux>
          <Suspense fallback={<Spin/>}>
            <Switch>
              <Route exact path="/admin" component={Home}/>
              <Route path="/generator" component={Generator}/>
              <Route path="/account" component={Account}/>
              <Route path="/about" component={About}/>
              <Route path="/invitation" component={Invitation}/>
            </Switch>
          </Suspense>
        </Aux>
      </Router>
    )
  }
}

export default App