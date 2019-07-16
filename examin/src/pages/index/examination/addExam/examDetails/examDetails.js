import React, { useEffect, useState } from 'react';
import { connect } from 'dva';
import styles from './examDetails.scss';
import { Form, Drawer, Select, Button } from 'antd';
import Item from 'antd/lib/list/Item';
const { Option } = Select;
function examDetails(props) {
    let { examTypeDate, Allquestion } = props
    const { getFieldDecorator } = props.form;
    localStorage.setItem('Allquestion', JSON.stringify(Allquestion))
    useEffect(() => {

    }, [])
    const allquestion = JSON.parse(localStorage.getItem("Allquestion"))
    console.log(allquestion)
    const [visible, show] = useState(false)
    let del = (item) => {
        props.del(item.subject_id)
        console.log(item.subject_id)
    }
    return (
        <div className={styles.wrap}>
            <Button className={styles.button} onClick={() => { show(true) }}>添加试题</Button>
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
                <div className={styles.Allquestion}>
                    {
                        Allquestion && Allquestion.map((item, index) => {
                            return <div key={index} className={styles.detalis}>
                                <span onClick={() => del(item)}>删除</span>
                                <div style={{ fontWeight: '600', fontSize: '15px' }}>1:{item.title}</div>
                                <div style={{ fontSize: '13px', marginTop: '5px' }}>{item.subject_text}</div>
                                <p style={{ marginTop: '5px' }}>{item.questions_stem}</p>
                            </div>
                        })
                    }
                </div>
            </div>
        </div>
    )

}
const mapStateToProps = state => {
    return { ...state.exam }
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
        },
        del: (payload) => {
            dispatch({
                type: 'exam/del',
                payload
            })
        }
    }
}
export default connect(mapStateToProps, mapDispatchToPorps)(Form.create()(examDetails))
