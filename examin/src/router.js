import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import IndexPage from './pages/index/IndexPage';
import Login from './pages/login/index'
function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={IndexPage} />
        <Route path="/index" component={IndexPage} />
        <Route path="/login" component={Login} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
