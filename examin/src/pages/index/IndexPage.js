import React, { useEffect } from 'react';
import { connect } from 'dva';
import Headers from '@/components/header/header'
import style from './IndexPage.scss'
import { Layout, Menu, Icon ,Sider} from 'antd';
import { NavLink } from 'react-router-dom';
import { Router, Route, Switch } from 'dva/router';
import compile from './questions/watchQuestions/compile/compile'
import addExam from './examination/addExam/addExam'
import addUser from "./user/addUser/adduser"
import showUser from "./user/showUser/showuser"

import router from "../../router/index"
const { Header, Content, Sider } = Layout;
const { SubMenu } = Menu;
let routerarr=[];
for (let elem of router.values()) {
  routerarr.push(...elem.children)
}
function IndexPage(props) {
  console.log("index页", props.location.pathname)
  let headerText = () => {
    let text = props.location.pathname;
    switch (text) {
      case "/index/addQuestions":
        return "添加试题";
      case "/index/questionsType":
        return "试题分类";
      case "/index/watchQuestions":
        return "查看试题";
      case "/index/details":
        return "试题详情";
      case "/index/compile":
        return "编辑"
      default:
        return "试题详情"
    }
  }
  useEffect(()=>{
    
  })
  return (
    <div className={style.wrap}>
      <Headers></Headers>
      <Layout className={style.main}>
        <Sider>
          <Menu theme="dark" mode="inline" >
            {
                router.map((item,i)=>
                  <SubMenu key={`sub${i}`} title={<span><Icon type="team" /><span>{item.type}</span></span>}>
                    {
                      item.children.map((item,i)=>
                        {
                          return <Menu.Item key={i}><NavLink to={item.path}>{item.title}</NavLink></Menu.Item>
                        }
                      )
                    }
                  </SubMenu>
                )
            }
          </Menu>

        </Sider>
        <Layout className={style.section}>
          <Header style={{ background: '#fff', padding: 0 }} >
            <p className={style.titleName}>{headerText()}</p>
          </Header>
          <Content className={style.content}>
            {/* 路由视口存放 */}
            <Switch>

              {
                routerarr.map((item,i)=>
                  <Route key={i} path={item.path} component={item.component} />
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
  return { ...state.subjuect }
}
let mapdispatchToProps = dispatch => {
  return {
  }
}
export default connect(mapstateToProps, mapdispatchToProps)(IndexPage);
