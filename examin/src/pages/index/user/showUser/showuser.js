import React, { useEffect, useState } from "react"
import { connect } from "dva"
import { Table, Tabs, Button } from 'antd';
import style from './showuser.scss'
const { TabPane } = Tabs;
function showuser(props) {
    const [loading] = useState(false)
    useEffect(() => {
        props.getUserdata()
        props.getidentity()
        props.api_authority()
        props.api_authority_relation()
        props.view_authority()
        props.view_authority_relation()
    }, [])
    const { userlist, identitylist, apilist, api_identity, viewdata, view_identity } = props;


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
            dataIndex: 'identity_text',
        }
    ];
    const apiauthoritycolumns = [
        {
            title: 'api权限名称',
            dataIndex: 'api_authority_text',
        },
        {
            title: 'api权限url',
            dataIndex: 'api_authority_url',
        },
        {
            title: 'api权限方法',
            dataIndex: 'api_authority_method',
        }
    ];
    const apiIdentitycolumns = [
        {
            title: '身份名称',
            dataIndex: 'identity_text',
        },
        {
            title: 'api权限名称',
            dataIndex: 'api_authority_text',
        },
        {
            title: 'api权限url',
            dataIndex: 'api_authority_url',
        },
        {
            title: 'api权限方法',
            dataIndex: 'api_authority_method',
        }
    ];
    const viewcolumns = [
        {
            title: '视图名称',
            dataIndex: 'view_authority_text',
        },
        {
            title: '视图id',
            dataIndex: 'view_id',
        }
    ];
    const viewauthoritycolumns = [
        {
            title: '身份',
            dataIndex: 'identity_text',
        },
        {
            title: '视图名称',
            dataIndex: 'view_authority_text',
        },
        {
            title: '视图id',
            dataIndex: 'view_id',
        }
    ];
    return (
        <div className={style.show_wrap}>
            <div>
                <Tabs defaultActiveKey="1" animated={false} type="card">
                    <TabPane tab={<Button className={style.btn} value="用户数据">用户数据</Button>} key="1">
                        <h2>用户数据</h2>
                        <Table loading={loading} columns={columns} rowKey="user_id" dataSource={userlist && userlist} />
                    </TabPane>
                    <TabPane tab={<Button className={style.btn} value="身份数据">身份数据</Button>} key="2">
                        <h2>身份数据</h2>
                        <Table columns={identitycolumns} dataSource={identitylist && identitylist} />
                    </TabPane>
                    <TabPane tab={<Button className={style.btn} value="api接口权限">api接口权限</Button>} key="3">
                        <h2>api接口权限</h2>
                        <Table columns={apiauthoritycolumns} dataSource={apilist && apilist} />
                    </TabPane>
                    <TabPane tab={<Button className={style.btn} value="身份和api接口关系">身份和api接口关系</Button>} key="4">
                        <h2>身份和api接口关系</h2>
                        <Table columns={apiIdentitycolumns} dataSource={api_identity && api_identity} />
                    </TabPane>
                    <TabPane tab={<Button className={style.btn} value="视图接口权限">视图接口权限</Button>} key="5">
                        <h2>视图接口权限</h2>
                        <Table columns={viewcolumns} dataSource={viewdata && viewdata} />
                    </TabPane>
                    <TabPane tab={<Button className={style.btn} value="身份和视图权限关系">身份和视图权限关系</Button>} key="6">
                        <h2>身份和视图权限关系</h2>
                        <Table columns={viewauthoritycolumns} dataSource={view_identity && view_identity} />
                    </TabPane>
                </Tabs>
                {/* */}
            </div>
        </div>
    )
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
        api_authority: () => {
            dispatch({
                type: "user/api_authority"
            })
        },
        api_authority_relation: () => {
            dispatch({
                type: "user/api_authority_relation"
            })
        },
        view_authority: () => {
            dispatch({
                type: "user/view_authority"
            })
        },
        view_authority_relation: () => {
            dispatch({
                type: "user/view_authority_relation"
            })
        }
    }
}
export default connect(mapStateToProp, mapDispatchToProp)(showuser);