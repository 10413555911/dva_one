import React, { useEffect } from 'react';
import { connect } from 'dva';
import Headers from '@/components/header/header'
import style from './IndexPage.scss'
import { Layout, Menu, Icon } from 'antd';
import { NavLink } from 'react-router-dom';
import { Route, Switch } from 'dva/router';
import router from "../../router/index"
import MenuList from "@/components/MenuList/MenuList"
const { Header, Content, Sider } = Layout;
const { SubMenu } = Menu;
let routerarr = [];
for (let elem of router.values()) {
  routerarr.push(...elem.children)
}
function IndexPage(props) {
  let headerText = () => {
    let text = props.location.pathname;
    switch (text) {
      case "/index/addQuestions":
        return "添加试题";
      case "/index/questionsType":
        return "试题分类";
      case "/index/watchQuestions":
        return "查看试题";
      case "/index/addUser":
        return "添加用户";
      case "/index/showUser":
        return "用户展示";
      case "/index/details":
        return "试题详情";
      case "/index/compile":
        return "编辑"
      default:
        return "试题详情"
    }
  }
  useEffect(() => {
  })
  return (
    <div className={style.wrap}>
      <Headers></Headers>
      {/* 菜单 */}
      <Layout className={style.main}>
        <Sider>
            <MenuList/>
        </Sider>
        <Layout className={style.section}>
          <Header style={{ background: '#fff', padding: 0 }} >
            <p className={style.titleName}>{headerText()}</p>
          </Header>
          <Content className={style.content}>
            {/* 路由视口存放 */}
            <Switch>
              {/* <Route path="/index/Details" component={examDetails} /> */}
              {
                routerarr.map((item,i)=>
                  <Route key={`r${i}`} path={item.path} component={item.component} />
                )
              }
            </Switch>
          </Content>
        </Layout>
      </Layout>
    </div>
  );
}
IndexPage.propTypes = {
};
let mapstateToProps = state => {
  return { ...state }
}
let mapdispatchToProps = dispatch => {
  return {
    
  }
}
export default connect(mapstateToProps, mapdispatchToProps)(IndexPage);
