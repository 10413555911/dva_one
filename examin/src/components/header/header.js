import React, { useEffect, useState } from 'react';
import { connect } from "dva"
import style from './header.scss'
import { Select, Modal ,Form,Input, Button,Dropdown} from "antd";
const { Option } = Select;
let userInfo=JSON.parse(localStorage.getItem("userInfo")) 
console.log(userInfo)
function headers(props) {
  useEffect(()=>{
    //props.updataUser()
  },[])
  let handleProvinceChange = value => {
    props.updataLocale(value)
  }

  const [flag, updateFlag] = useState(false)

  let showupdata = () => {
    updateFlag(true)
  }
  let handleOk = () => {
    console.log("ok")
    updateFlag(false)
    console.log(flag)

  }
  let handleCancel = () => {
    console.log("on")
    updateFlag(false)
    console.log(flag)
    // setflag(false)
  }
  let handleSubmit=e=>{
    console.log(e)
  }
  const { getFieldDecorator } = props.form;
  return (
    <div className={style.header}>
      <div className={style.header_center}>
        <div>
          <img alt="" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1551624718911&di=4a7004f8d71bd8da84d4eadf1b59e689&imgtype=0&src=http%3A%2F%2Fimg105.job1001.com%2Fupload%2Falbum%2F2014-10-15%2F1413365052_95IE3msH.jpg" />
        </div>
        <div>
          <div>
            <Select
              className={style.select}
              defaultValue="中文"
              style={{ width: 90 }}
              onChange={(v) => handleProvinceChange(v)}
            >
              <Option key="1" value={"zh"}>中文</Option>
              <Option key="2" value={"en"}>英文</Option>
            </Select>
          </div>
          <div onClick={() => showupdata()}>
            <img className={style.portrait} src={userInfo.avatar} alt="" />
            <span>{userInfo.user_name}</span>
          </div>
          <Modal
            title="更改用户信息"
            visible={flag}
            onOk={handleOk}
            onCancel={handleCancel}
          >
            <Form onSubmit={(e)=>handleSubmit(e)}>
              <Form.Item label="用户ID">
                {getFieldDecorator('userId', {
                  rules: [{ required: true, message: 'Please input your note!' }],
                })(<Input />)}
              </Form.Item>
              <Form.Item label="用户名">
                {getFieldDecorator('userNmae', {
                  rules: [{ required: true, message: 'Please input your note!' }],
                })(<Input />)}
              </Form.Item>
              <Form.Item label="密码">
                {getFieldDecorator('userPwd', {
                  rules: [{ required: true, message: 'Please input your note!' }],
                })(<Input />)}
              </Form.Item>
              <Form.Item label="用户身份ID">
                  {getFieldDecorator('identityId', {
                    rules: [{ required: true, message: 'Please input your note!' }],
                  })(<Input />)}
              </Form.Item>
              <Form.Item label="用户头像">
                <input type="file"/>
              </Form.Item>
              <Form.Item wrapperCol={{ span: 12, offset: 5 }}>
                <Button type="primary" htmlType="submit">
                  Submit
                  </Button>
              </Form.Item>
            </Form>
          </Modal>
        </div>
      </div>

    </div>
  );
}
const mapStateToProps = state => {
  return {
    ...state.global
  }
}
const mapDispatchToProps = dispatch => {
  return {
    updataLocale: payload => {
      dispatch({
        type: "global/updataLocale",
        payload
      })
    },
    updataUser:payload=>{
        dispatch({
          type:"user/updataUser",
          payload
        })
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Form.create()(headers));
