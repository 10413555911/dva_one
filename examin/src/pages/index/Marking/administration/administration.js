import React, { useEffect } from 'react';
import { connect } from 'dva';
import styles from './administration.scss';
import { Form, Select, Button, Table } from 'antd'
const { Option } = Select
function administration(props) {
    // let {approvalList} = props.markingmanagement
    //console.log(approvalList, "status.....")
    const columns = [
        {
            title: '班级',
            // render: ()=><span>{name}</span>,
            key: '1',
        },
        {
            title: '姓名',
            dataIndex: 'student_name',
            key: '2',
        },
        {
            title: '阅卷状态',
            dataIndex: `status === 0: '未阅'? '已阅'`,
            key: '3',
        },
        {
            title: '开始时间',
            dataIndex: 'start_time',
            key: '4',
        },
        {
            title: '结束时间',
            dataIndex: 'end_time',
            key: '5',
        },
        {
            title: '成材率',
            dataIndex: '',
            key: '6',
        },
        {
            title: '操作',
            render: (item) => <a onClick={() => nextMarking(item)}>批卷</a>,
            key: '7',
        }
    ];
    useEffect(() => {

        //props.getStudentData()

    }, [])
    let nextMarking = (item) => {
        props.history.push('/home/marking?id=' + item.exam_student_id)
    }
    // let id = props.location.search.split("&&")[0].split("=")[1]
    return (

        <div className={styles.wrap}>
            <div className={styles.top}>
                <Form layout="inline">
                    <Form.Item label="状态" className={styles.input}>
                        <Select
                            style={{ width: 200 }}
                        >
                            <Option value="rmb">RMB</Option>
                            <Option value="dollar">Dollar</Option>
                        </Select>
                    </Form.Item>
                    <Form.Item label="班级" className={styles.input}>
                        <Select
                            style={{ width: 200 }}
                        >
                            <Option value="rmb">RMB</Option>
                            <Option value="dollar">Dollar</Option>
                        </Select>
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit" className={styles.button}>查询</Button>
                    </Form.Item>
                </Form>
                <div className={styles.cont}>
                    <h4>试题列表</h4>
                    <Table columns={(columns)} dataSource={null} />
                </div>
            </div>
        </div>
    );
}
administration.propTypes = {

};
const mapStateToProps = state => {
    return {
        ...state
    }
}
const mapDispachToProps = dispatch => {
    return {

    }
}
export default connect(mapStateToProps, mapDispachToProps)(Form.create()(administration));