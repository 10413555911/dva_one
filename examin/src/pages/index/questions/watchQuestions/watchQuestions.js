import React, { useEffect, useState } from 'react';
import { connect } from 'dva';
import { Radio, Select, Button } from 'antd';
import style from './watchQuestions.scss'
const { Option } = Select;
function watchQuestions(props) {
    let { TypeList, examTypeDate, subjectDataType,Alldatacomplie, All } = props;
    useEffect(() => {
        props.subjectDate() // 
        props.examType() // 获取所有日周月考
        props.subjectData() //获取所有的考试类型
        props.Allquestions() //获取所有题
    }, [])

    let todetails = (item) => {
        props.clickUp(item)
        props.history.push('/index/details?id=' + item.questions_id)
    }
    const [exam_shiti, setexam_shiti] = useState('')
    const [exam_type, setexam_type] = useState('')
    const [Index, setIndex] = useState(0);
    let handclick = () => {
        props.findchange({ exam_id: exam_shiti, questions_type_id: exam_type })
    }
    //点击跳转编辑页面
    let Changepage = (item) => {
        props.datacomplie(item)
        props.history.push('/index/compile?id=' + item.questions_id)
    }
    let chengeIndex = (i) => {
        setIndex(i)
    }
    return (
        <div className={style.wrap}>
            <div className={style.main}>
                <div className={style.btns}>
                    <p>类型:</p>
                    <p>
                        <span>all</span>
                        {
                            TypeList.map((item, i) =>
                                <span className={Index === i ? style.actiov : ''} onClick={() => chengeIndex(i)} key={item.subject_id}>{item.subject_text}</span>
                            )
                        }
                    </p>
                </div>
                <div className={style.type}>
                    <div>
                        <span>考试类型:</span>
                        <Select className={style.Select} value={exam_shiti} onChange={(e) => { setexam_shiti(e) }} showSearch style={{ width: 100 }} optionFilterProp="children" filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}  >
                            {
                                examTypeDate.map(item => {
                                    return <Option value={item.exam_id} key={item.exam_id}>{item.exam_name}</Option>
                                })
                            }
                        </Select>,
                    </div>
                    <div >
                        <span style={{ marginLeft: '5px' }}>题目类型:</span>
                        <Select className={style.Select} value={exam_type} onChange={(e) => { setexam_type(e) }} showSearch style={{ width: 100 }} optionFilterProp="children" filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}  >
                            {
                                subjectDataType.map(item => {
                                    return <Option value={item.questions_type_id} key={item.questions_type_id}>{item.questions_type_text}</Option>
                                })
                            }
                        </Select>,
                    </div>
                    <div>
                        <Button style={{ marginLeft: '35px' }} type="primary" icon="download" onClick={() => handclick()}>
                            查找
                         </Button>
                    </div>
                </div>
            </div>
            {/* 列表 */}
            <div className={style.st_list}>
                {
                    All ? (All.map(item => {
                        return <div key={item.questions_id} className={style.ant_list} >
                            <span onClick={() => todetails(item)}>
                                <p>{item.title}</p>
                                <div className={style.child}>
                                    <div>{item.questions_type_text}</div>
                                    <div>{item.subject_text}</div>
                                    <div>{item.exam_name}</div>
                                </div>
                                <p className={style.fb}>dingshangshang发布</p>
                            </span>
                            <span className={style.edit} onClick={() => Changepage(item)}>编辑</span>
                        </div>
                    })
                    ) : (<div className={style.alter}>没有数据</div>)
                }
            </div>
        </div>
    );
}
watchQuestions.propTypes = {
};
let mapstateToProps = state => {
    return { ...state.subject }
}
let mapdispatchToProps = dispatch => {
    return {
        subjectDate: () => {
            dispatch({
                type: 'subject/subject',
            })
        },
        examType: () => {
            dispatch({
                type: 'subject/examType',
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
        findchange: (exam_shiti) => {
            dispatch({
                type: 'subject/condition',
                payload: exam_shiti
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
//connect 链接仓库里面的方法                             调用高阶组件里面的方法   
export default connect(mapstateToProps, mapdispatchToProps)(watchQuestions);
