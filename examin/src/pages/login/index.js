import React, { useEffect, useState } from 'react';
import { connect } from 'dva';
import { Form, Icon, Input, Button, Checkbox, message } from 'antd';
import style from './login.scss'
function Login(props) {
  //调用ant里面的高阶组件
  const { getFieldDecorator } = props.form;
  //模拟componentDidmont
  // useEffect(() => {     //直接登录成功
  //   props.login({ user_name: 'chenmanjie', user_pwd: 'Chenmanjie123!' })
  // }, [])
  useEffect(() => {
    console.log(props)
    if (props.isLogin === 1) {
      message.success('登陆成功');
      props.history.push('/index')
    } else if (props.isLogin === 0) {
      message.success('请输入正确的账号密码');
    }
  }, [props.isLogin])
  let handleSubmit = () => {
    props.form.validateFields((err, values) => {
      if (!err) {
        props.login({ user_name: values.username, user_pwd: values.password })
        console.log('Received values of form: ', values);
      }
    });
  };
  return (
    <div className={style.wrap}>
      <div className={style.form_box}>
        <Form className="login-form" onSubmit={handleSubmit}>
          <Form.Item>
            {getFieldDecorator('username', {
              validateTrigger: 'onBlur',
              rules: [{ required: true, message: 'Please input your username!' },
              { min: 6, max: 15, message: 'Please input your username!' }
              ],
            })(
              <Input
                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                placeholder="Username"
              />,
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator('password', {
              rules: [{ required: true, message: 'Please input your Password!' }],
            })(
              <Input
                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                type="password"
                placeholder="Password"
              />,
            )}
          </Form.Item>
          <Form.Item>
            <Checkbox>记住密码</Checkbox>
            <a className="login-form-forgot" href="">
              忘记密码
          </a>
          </Form.Item>
          <div >
            <Button type="primary" htmlType="submit" className={style.login}>
              登录
          </Button>
          </div>
        </Form>
      </div>
    </div>
  );
}
Login.propTypes = {
};
let mapstateToProps = state => {
  return { ...state.login }
}
let mapdispatchToProps = dispatch => {
  return {
    login: (payload) => {       //触发函数调用库里面  73行
      dispatch({
        type: 'login/login',    //调用命名空间里面的 login的方法
        payload                 //传入payload参数
      })
    }
  }
}
//connect 链接仓库里面的方法                                  调用高阶组件里面的方法   
export default connect(mapstateToProps, mapdispatchToProps)(Form.create()(Login));
