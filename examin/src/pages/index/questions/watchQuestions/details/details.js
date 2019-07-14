import React, { useEffect } from 'react';
import { connect } from 'dva';
import styles from './details.scss';
import ReactMarkdown from 'react-markdown';
function details(props) {
    let { Objs } = props
    console.log(Objs)
    return <div className={styles.worp_box}>
        <div className={styles.box}>
            <div className={styles.center}>
                <div className={styles.left}>
                    <span>出题人:{Objs.user_name}</span>
                    <h4>出题信息</h4>
                    <div className={styles.small_Item}>
                        <span>{Objs.exam_name}</span>
                        <span>{Objs.subject_text}</span>
                        <span>{Objs.questions_type_text}</span>
                    </div>
                    <div>
                        <h4>{Objs && Objs.title}</h4>
                        <div className={styles.ti_text}>
                            <ReactMarkdown source={Objs.questions_stem} />
                        </div>
                    </div>
                </div>
                {/* 答案 */}
                <div className={styles.right}>
                    <div>
                    <ReactMarkdown source={Objs.questions_answer} />  
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

export default connect(mapStateToProps)(details)
