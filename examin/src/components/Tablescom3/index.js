import React from 'react';
import {connect} from "dva"
import style from  "../../pages/index/user/addUser/adduser.scss"
import {Input, Select, Layout,Button ,Form, Modal,Tabs,Table} from "antd"
const { Header, Footer, Sider, Content } = Layout;
const { Option } = Select;
const { TabPane } = Tabs;

class Tables3 extends React.Component {
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
            console.log({
                api_authority_text:values.apiname,
                api_authority_url:values.apiurl,
                api_authority_method:values.apifn
            })
          if (values.apiname !=="" && values.apiurl !==""&& values.apifn !=="") {
                this.props.authorityApi({
                    api_authority_text:values.apiname,
                    api_authority_url:values.apiurl,
                    api_authority_method:values.apifn
                })
          }  
        })
    }
    render() {
        const { getFieldDecorator } =this.props.form;
        return (
            <React.Fragment>
                <Button>添加api接口权限</Button>
                <Form onSubmit={(e)=>this.handleSubmit(e)}>
                    <Form.Item>
                        {getFieldDecorator('apiname', {
                            rules: [],
                        })(
                            <Input
                            placeholder="请输入api接口权限名称"
                            />
                        )}
                    </Form.Item>
                    <Form.Item>
                        {getFieldDecorator('apiurl', {
                            rules: [],
                        })(
                            <Input
                            placeholder="请输入api接口权限url"
                            />
                        )}
                    </Form.Item>
                    <Form.Item>
                        {getFieldDecorator('apifn', {
                            rules: [],
                        })(
                            <Input
                            placeholder="请输入api接口权限方法"
                            />
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
         },
         addidentity:(payload)=>{
            dispatch({
                type:"user/addidentity",
                payload
            })
         },
         authorityApi:payload=>{
             dispatch({
                 type:"user/authorityApi",
                 payload
             })
         }
    }
}
export default connect(mapStateToProp,mapDispatchToProp)(Form.create()(Tables3));