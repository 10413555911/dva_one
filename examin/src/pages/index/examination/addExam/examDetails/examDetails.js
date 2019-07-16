import React, { useEffect, useState } from 'react';
import { connect } from 'dva';
import styles from './examDetails.scss';
import { Form,Drawer, Select,Button } from 'antd';
const { Option } = Select;
function examDetails(props) {
    let { examTypeDate, Allquestion } = props
    const { getFieldDecorator } = props.form;
    console.log(Allquestion)
    useEffect(() => {
    }, [])
    const [visible,show] = useState(false)
    return (
        <div className={styles.wrap}>
            <Button className={styles.button} onClick={()=>{show(true)}}>添加试题</Button>
            <Drawer
                title="Basic Drawer"
                placement="right"
                closable={visible}
                visible={visible}
            >
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
            </Drawer>
            <div className={styles.main}>
                <h2>123</h2>
                <div>考试时间：1小时三年十分钟后</div>

                <div className={styles.Allquestion}></div>
            </div>

        </div>
    )

}
const mapStateToProps = state => {
    return { ...state }
}
const mapDispatchToPorps = dispatch => {
    return {
        examType: () => {
            dispatch({
                type: 'subject/examType'
            })
        },
        subject: () => {
            dispatch({
                type: 'subject/subject'
            })
        },
        addexam: (payload) => {
            dispatch({
                type: 'exam/addexam',
                payload
            })
        }
    }
}
export default connect(mapStateToProps, mapDispatchToPorps)(Form.create()(examDetails))
