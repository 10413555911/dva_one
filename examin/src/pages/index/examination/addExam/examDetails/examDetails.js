import React, { useEffect, useState } from 'react';
import { connect } from 'dva';
import styles from './examDetails.scss';
import { Form, InputNumber, Input, Select, DatePicker, Button } from 'antd';
const { Option } = Select;
function examDetails(props) {
    let { examTypeDate,Allquestion } = props
    const { getFieldDecorator } = props.form;
    console.log(Allquestion)
    useEffect(() => {

    }, [])
    let submit = () => {   //点击提交按钮 
        // handleSubmit()  //调用提交接口
    }
    //   let handleSubmit = () => {
    //     props.form.validateFields((err, values) => {
    //       props.addexam({
    //         start_time:start,
    //         end_time:end,
    //         number:values.number,
    //         subject_id:values.subject_id,
    //         exam_id:values.exam_id,
    //         title:values.titleText
    //       })
    //     })
    //   }

    return <div>1</div>
}
const mapStateToProps = state => {
    return { ...state.subject, ...state.exam }
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
            console.log(payload)
            dispatch({
                type: 'exam/addexam',
                payload
            })
        }
    }
}
export default connect(mapStateToProps, mapDispatchToPorps)(Form.create()(examDetails))
