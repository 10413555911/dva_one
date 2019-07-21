import React from 'react';
import {connect} from "dva"
import style from  "../../pages/index/user/addUser/adduser.scss"
import {Input, Select,Button ,Form,Tabs} from "antd"
const { Option } = Select;
const { TabPane } = Tabs;

class Tables1 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            iconLoading:false
        };
    }
    componentDidMount(){
    }
    handleSubmit=e=>{
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
          if (values.username !=="" && values.userpwd !=="") {
            this.props.adduser({

                user_pwd:values.userpwd,
                 user_name:values.username,
                identity_id:values.identityid
            })
          }  
        })
    }
    handleSubmitupdata=e=>{

    }
    render() {
        const {identitylist,userlist}=this.props
        const { getFieldDecorator } =this.props.form;
        return (
            <React.Fragment>
                <Tabs defaultActiveKey="1" animated={false} type="card">
                        <TabPane tab={<Button style={{width:80,borderRadius:0,borderColor:"#0A40FD",color:"#0A40FD"}}>添加用户</Button>} key="1" >
                            <Form onSubmit={(e)=>this.handleSubmit(e)}>
                                <Form.Item>
                                    {getFieldDecorator('username', {
                                        rules: [
                                            { required: true, message: '用户不能为空' }
                                        ],
                                    })(
                                        <Input
                                        placeholder="请输入用户名"
                                        />
                                    )}
                                </Form.Item>
                                <Form.Item>
                                    {getFieldDecorator('userpwd', {
                                        rules: [
                                            { required: true, message: '密码名不能为空' }
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
                                        <Select style={{ width: 140,color:"#ccc" }}>
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
                                        loading={this.state.iconLoading}
                                        className={style.sub_btn}
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
                        <TabPane tab={<Button style={{width:80,borderRadius:0,borderColor:"#0A40FD",color:"#0A40FD"}}>更新用户</Button>} key="2">
                            <Form  onSubmit={(e)=>this.handleSubmitupdata(e)}>
                                <Form.Item>
                                {getFieldDecorator('updataid', {
                                    rules: [{ required: true, message: "id类型必选" }],
                                    initialValue: "请选择身份id"
                                    })(
                                        <Select style={{ width: 140,color:"#ccc" }}>
                                            {
                                                userlist&&userlist.map(item=>
                                                    <Option value={item.user_name} key={item.user_id}>{item.user_name}</Option>
                                                )
                                            }
                                            
                                        </Select>
                                    )}
                                </Form.Item>
                                <Form.Item>
                                    {getFieldDecorator('updataname', {
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
                                        <Select style={{ width: 140,color:"#ccc" }}>
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
                                            loading={this.iconLoading}
                                            className={style.sub_btn}
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
            </React.Fragment>
        );
    }
}
const mapStateToProp=state=>{
    return{
        ...state.user
    }
}
const mapDispatchToProp=dispatch=>{
    return{
        adduser:(payload)=>{
             dispatch({
                 type:"user/adduser",
                 payload
             })
         }
    }
}
export default connect(mapStateToProp,mapDispatchToProp)(Form.create()(Tables1));