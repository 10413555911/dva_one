import React,{useEffect,useState} from "react"
import {connect} from "dva"
import style from  "./adduser.scss"
import {Input, Select, Layout,Button ,Form, Modal,Tabs,Table} from "antd"
const { Content } = Layout;
const { Option } = Select;
const { TabPane } = Tabs;
function adduser(props){
    useEffect(()=>{
        props.getUserdata()
        props.getidentity()
    },[])
    let [iconLoading,setloading]=useState(false);
    const { getFieldDecorator } =props.form;
    let handleSubmit = e => {
        e.preventDefault();
        props.form.validateFields((err, values) => {
          if (values.username !=="" && values.userpwd !=="") {
              console.log({
                user_name:values.username,
                user_pwd:values.userpwd
            })
            props.adduser({
                user_name:values.username,
                user_pwd:values.userpwd,
                identity_id:values.identityid
            })
          }  
        })
    }
    //console.log(props)
    const {userlist,identitylist}=props;
    return(
        <div className={style.user_wrap}>
            <Content className={style.content}>
                <div className={style.user_box}>
                    <Tabs defaultActiveKey="1" animated={false} type="card">
                        <TabPane tab={<Button>添加用户</Button>} key="1" >
                            <Form onSubmit={(e)=>handleSubmit(e)}>
                                <Form.Item>
                                    {getFieldDecorator('userpwd', {
                                        rules: [
                                            { required: true, message: '密码不能为空' },
                                            { pattern: /^(?=.*?[a-z])(?=.*?[A-Z])(?=.*?\d)(?=.*?[!#@*&.]).*$/, message: '数据有误' }
                                        ],
                                    })(
                                        <Input
                                        placeholder="请输入用户名"
                                        />
                                    )}
                                </Form.Item>
                                <Form.Item>
                                    {getFieldDecorator('username', {
                                        rules: [
                                            { required: true, message: '用户名不能为空' },
                                            { pattern: /^(?=.*?[a-z])(?=.*?[A-Z])(?=.*?\d)(?=.*?[!#@*&.]).*$/, message: '数据有误' }
                                        ],
                                    })(
                                        <Input
                                        placeholder="请输入密码"
                                        />
                                    )}
                                </Form.Item>
                                <Form.Item>
                                {getFieldDecorator('identityid', {
                                    rules: [{ required: true, message: "id类型必选" }],
                                    initialValue: "请选择身份id"
                                    })(
                                        <Select style={{ width: 120 }}>
                                            {
                                                identitylist&&identitylist.map(item=>
                                                    <Option value={item.identity_id} key={item.identity_id}>{item.identity_text}</Option>
                                                )
                                            }
                                        </Select>
                                    )}
                                </Form.Item>
                                <div className={style.btn_box}>
                                <Form.Item>
                                    <Button
                                        type="primary"
                                        htmlType="submit"
                                        loading={iconLoading}
                                        >
                                        确定
                                    </Button>
                                    </Form.Item>
                                    <Form.Item>
                                        <Button>
                                            重置
                                        </Button>
                                    </Form.Item>  
                                </div>
                            </Form> 
                        </TabPane>
                        <TabPane tab={<Button>更新用户</Button>} key="2">
                            <Form >
                                <Form.Item>
                                {getFieldDecorator('exam_id', {
                                    rules: [{ required: true, message: "id类型必选" }],
                                    initialValue: "请选择身份id"
                                    })(
                                        <Select style={{ width: 120 }}>
                                            {
                                                userlist&&userlist.map(item=>
                                                    <Option value={item.user_name} key={item.user_id}>{item.user_name}</Option>
                                                )
                                            }
                                            
                                        </Select>
                                    )}
                                </Form.Item>
                                <Form.Item>
                                    {getFieldDecorator('username', {
                                        validateTrigger: "onBlur",
                                        rules: [{ required: true, message: '密码不能为空' }],
                                    })(
                                        <Input
                                        placeholder="请输入密码"
                                        />
                                    )}
                                </Form.Item>
                                <Form.Item>
                                    {getFieldDecorator('userpwd', {
                                        validateTrigger: "onBlur",
                                        rules: [{ required: true, message: '用户名不能为空' }],
                                    })(
                                        <Input
                                        placeholder="请输入姓名"
                                        />
                                    )}
                                </Form.Item>
                                <Form.Item>
                                {getFieldDecorator('exam_id', {
                                    rules: [{ required: true, message: "id类型必选" }],
                                    initialValue: "请选择身份id"
                                    })(
                                        <Select style={{ width: 120 }}>
                                             {
                                                identitylist&&identitylist.map(item=>
                                                    <Option value={item.identity_id} key={item.identity_id}>{item.identity_text}</Option>
                                                )
                                            }
                                        </Select>
                                    )}
                                </Form.Item>
                                <div className={style.btn_box}>
                                    <Form.Item>
                                        <Button
                                            type="primary"
                                            loading={iconLoading}
                                            >
                                            确定
                                        </Button>
                                        </Form.Item>
                                        <Form.Item>
                                            <Button>
                                                重置
                                            </Button>
                                    </Form.Item>  
                                </div>
                            </Form> 
                        </TabPane>
                    </Tabs>
                </div>
                <div className={style.user_box}>
                    <Button>添加身份</Button>
                    <Form onSubmit={(e)=>handleSubmit(e)}>
                        <Form.Item>
                            {getFieldDecorator('add', {
                                rules: [
                                    { required: true, message: '密码不能为空' },
                                    { pattern: /^(?=.*?[a-z])(?=.*?[A-Z])(?=.*?\d)(?=.*?[!#@*&.]).*$/, message: '数据有误' }
                                ],
                            })(
                                <Input
                                placeholder="请输入用户名"
                                />
                            )}
                        </Form.Item>
                        <div className={style.btn_box}>
                            <Form.Item>
                                <Button
                                    type="primary"
                                    loading={iconLoading}
                                    >
                                    确定
                                </Button>
                                </Form.Item>
                                <Form.Item>
                                    <Button>
                                        重置
                                    </Button>
                            </Form.Item>  
                        </div>
                    </Form>
                    
                </div>
                <div className={style.user_box}>
                    <Button>添加api接口权限</Button>
                    <Form.Item>
                        {getFieldDecorator('add', {
                            rules: [
                                { required: true, message: '密码不能为空' },
                                { pattern: /^(?=.*?[a-z])(?=.*?[A-Z])(?=.*?\d)(?=.*?[!#@*&.]).*$/, message: '数据有误' }
                            ],
                        })(
                            <Input
                            placeholder="请输入用户名"
                            />
                        )}
                    </Form.Item>
                    <Form.Item>
                        {getFieldDecorator('add', {
                            rules: [
                                { required: true, message: '密码不能为空' },
                                { pattern: /^(?=.*?[a-z])(?=.*?[A-Z])(?=.*?\d)(?=.*?[!#@*&.]).*$/, message: '数据有误' }
                            ],
                        })(
                            <Input
                            placeholder="请输入用户名"
                            />
                        )}
                    </Form.Item>
                    <Form.Item>
                        {getFieldDecorator('add', {
                            rules: [
                                { required: true, message: '密码不能为空' }
                            ],
                        })(
                            <Input
                            placeholder="请输入用户名"
                            />
                        )}
                    </Form.Item>
                    <div className={style.btn_box}>
                        <Form.Item>
                            <Button
                                type="primary"
                                loading={iconLoading}
                                >
                                确定
                            </Button>
                            </Form.Item>
                            <Form.Item>
                                <Button>
                                    重置
                                </Button>
                        </Form.Item>  
                    </div>
                </div>
                <div className={style.user_box}>
                    <Button>添加视图接口权限</Button>
                    <Form.Item>
                        {getFieldDecorator('add', {
                            rules: [
                                { required: true, message: '密码不能为空' },
                                { pattern: /^(?=.*?[a-z])(?=.*?[A-Z])(?=.*?\d)(?=.*?[!#@*&.]).*$/, message: '数据有误' }
                            ],
                        })(
                            <Input
                            placeholder="请输入用户名"
                            />
                        )}
                    </Form.Item>
                    <Form.Item>
                        {getFieldDecorator('exam_id', {
                            rules: [{ required: true, message: "id类型必选" }],
                            initialValue: "请选择身份id"
                            })(
                                <Select style={{ width: 120 }}>
                                        {
                                        identitylist&&identitylist.map(item=>
                                            <Option value={item.identity_id} key={item.identity_id}>{item.identity_text}</Option>
                                        )
                                    }
                                </Select>
                            )}
                    </Form.Item>
                    <div className={style.btn_box}>
                        <Form.Item>
                            <Button
                                type="primary"
                                loading={iconLoading}
                                >
                                确定
                            </Button>
                            </Form.Item>
                            <Form.Item>
                                <Button>
                                    重置
                                </Button>
                        </Form.Item>  
                    </div>
                </div>
                <div className={style.user_box}>
                    <Button>给身份设定api接口权限</Button>
                    <Form.Item>
                        {getFieldDecorator('exam_id', {
                            rules: [{ required: true, message: "id类型必选" }],
                            initialValue: "请选择身份id"
                            })(
                                <Select style={{ width: 120 }}>
                                        {
                                        identitylist&&identitylist.map(item=>
                                            <Option value={item.identity_id} key={item.identity_id}>{item.identity_text}</Option>
                                        )
                                    }
                                </Select>
                            )}
                    </Form.Item>
                    <Form.Item>
                        {getFieldDecorator('exam_id', {
                            rules: [{ required: true, message: "id类型必选" }],
                            initialValue: "请选择身份id"
                            })(
                                <Select style={{ width: 120 }}>
                                        {
                                        identitylist&&identitylist.map(item=>
                                            <Option value={item.identity_id} key={item.identity_id}>{item.identity_text}</Option>
                                        )
                                    }
                                </Select>
                            )}
                    </Form.Item>
                    <div className={style.btn_box}>
                        <Form.Item>
                            <Button
                                type="primary"
                                loading={iconLoading}
                                >
                                确定
                            </Button>
                            </Form.Item>
                            <Form.Item>
                                <Button>
                                    重置
                                </Button>
                        </Form.Item>  
                    </div>
                </div>
                <div className={style.user_box}>
                    <Button>给身份设定视图权限</Button>
                    <Form.Item>
                        {getFieldDecorator('exam_id', {
                            rules: [{ required: true, message: "id类型必选" }],
                            initialValue: "请选择身份id"
                            })(
                                <Select style={{ width: 120 }}>
                                        {
                                        identitylist&&identitylist.map(item=>
                                            <Option value={item.identity_id} key={item.identity_id}>{item.identity_text}</Option>
                                        )
                                    }
                                </Select>
                            )}
                    </Form.Item>
                    <Form.Item>
                        {getFieldDecorator('exam_id', {
                            rules: [{ required: true, message: "id类型必选" }],
                            initialValue: "请选择身份id"
                            })(
                                <Select style={{ width: 120 }}>
                                        {
                                        identitylist&&identitylist.map(item=>
                                            <Option value={item.identity_id} key={item.identity_id}>{item.identity_text}</Option>
                                        )
                                    }
                                </Select>
                            )}
                    </Form.Item>
                    <div className={style.btn_box}>
                        <Form.Item>
                            <Button
                                type="primary"
                                loading={iconLoading}
                                >
                                确定
                            </Button>
                            </Form.Item>
                            <Form.Item>
                                <Button>
                                    重置
                                </Button>
                        </Form.Item>  
                    </div>
                </div>
            </Content>
        </div>
    )
}
const mapStateToProp=state=>{
    return{
        ...state.user
    }
}
const mapDispatchToProp=dispatch=>{
    return{
        getUserdata:()=>{
            dispatch({
                type:"user/getUserdata"
            })
        },
        adduser:(payload)=>{
           console.log("200...",payload)
            dispatch({
                type:"user/adduser",
                payload
            })
        },
        getidentity:()=>{
            dispatch({
                type:"user/getidentity"
            })
        }
    }
}
export default connect(mapStateToProp, mapDispatchToProp)(Form.create()(adduser));