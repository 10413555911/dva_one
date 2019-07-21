import React, { useState, useEffect } from 'react';
import { connect } from 'dva';
import styles from './addroom.scss';
import { Form, Table, Button, Modal, Input } from 'antd';
const confirm = Modal.confirm
function addroom(props) {
    const { getFieldDecorator } = props.form;  //高阶组件收集数据
    const [visible, showVisible] = useState(false)  //弹框显示
    let { addRoom } = props
    useEffect(() => {
        props.addRoom_A()
    }, [])
    let remove = (id) => {   //点击删除教室 未调用接口
        confirm({
            title: '确定要删除此教室吗？',
            cancelText: "取消",
            okText: "确定",
            onOk() {
                props.DelRoom({
                    room_id: id.room_id
                })
            },
            onCancel() { },
        });
    }
    let NewClass_text = () => {
        props.form.validateFields((err, values) => {  //添加教室
            props.addroom_ADD({
                room_text: values.NewRoom
            })
            showVisible(false)
        })
    }
    const columns = [
        {
            title: '教室号',
            dataIndex: 'room_text',
        },
        {
            title: '操作',
            render: (text, record, index) => (
                <div style={{ color: 'blue', fontSize: '12px' }} onClick={() => { remove(text) }}>
                    删除
                </div>
            ),
        }
    ];
    return (

        <div className={styles.wrap}>
            <div className={styles.btn}>
                <Button type="primary" onClick={() => { showVisible(true) }}>
                    新建教室
                 </Button>
                <Modal
                    title="新建教室"
                    visible={visible}
                    onCancel={() => showVisible()}
                    onOk={() => { NewClass_text() }}
                    okText='确定'
                    cancelText='取消'
                >

                    <div>
                        <Form className={styles.content} >
                            <Form.Item>
                                <div><span style={{ color: 'red' }}>*</span><span>请输入班级</span></div>
                                {getFieldDecorator('NewRoom', {
                                    validateTrigger: "onBlur",
                                    rules: [{ required: true, message: '标题不能为空' }],
                                    initialValue: ""
                                })(
                                    <Input
                                        placeholder="新建教室名"
                                    />,
                                )}
                            </Form.Item>
                        </Form>
                    </div>
                </Modal>

            </div>
            <div className={styles.tables}>
                <Table columns={columns} dataSource={Object.values(addRoom)} rowKey='room_id' />
            </div>
        </div>
    )
}
const mapStateToProps = state => {
    return { ...state.class }
}
const mapDispatchToPorps = dispatch => {
    return {
        addRoom_A: () => {  //获取全部教室
            dispatch({
                type: 'class/addroom'
            })
        },
        addroom_ADD: (payload) => {  //获取全部教室
            dispatch({
                type: 'class/addroom_ADD',
                payload
            })
        },
        DelRoom: (payload) => {  //删除教室
            dispatch({
                type: 'class/DelRoom',
                payload
            })
        }
    }
}
export default connect(mapStateToProps, mapDispatchToPorps)(Form.create()(addroom))


