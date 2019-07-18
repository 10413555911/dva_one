import React from 'react';
import { connect } from "dva"
import style from "../../pages/index/user/addUser/adduser.scss"
import { Input, Select, Layout, Button, Form, Modal, Tabs, Table } from "antd"
const { Header, Footer, Sider, Content } = Layout;
const { Option } = Select;
const { TabPane } = Tabs;

class Tables6 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            iconLoading: false
        };
    }
    componentDidMount() {
        this.props.getidentity()
        this.props.getUserdata()
        this.props.api_authority()//api接口权限
        this.props.view_authority()
    }
    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            console.log(values.apiname)
            if (values.apiname !== "" && values.apiurl !== "" && values.apifn !== "") {

            }
        })
    }
    render() {
        const { identitylist, userlist, apilist,view_identity } = this.props
        const { getFieldDecorator } = this.props.form;
        return (
            <React.Fragment>
                 <Button>给身份设定视图权限</Button>
                <Form>
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
                    <Form.Item>
                        {getFieldDecorator('exam_id', {
                            rules: [{ required: true, message: "id类型必选" }],
                            initialValue: "请选择视图权限id"
                            })(
                                <Select style={{ width: 140,color:"#ccc" }}>
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
const mapStateToProp = state => {
    return {
        ...state.user
    }
}
const mapDispatchToProp = dispatch => {
    return {
        getUserdata: () => {
            dispatch({
                type: "user/getUserdata"
            })
        },
        getidentity: () => {
            dispatch({
                type: "user/getidentity"
            })
        },
        view_authority:()=>{
            dispatch({
                type:"user/view_authority"
            })
        },
        api_authority: () => {
            dispatch({
                type: "user/api_authority"
            })
        }
    }
}
export default connect(mapStateToProp, mapDispatchToProp)(Form.create()(Tables6));