import React, { useEffect, useState } from 'react';
import { connect } from 'dva';
import styles from './addQuestions.scss';
import { Input, Select, Button, Form, Modal } from 'antd';
import Editor from 'for-editor';
const { Option } = Select;
function addQuestions(props) {
  const { getFieldDecorator } = props.form;
  let { examTypeDate, subjectDataType, TypeList } = props
  useEffect(() => {
    props.examType()
    props.subJect()
    props.subjectData()
    props.userId()
  }, []);
  const [visibles, showVisible] = useState(false)
  function submit() {
    handleSubmit()
  }
  let handleSubmit = (e) => {
    props.form.validateFields((err, values) => {
      if (values.titleText !== "" && values.questions_type_id !== "" && values.value !== "" && values.subject_id !== "" && values.exam_id !== "" && values.questions_answer !== "") {
        props.questions({
          questions_type_id: values.questions_type_id,
          questions_stem: values.value,
          subject_id: values.subject_id,  
          exam_id: values.exam_id,
          user_id:'w6l6n-cbvl6s',
          questions_answer: values.valueowen,
          title: values.titleText
        })
        showVisible(true)
      }
    });
  }
  return (
    <Form onSubmit={handleSubmit} className={styles.content}>
      <div className={styles.content_box}>
        <h2 className={styles.title}> </h2>
        <div className={styles.main}>
          <div className={styles.markcont}>
            <p>题目信息</p>
            <Form.Item>
              {getFieldDecorator('titleText', {
                validateTrigger: "onBlur",
                rules: [{ required: true, message: '标题不能为空' }],
              })(
                <Input
                  placeholder="请输入题目标题，不能超过20字"
                />,
              )}
            </Form.Item>
            <p>题目管理</p>
            <Form.Item>
              {getFieldDecorator('value', {
                rules: [{ required: true, message: "答案信息必填" }],
                initialValue: '',
              })(
                <Editor height='auto' />
              )}
            </Form.Item>
          </div>
          <div>
            <p>请选择考试类型：</p>
            <Form.Item>
              {getFieldDecorator('exam_id', {
                rules: [{ required: true, message: "题目类型必选" }],
                initialValue: "请选择题目类型"
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
          <div>
            <p>请选择课程类型：</p>
            <Form.Item>
              {getFieldDecorator('subject_id', {
                rules: [{ required: true, message: "题目类型必选" }],
                initialValue: "请选择题目类型"
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
          <div>
            <p>请选择题目类型：</p>
            <Form.Item>
              {getFieldDecorator('questions_type_id', {
                rules: [{ required: true, message: "题目类型必选" }],
                initialValue: "请选择题目类型"
              })(
                <Select style={{ width: 120 }}>
                  {
                    subjectDataType.map((item, index) => {
                      return <Option value={item.questions_type_id} key={item.questions_type_id}>{item.questions_type_text}</Option>
                    })
                  }
                </Select>
              )}
            </Form.Item>

          </div>
          <div className={styles.markcont}>
            <h2>答案信息</h2>
            <Form.Item>
              {getFieldDecorator('valueowen', {
                rules: [{ required: true, message: "答案信息必填" }],
                initialValue: '',
              })(
                <Editor height='auto' />
              )}
            </Form.Item>
          </div>
          <Button type="primary" htmlType="submit" >提交</Button>
        </div>
      </div>
      <Modal title="确定要添加？"  visible={visibles}  onCancel={()=>showVisible()}    onOk={()=>showVisible(false)}></Modal>
    </Form>

  );
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
    subJect: () => {
      dispatch({
        type: 'subject/subJect'
      })
    },
    subjectData: () => {
      dispatch({
        type: 'subject/subjectData'
      })
    },
    userId: () => {
      dispatch({
        type: 'subject/userInfo'
      })
    },
    questions: (payload) => {
      dispatch({
        type: 'subject/questions',
        payload
      })
    },
  }
}
export default connect(mapStateToProps, mapDispatchToPorps)(Form.create()(addQuestions))
