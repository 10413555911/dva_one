import React, { useState, useEffect } from 'react';
import { connect } from 'dva';
import styles from './examDetails.scss';
import { Form, Drawer, Button, Select } from 'antd';
const { Option } = Select;
function examDetails(props) {
    let { Allquestion, TypeList, examTypeDate, subjectDataType, All } = props
    if (Allquestion) {
        localStorage.setItem('Allquestion', JSON.stringify(Allquestion)) //本地存储一下
    }
    const allquestion = JSON.parse(localStorage.getItem("Allquestion"))//获取本地存储
    const [visible, show] = useState(false)
    const [exam_shiti, setexam_shiti] = useState('')
    const [exam_type, setexam_type] = useState('')
    useEffect(() => {
        props.subjectDate()
        props.subjectData()
        props.Allquestions()
    }, [])

    let del = (item) => {
        props.del(item.subject_id)
    }
    let click = () => {
        show(false)
    }
    const [Index, setIndex] = useState(0);
    let chengeIndex = (i) => {
        setIndex(i)
    }
    let handclick = () => {
        props.findchange({ exam_id: exam_shiti, questions_type_id: exam_type })
    }
    let todetails = (item) => {
        props.clickUp(item)
        props.history.push('/index/details?id=' + item.questions_id)
    }
    let Changepage = (item) => {
        props.datacomplie(item)
        props.history.push('/index/compile?id=' + item.questions_id)
    }
    return (
        <div className={styles.wrap} >
            <Button className={styles.button} onClick={() => { show(true) }}>添加试题</Button>
            <Drawer

                title="查找试题"
                placement="right"
                closable={visible}
                visible={visible}
                onClose={() => click()}

            >
                <div className={styles.ct}>
                    <div className={styles.btns}>
                        <p>
                            <span>类型:</span>
                            {
                                TypeList.map((item, i) =>
                                    <span className={Index === i ? styles.actiov : ''} onClick={() => chengeIndex(i)} key={item.subject_id}>{item.subject_text}</span>
                                )
                            }
                        </p>
                    </div>
                    <div>
                        <span>考试类型 : </span>
                        <Select className={styles.Select} value={exam_shiti} onChange={(e) => { setexam_shiti(e) }} showSearch style={{ width: 100 }} optionFilterProp="children" filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}  >
                            {
                                examTypeDate.map(item => {
                                    return <Option value={item.exam_id} key={item.exam_id}>{item.exam_name}</Option>
                                })
                            }
                        </Select>
                    </div>
                    <div >
                        <span style={{ marginTop: '3px' }}>题目类型 : </span>
                        <Select className={styles.Select} value={exam_type} onChange={(e) => { setexam_type(e) }} showSearch style={{ width: 100 }} optionFilterProp="children" filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}  >
                            {
                                subjectDataType.map(item => {
                                    return <Option value={item.questions_type_id} key={item.questions_type_id}>{item.questions_type_text}</Option>
                                })
                            }
                        </Select>
                    </div>
                    <div>
                        <Button style={{ marginLeft: '85px', marginTop: '5px' }} type="primary" icon="download" onClick={() => handclick()}>
                            查找
                         </Button>
                    </div>
                    <div className={styles.st_list}>
                        {
                            All ? (All.map(item => {
                                return <div key={item.questions_id} className={styles.ant_list} >
                                    <span onClick={() => todetails(item)}>
                                        <p>{item.title}</p>
                                        <div className={styles.child}>
                                            <div>{item.questions_type_text}</div>
                                            <div>{item.subject_text}</div>
                                            <div>{item.exam_name}</div>
                                        </div>
                                        <p className={styles.fb}>dingshangshang发布</p>
                                    </span>
                                    <span className={styles.edit} onClick={() => Changepage(item)}>编辑</span>
                                </div>
                            })
                            ) : (<div className={styles.alter}>没有数据</div>)
                        }
                    </div>
                </div>

            </Drawer>
            <div className={styles.main}>
                <h2>123</h2>
                <div>考试时间：1小时三年十分钟后</div>
                <div className={styles.Allquestion}>
                    {
                        allquestion && allquestion.map((item, index) => {
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
    return { ...state.exam, ...state.subject }
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
        },
        subjectDate: () => {
            dispatch({
                type: 'subject/subJect',
            })
        },
        subjectData: () => {
            dispatch({
                type: 'subject/subjectData',
            })
        },
        Allquestions: () => {
            dispatch({
                type: 'subject/allQuestions'
            })
        },
        clickUp: (item) => {
            dispatch({
                type: 'subject/clickitem',
                payload: item
            })
        },
        datacomplie: (payload) => {
            dispatch({
                type: 'subject/datacomplie',
                payload
            })
        }
    }
}
export default connect(mapStateToProps, mapDispatchToPorps)(Form.create()(examDetails))
