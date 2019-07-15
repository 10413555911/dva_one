import React, { useEffect, useState } from 'react';
import { connect } from 'dva';
import styles from './addExam.scss';
import { Form, InputNumber, Input, Select, DatePicker, Button } from 'antd';
const { Option } = Select;
function addExam(props) {
  let { examTypeDate, TypeList } = props
  const { getFieldDecorator } = props.form;
  useEffect(() => {
    props.examType()   //考试类型
    props.subject()   //课程
  }, [])
  let submit = () => {   //点击提交按钮
    handleSubmit()
  }
  let handleSubmit = () => {
    props.form.validateFields((err, values) => {

    })
  }

  let end_time = (e, timestamp) => {  //结束时间的时间戳
    var date = new Date(timestamp)   //
    var time1 = date.getTime();
  }
  let start_time = (e, timestamp) => {  //开始时间的时间戳
    var date = new Date(timestamp)   //
    var time2 = date.getTime();
  }

  return (
    <Form layout="inline" className={styles.content} onSubmit={handleSubmit}>
      <div className={styles.main}>
        <div className={styles.every}>
          <div><span style={{ color: 'red' }}>* </span><span> 试卷名称:</span></div>
          <div className={styles.select}>
            <Form.Item>
              {getFieldDecorator('titleText', {
                validateTrigger: "onBlur",
                rules: [{ required: true, message: '标题不能为空' }],
              })(
                <Input className={styles.input}
                />,
              )}
            </Form.Item>
          </div>
        </div>
        <div className={styles.every}>
          <div><span style={{ color: 'red' }}>* </span><span> 请选择考试类型:</span></div>
          <div className={styles.select}>
            <Form.Item>
              {getFieldDecorator('questions_type_id', {
                validateTrigger: "onBlur",
                rules: [{ required: true, message: "题目类型必选" }],
              })(
                <Select style={{ width: 120 }}>
                  {
                    examTypeDate.map((item, index) => {
                      return <Option value={item.exam_id} key={item.exam_id}>{item.exam_name}</Option>
                    })
                  }
                </Select>
              )}
            </Form.Item>
          </div>
        </div>
        <div className={styles.every}>
          <div><span style={{ color: 'red' }}>* </span><span> 请选择课程:</span></div>
          <div className={styles.select}>
            <Form.Item>
              {getFieldDecorator('qwe', {
                rules: [{ required: true, message: "题目类型必选" }],
                initialValue: ""
              })(
                <Select style={{ width: 120 }}>
                  {
                    TypeList.map((item, index) => {
                      return <Option value={item.subject_id} key={item.subject_id}>{item.subject_text}</Option>
                    })
                  }
                </Select>
              )}
            </Form.Item>
          </div>
        </div>
        <div className={styles.every}>
          <div><span style={{ color: 'red' }}>* </span><span> 设置题量:</span></div>
          <div className={styles.select}>
            <Form.Item>
              {getFieldDecorator('number', {
              })(
                <InputNumber min={3} max={10} initialValue={3} />
              )}
            </Form.Item >
          </div>
        </div>
        <div className={styles.every}>
          <div><span style={{ color: 'red' }}>* </span><span> 考试开始时间:</span></div>
          <div className={styles.tiems_start_end}>
            <div className={styles.select}>
              <div>
                <DatePicker className='DatePicker'
                  onChange={start_time}
                  showTime
                  format="YYYY-MM-DD "
                  placeholder="开始日期"
                />
              </div>
            </div>
            <span> ~ </span>
            <div className={styles.select}>
              <div>
                <div >
                  <DatePicker className='DatePicker'
                    onChange={end_time}
                    showTime
                    format="YYYY-MM-DD"
                    placeholder="结束日期"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <Button className={styles.button} type="primary" htmlType="submit" >创建试卷</Button>
      </div>
    </Form>
  )
}
const mapStateToProps = state => {
  return { ...state.subject }
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
  }
}
export default connect(mapStateToProps, mapDispatchToPorps)(Form.create()(addExam))
