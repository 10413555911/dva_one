import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import IndexPage from './pages/index/IndexPage';
import Login from './pages/login/index'
import { connect } from 'dva'

//配置国际化
import { addLocaleData, IntlProvider } from 'react-intl'
import en from 'react-intl/locale-data/en';
import zh from 'react-intl/locale-data/zh';
import zhCN from '@/lang/zh-CN.js';
import enUS from '@/lang/en-US.js';
// 配置国际化字典
const localMap = {
  en: enUS,
  zh: zhCN
}
addLocaleData([...en, ...zh]);
let mapStateToProps = state => {
  return {
    locale: state.global.locale
  }
}
let RouteView = connect(mapStateToProps)((props) => {
  return (
    <IntlProvider locale={props.locale} messages={localMap[props.locale]}>
      <Router history={props.history}>
        <Switch>
          <Route path="/" exact component={IndexPage} />
          <Route path="/index" component={IndexPage} />
          <Route path="/login" component={Login} />
        </Switch>
      </Router>
    </IntlProvider>
  );
})

function RouterConfig({ history }) {
  return <RouteView history={history} />
}

export default RouterConfig;
