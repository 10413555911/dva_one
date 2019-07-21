import React from 'react';
import { connect } from "dva"
import style from "../../pages/index/user/addUser/adduser.scss"
import { Select, Button, Form} from "antd"
const { Option } = Select;

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
            console.log({
                identity_id:values.Identityid,
                api_authority_id:values.viewid
            })
            if (values.Identityid !== "" && values.viewid !== "") {
                this.props.setIdentityApi({
                    identity_id:values.Identityid,
                    api_authority_id:values.viewid
                })
                //console.log(mag)
            }
        })
    }
    render() {
        const { identitylist,apilist} = this.props
        const { getFieldDecorator } = this.props.form;
        return (
            <React.Fragment>
                 <Button>给身份设置API接口权限</Button>
                  <Form onSubmit={(e)=>this.handleSubmit(e)}>
                    <Form.Item>
                        {getFieldDecorator('Identityid', {
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
                        {getFieldDecorator('viewid', {
                            rules: [{ required: true, message: "id类型必选" }],
                            initialValue: "请选择视图权限id"
                            })(
                                <Select style={{ width: 140,color:"#ccc" }}>
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
        },
        setIdentityApi:payload=>{
            dispatch({
                type: "user/setIdentityApi"
            })
        }
    }
}
export default connect(mapStateToProp, mapDispatchToProp)(Form.create()(Tables6));