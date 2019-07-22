import React, { useEffect } from 'react';
import { connect } from 'dva';
import styles from './details.scss';
import ReactMarkdown from 'react-markdown';
function details(props) {
    let {All } = props
    useEffect(()=>{
       props.data({questions_id:props.location.search.split('=')[1]})    //调用查看试题的接口
    },[])
    if (!All.length){
        return null;
    }
    return <div className={styles.worp_box}>
        <div className={styles.box}>
            <div className={styles.center}>
                <div className={styles.left}>
                    <span>出题人:{All[0].exam_name}</span>
                    <h4>出题信息</h4>
                    <div className={styles.small_Item}>
                        <span>{All[0].exam_name}</span>
                        <span>{All[0].subject_text}</span>
                        <span>{All[0].questions_type_text}</span>
                    </div>
                    <div>
                        <h4>{All[0] && All[0].title}</h4>
                        <div className={styles.ti_text}>
                            <ReactMarkdown source={All[0].questions_stem} />
                        </div>
                    </div>
                </div>
                {/* 答案 */}
                <div className={styles.right}>
                    <div>
                    <ReactMarkdown source={All[0].questions_answer} />  
                    </div>
                </div>
            </div>
        </div>
    </div>
}

const mapStateToProps = state => {
    return {
        ...state.subject
    }
}
const mapDispatchProps = dispatch => {
    return {
        data: (payload) => {
            dispatch({
                type: 'subject/condition',
                payload
            })
        },
    }
}
export default connect(mapStateToProps,mapDispatchProps)(details)
