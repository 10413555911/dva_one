import React from 'react';
import {connect} from "dva"
import style from  "../../pages/index/user/addUser/adduser.scss"
import {Input,Button ,Form} from "antd"
class Tables2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            iconLoading:false
        };
    }
    componentDidMount(){
    }
    handleSubmitidentity=e=>{
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            console.log(values.apiname)
          if (values.apiname !=="") {
            this.props.addidentity({
                identity_text:values.apiname
            })
          }  
        })
    }
    render() {
        const { getFieldDecorator } =this.props.form;
        return (
            <React.Fragment>
               <Button>添加身份</Button>
                    <Form onSubmit={(e)=>this.handleSubmitidentity(e)}>
                        <Form.Item>
                            {getFieldDecorator('apiname', {
                                rules: [
                                    {min:3,max:6,message:"身份长度不符"}
                                ],
                            })(
                                <Input
                                placeholder="请输入身份名称"
                                />
                            )}
                        </Form.Item>
                        <div className={style.btn_box}>
                            <Form.Item>
                                <Button
                                    htmlType="submit"
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
         }
    }
}
export default connect(mapStateToProp,mapDispatchToProp)(Form.create()(Tables2));