import React, { useEffect } from 'react';
import { connect } from 'dva';
import Headers from '@/components/header/header'
import style from './IndexPage.scss'
import { Layout, Menu, Icon } from 'antd';
import { NavLink } from 'react-router-dom';
import { Router, Route, Switch } from 'dva/router';
import addQuestions from './addQuestions/addQuestions'
import watchQuestions from './watchQuestions/watchQuestions'
import questionsType from './questionsType/questionsType'
import details from './watchQuestions/details/details'
import compile from './watchQuestions/compile/compile'
const { Header, Content, Sider } = Layout;
const { SubMenu } = Menu;
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
      case "/index/details":
        return "试题详情";
      case "/index/compile":
        return "编辑"
      default:
        return "试题详情"
    }
  }
  return (
    <div className={style.wrap}>
      <Headers></Headers>
      <Layout className={style.main}>
        <Sider>
          <Menu theme="dark" mode="inline" >
            <SubMenu key="sub1" title={<span><Icon type="team" /><span>试题管理</span></span>}>
              <Menu.Item key="1"><NavLink to='/index/addQuestions'>添加试题</NavLink></Menu.Item>
              <Menu.Item key="2"><NavLink to='/index/questionsType'>试题分类</NavLink></Menu.Item>
              <Menu.Item key="3"><NavLink to='/index/watchQuestions'>查看试题</NavLink></Menu.Item>
            </SubMenu>
            <SubMenu key="sub2" title={<span><Icon type="team" /><span>用户管理</span></span>}>
              <Menu.Item key="4"><NavLink to='/index/addQuestions'>添加试题</NavLink></Menu.Item>
              <Menu.Item key="5"><NavLink to='/index/questionsType'>试题分类</NavLink></Menu.Item>
              <Menu.Item key="6"><NavLink to='/index/watchQuestions'>查看试题</NavLink></Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
        <Layout className={style.section}>
          <Header style={{ background: '#fff', padding: 0 }} >
            <p className={style.titleName}>{headerText()}</p>
          </Header>
          <Content className={style.content} style={{ margin: '24px 16px 0' }}>
            {/* 路由视口存放 */}
            <Switch>
              {/* 添加试题页面 */}
              <Route path="/index/addQuestions" component={addQuestions} />
              <Route path="/index/questionsType" component={questionsType} />
              <Route path="/index/watchQuestions" component={watchQuestions} />
              <Route path="/index/details" component={details} />
              <Route path="/index/compile" component={compile} />
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