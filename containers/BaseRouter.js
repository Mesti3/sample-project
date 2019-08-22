import React, { Component, lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Aux from "../hoc/Auxx/Auxx";
import { Spin } from 'antd';

// re-render one page
const Login = lazy(() => import("./login/login"));
const Registration = lazy(() => import("./registration/registration"));
const Admin = lazy(() => import('../containers/admin/index'));
const Generator = lazy(() => import('../containers/admin/containers/generator/generator'));
const Account = lazy(() => import('./admin/containers/account/account'));
const About = lazy(() => import('./admin/containers/about/about'));
const Invitation = lazy(() => import('./admin/containers/invitation/invitation'));
const Agreements = lazy(() => import('./rights/rights'));

class BaseRouter extends Component {
  render() {

    return (
      <Router>
        <Aux>
          <Suspense fallback={<Spin/>}>
            <Switch>
              <Route exact path="/" component={Login}/>
              <Route path="/registration" component={Registration}/>
              <Route path="/admin" render={(props) => (
                <Admin {...props}/>
              )}/>
              <Route path="/generator" component={Generator}/>
              <Route path="/account" component={Account}/>
              <Route path="/about" component={About}/>
              <Route path="/invitation" component={Invitation}/>
              <Route path="/agreement" component={Agreements}/>
            </Switch>
          </Suspense>
        </Aux>
      </Router>
    )
  }
}

export default BaseRouter;