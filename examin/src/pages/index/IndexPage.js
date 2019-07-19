import React, { useEffect } from 'react';
import { connect } from 'dva';
import Headers from '@/components/header/header'
import style from './IndexPage.scss'
import { Layout } from 'antd';
import { Route, Switch } from 'dva/router';
import router from "../../router/index"
import MenuList from "@/components/MenuList/MenuList"
const { Header, Content, Sider } = Layout;
let routerarr = [];
for (let elem of router.values()) {
  routerarr.push(...elem.children)
}
function IndexPage(props) {
  console.log(props.myView,props.forbiddenView)
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
  if(!props.myView.length){
    return null
  }
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
            {/* 可以访问的路由 */}
              {
                props.myView.map(item=>{
                  return   <Route key={item.view_id} path={item.path} component={item.component} />
                })   
              }
               {/* 不存在的路由 */}
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
  return { 
    myView:state.login.myView,
    forbiddenView: state.login.forbiddenView
   }

}

export default connect(mapstateToProps)(IndexPage);
