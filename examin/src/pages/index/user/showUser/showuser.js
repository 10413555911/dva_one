import React,{useEffect,useState} from "react"
import {connect} from "dva"
import {Form,Radio,Table,Tabs} from 'antd';
import style from './showuser.scss'
const { TabPane } = Tabs;
function showuser(props){
    useEffect(()=>{
       props.getUserdata()
       props.getidentity()
    },[])
    console.log("user",props)
    const {userlist,identitylist}=props;
    console.log(identitylist)
    const [uid,setuId]=useState("");
    let handleFormLayoutChange = e => {
        setuId(e.target.value)
    };
    const columns = [
        {
            title: '用户名',
            dataIndex: 'user_id',
        },
        {
            title: '密码',
            dataIndex: 'user_pwd',
        },
        {
            title: '身份',
            dataIndex: 'identity_text',
        },

    ];
    const identitycolumns = [
        {
            title: '身份名称',
            dataIndex: 'user_id',
        }
    ];
    return(
        <div className={style.show_wrap}>
            {/* <div>
                <Form>
                    <Form.Item>
                    <Radio.Group defaultValue="用户数据" onChange={(e)=>handleFormLayoutChange(e)}>
                        <Radio.Button value="用户数据">用户数据</Radio.Button>
                        <Radio.Button value="身份数据">身份数据</Radio.Button>
                        <Radio.Button value="api接口权限">api接口权限</Radio.Button>
                        <Radio.Button value="身份和api接口关系">身份和api接口关系</Radio.Button>
                        <Radio.Button value="视图接口权限">视图接口权限</Radio.Button>
                        <Radio.Button value="身份和视图权限关系">身份和视图权限关系</Radio.Button>
                    </Radio.Group>
                    </Form.Item>
                </Form>
            </div> */}
            <div>
                <Tabs defaultActiveKey="1" tabPosition={uid}>
                    <TabPane tab="用户数据" key="1">
                       <h2>用户数据</h2>
                       <Table columns={columns}  dataSource={userlist&&userlist} />
                    </TabPane>
                    <TabPane tab="用户数据" key="2">
                       <h2>身份数据</h2>
                       <Table columns={identitycolumns}  dataSource={identitylist&&identitylist} />
                    </TabPane>
                </Tabs>
                {/* */}
            </div>
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
       getidentity:()=>{
           dispatch({
            type:"user/getidentity"
           })
       }
    }
}
export default connect(mapStateToProp,mapDispatchToProp)(showuser);