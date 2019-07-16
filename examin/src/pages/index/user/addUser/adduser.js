import React,{useEffect,useState} from "react"
import {connect} from "dva"
import style from  "./adduser.scss"
import {Input, Select, Layout,Button ,Form, Modal,Tabs,Table} from "antd"
import Tablescom from "@/components/Tablescom/index"
import Tablescom2 from "@/components/Tablescom2/index"
import Tablescom3 from "@/components/Tablescom3/index"
const { Header, Footer, Sider, Content } = Layout;
const { Option } = Select;
const { TabPane } = Tabs;
function adduser(props){
    useEffect(()=>{
        props.getUserdata()
        props.getidentity()
        props.view_authority()//视图权限接口
        props.api_authority()//api接口权限
        props.view_authority_relation()//身份视图接口权限
    },[])
    let [iconLoading,setloading]=useState(false);
    const { getFieldDecorator } =props.form;
    let handleSubmituser = e => {
        e.preventDefault();
        props.form.validateFields((err, values) => {
          if (values.username !=="" && values.userpwd !=="") {
            props.adduser({
                user_name:values.username,
                user_pwd:values.userpwd,
                identity_id:values.identityid
            })
          }  
        })
    }
    let handleSubmitupdata=e=>{
        e.preventDefault();
        props.form.validateFields((err, values) => {
            if(values){
                console.log(values)
            }
        })
    }
    let handleSubmitidentity=e=>{
        e.preventDefault();
        props.form.validateFields((err, values) => {
            if(values){
                console.log(e)
            }
        })
    }
    const {userlist,identitylist,viewdata,apilist,view_identity}=props;
    return(
        <div className={style.user_wrap}>
            <Content className={style.content}>
                <div className={style.user_box}>
                    <Tablescom 
                        identitylist={identitylist}
                        userlist={userlist}
                    />
                </div>
                <div className={style.user_box}>
                    <Tablescom2/>
                </div>
                <div className={style.user_box}>
                    <Tablescom3/>
                </div>
                <div className={style.user_box}>
                    <Button>添加视图接口权限</Button>
                    <Form.Item>
                        {getFieldDecorator('add', {
                            rules: [
                                
                            
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
                                        viewdata&&viewdata.map(item=>
                                            <Option value={item.view_authority_id} key={item.view_authority_id}>{item.view_authority_text}</Option>
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
                                        apilist&&apilist.map(item=>
                                            <Option value={item.api_authority_id} key={item.api_authority_id}>{item.api_authority_text}</Option>
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
                                       view_identity&&view_identity.map(item=>
                                            <Option value={item.identity_view_authority_relation_id} key={item.identity_view_authority_relation_id}>{item.view_authority_text}</Option>
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
        },
        view_authority:()=>{
            dispatch({
                type:"user/view_authority"
            })
        },
        api_authority:()=>{
            dispatch({
                type:"user/api_authority"
            })
        },
        view_authority_relation:()=>{
            dispatch({
                type:"user/view_authority_relation"
            })
        }
    }
}
export default connect(mapStateToProp, mapDispatchToProp)(Form.create()(adduser));