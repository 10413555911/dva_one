import React, { useState, useEffect } from 'react';
import { connect } from 'dva';
import styles from './classman.scss';
import { Form, Table, Button, Modal, Input, Select, message } from 'antd';
const { Option } = Select;
function classman(props) {
    const { getFieldDecorator } = props.form;  //高阶组件收集数据
    const [visible, showVisible] = useState(false)  //弹框显示
    const [visible_change, showVisible_change] = useState(false)  //change弹框显示
    const [classvale, classvale_change] = useState()  //修改班级的数据
    let { AllClass_name, TypeList, Allroom, messgae_code } = props //获取教师
    // console.log(AllClass_name) //应该渲染的数据
    useEffect(() => {
        props.AllClass()
        props.examType()   //考试类型
        props.subject()   //课程
    }, [])
    // console.log(classvale.grade_id)
    let remove = (index) => {   //点击删除班级 未调用接口
        props.delete_class({
            grade_id: AllClass_name[index].grade_id
        })
        if (messgae_code === -1) {
            message.success('成功');
        } else {
            message.success('失败');
        }
    }
    let changes = (index) => {  //点击修改
        classvale_change(AllClass_name[index])
        showVisible_change(true)
    }
    let NewClass_text = () => {  //点击确定按钮
        props.form.validateFields((err, values) => {  //上传班级
            if (values.NewClass !== '' && values.titleClass !== '' && !values.titleText !== '') {
                props.addgrade({
                    grade_name: values.NewClass,
                    subject_id: values.titleClass,
                    room_id: values.titleClass
                })
                showVisible(false)
            }
            if (messgae_code === -1) {
                message.success('成功');
            } else {
                message.success('失败');
            }
        })
    }
    let NewClass_change = () => {  //点击修改弹框的确定按钮
        props.form.validateFields((err, values) => {
            console.log(values)
            props.update_class({
                grade_id: classvale.grade_id,
                grade_name: values.titleClass
            })
            if (messgae_code === -1) {
                message.success('成功');
            } else {
                message.success('失败');
            }
        })
        showVisible_change(false) //点击修改弹框的确定按钮消息
    }
    let handleSubmit = () => {   //收集表单

    }
    const columns = [
        {
            title: '班级名',
            dataIndex: 'grade_name',
        },
        {
            title: '课程名',
            dataIndex: 'subject_text',
        },
        {
            title: '教室号',
            dataIndex: 'room_text',
        },
        {
            title: '操作',
            render: (text, record, index) => (
                <div style={{ color: 'blue', fontSize: '12px' }}>
                    <span onClick={() => { remove(index) }}>删除</span>|<span onClick={() => { changes(index) }} >修改</span>
                </div>
            ),
        },
    ];
    return (

        <div className={styles.wrap}>
            <div className={styles.btn}>
                <Button type="primary" onClick={() => { showVisible(true) }}>
                    新建班级
                 </Button>
                <Modal
                    title="新建班级"
                    visible={visible}
                    onCancel={() => showVisible()}
                    onOk={() => { NewClass_text() }}
                    okText='确定'
                    cancelText='取消'
                >
                    <div>
                        <Form onSubmit={handleSubmit} className={styles.content} >
                            <Form.Item>
                                <div><span style={{ color: 'red' }}>*</span><span>请输入班级</span></div>
                                {getFieldDecorator('NewClass', {
                                    validateTrigger: "onBlur",
                                    rules: [{ required: true, message: '标题不能为空' }],
                                    initialValue: ""
                                })(
                                    <Input
                                        placeholder="请输入题目标题，不能超过20字"
                                    />,
                                )}
                            </Form.Item>
                            <Form.Item>
                                <div><span style={{ color: 'red' }}>*</span><span>请输入班级</span></div>
                                {getFieldDecorator('titleText', {
                                    validateTrigger: "onBlur",
                                    rules: [{ required: true, message: '标题不能为空' }],
                                    initialValue: ""
                                })(
                                    <Select
                                        showSearch
                                        style={{ width: 200 }}
                                        placeholder="Select a person"
                                    >
                                        {
                                            Allroom && Allroom.map((item, index) => {
                                                return <Option value={item.room_id} key={index}>{item.room_text}</Option>
                                            })
                                        }
                                    </Select>,
                                )}
                            </Form.Item>

                            <Form.Item>
                                <div><span style={{ color: 'red' }}>*</span><span>请输入班级</span></div>
                                {getFieldDecorator('titleClass', {
                                    validateTrigger: "onBlur",
                                    rules: [{ required: true, message: '标题不能为空' }],
                                    initialValue: classvale && classvale.titleClass
                                })(
                                    <Select
                                        showSearch
                                        style={{ width: 200 }}
                                    >
                                        {
                                            TypeList.map((item, index) => {
                                                return <Option value={item.subject_id} key={index}>{item.subject_text}</Option>
                                            })
                                        }
                                    </Select>,
                                )}
                            </Form.Item>
                        </Form>
                    </div>
                </Modal>
                <Modal
                    title="修改"
                    visible={visible_change}
                    onCancel={() => showVisible_change()}
                    onOk={() => { NewClass_change() }}
                    okText='确定'
                    cancelText='取消'
                >
                    <div>
                        <Form onSubmit={handleSubmit} className={styles.content} >
                            <Form.Item>
                                <div><span style={{ color: 'red' }}>*</span><span>请输入班级</span></div>
                                {getFieldDecorator('change_NewClass', {
                                    validateTrigger: "onBlur",
                                    rules: [{ required: true, message: '标题不能为空' }],
                                    initialValue: classvale && classvale.grade_name
                                })(
                                    <Input
                                        disabled={true}
                                    />,
                                )}
                            </Form.Item>
                            <Form.Item>
                                <div><span style={{ color: 'red' }}>*</span><span>请输入班级</span></div>
                                {getFieldDecorator('change_titleText', {
                                    validateTrigger: "onBlur",
                                    rules: [{ required: true, message: '标题不能为空' }],
                                    initialValue: classvale && classvale.room_text
                                })(
                                    <Select
                                        showSearch
                                        style={{ width: 200 }}
                                        placeholder="Select a person"
                                    >
                                        {
                                            Allroom && Allroom.map((item, index) => {
                                                return <Option value={item.room_id} key={index}>{item.room_text}</Option>
                                            })
                                        }
                                    </Select>,
                                )}
                            </Form.Item>

                            <Form.Item>
                                <div><span style={{ color: 'red' }}>*</span><span>请输入班级</span></div>
                                {getFieldDecorator('titleClass', {
                                    validateTrigger: "onBlur",
                                    rules: [{ required: true, message: '标题不能为空' }],
                                    initialValue: classvale && classvale.subject_text
                                })(
                                    <Select
                                        showSearch
                                        style={{ width: 200 }}
                                    >
                                        {
                                            TypeList.map((item, index) => {
                                                return <Option value={item.subject_id} key={index}>{item.subject_text}</Option>
                                            })
                                        }
                                    </Select>,
                                )}
                            </Form.Item>
                        </Form>
                    </div>

                </Modal>
            </div>
            <div className={styles.tables}>
                <Table columns={columns} dataSource={AllClass_name} rowKey='room_id' />
            </div>
        </div>
    )
}
const mapStateToProps = state => {
    return { ...state.class, ...state.subject }
}
const mapDispatchToPorps = dispatch => {
    return {
        AllClass: () => {
            dispatch({
                type: 'class/grade'
            })
        },
        examType: () => {  //获取全部教室
            dispatch({
                type: 'class/room'
            })
        },
        subject: () => {  //获取试题内容
            dispatch({
                type: 'subject/subJect'
            })
        },
        addgrade: (payload) => {  //添加班级接口
            dispatch({
                type: 'class/addgrade',
                payload
            })
        },
        update_class: (payload) => { //更新教室接口
            dispatch({
                type: 'class/update_class',
                payload
            })
        },
        delete_class: (payload) => { //删除班级接口
            console.log(payload)
            dispatch({
                type: 'class/delete_class',
                payload
            })
        }
    }
}
export default connect(mapStateToProps, mapDispatchToPorps)(Form.create()(classman))



// maskClosable