import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import IndexPage from './pages/index/IndexPage';
import Login from './pages/login/index'


import { IntlProvider, addLocaleData } from "react-intl"
import en from "react-intl/locale-data/en"
import zh from "react-intl/locale-data/zh";
import zhCN from "@/lang/zh_CN.js"
import enUS from "@/lang/en_US.js"
import { connect } from 'dva';
const localeMap = {
  en: enUS,
  zh: zhCN
}
addLocaleData([...en, ...zh]);
const mapStateToProps = state => {
  return {
    locale: state.global.locale
  }
}
let RouterView = connect(mapStateToProps)((props) => {
  return (
    <IntlProvider locale={props.locale} messages={localeMap[props.locale]}>
      <Router history={props.history}>
        <Switch>
          <Route path="/" exact component={IndexPage} />
          <Route path="/index" component={IndexPage} />
          <Route path="/login" component={Login} />
        </Switch>
      </Router>
    </IntlProvider>
  )
});
function RouterConfig({ history }) {
  return (
    <RouterView history={history} />
  );
}

export default RouterConfig;
