import React, { useEffect } from 'react';
import { connect } from 'dva';
import styles from './examList.scss';
import { Select, Button, Table } from 'antd';
const { Option } = Select;
const ButtonGroup = Button.Group;
function examList(props) {
  let { examTypeDate, TypeList, obj } = props
  useEffect(() => {
    props.examType()
    props.subject()
    props.examList()
  }, [])
  function computTime(obj) {
    let startTime = obj.start_time * 1;
    let endTime = obj.end_time * 1;
    let newTime = endTime - startTime;
    //计算出小时数
    var leave1 = newTime % (24 * 3600 * 1000);
    var hours = Math.floor(leave1 / (3600 * 1000));
    //计算相差分钟数
    var leave2 = leave1 % (3600 * 1000);
    var minutes = Math.floor(leave2 / (60 * 1000));
    //计算相差秒数
    var leave3 = leave2 % (60 * 1000);
    var seconds = Math.round(leave3 / 1000);
    return hours + ":" + minutes + ":" + seconds;
  }
  function Tochild(item) {
  }
  const columns = [
    {
      title: '试卷信息',
      dataIndex: 'title',
      key: 0,
      render: (tags, obj) => {
        return <div>
          <h4>{tags}</h4>
          <p><span style={{ marginRight: '10px' }}>考试时间：{computTime(obj)}</span><span>{obj.number}道题作弊{obj.status}分</span></p>
        </div>
      },
    },
    {
      title: '班级',
      dataIndex: 'grade_name',
      key: 1,
      render: tags => (
        <div>
          <h4>考试班级</h4>
          {tags.map((tag, index) => {
            return (
              <p key={index} style={{ margin: 0 }}>{tag}</p>
            );
          })}
        </div>
      ),
    },
    { title: '创建人', dataIndex: 'user_name', key: 2 },
    {
      title: '开始时间',
      dataIndex: 'start_time',
      key: 3,
      render: (item) => {
        return <div>
          <p>{new Date(item * 1).toLocaleDateString()}&nbsp;&nbsp;{new Date(item * 1).toLocaleTimeString()}</p>
        </div>
      }
    },
    {
      title: '结束时间',
      dataIndex: 'end_time',
      key: 4,
      render: (item) => { return <div><span>{new Date(item * 1).toLocaleString()}</span></div> }
    },
    {
      title: '详情',
      dataIndex: 'end_time',
      key: 5,
      render: (item) => { return <div className={styles.dire} onClick={() => { Tochild(item) }}>详情</div> }
    }
  ];
  return (
    <div className="content">
      <div className={styles.wrap}>
        <div className={styles.top}>
          <div>
            <span>考试类型:</span>
            <Select style={{ width: '60%', marginLeft: '20px' }} >
              {
                examTypeDate && examTypeDate.map((item, id) => {
                  return <Option key={id} value={item.exam_id}>{item.exam_name}</Option>
                }
                )
              }
            </Select>
          </div>
          <div>
            <span>课程:</span>
            <Select style={{ width: '60%', marginLeft: '20px' }}>
              {
                TypeList && TypeList.map((item, i) => {
                  return <Option key={i} value={item.subject_id}>{item.subject_text}</Option>
                }
                )
              }
            </Select>
          </div>
          <Button className={styles.btns} type="primary" ghost>
            查询
        </Button>
        </div>
        <div className={styles.list}>
          <div className={styles.head}>
            <span>试卷列表</span>
            <ButtonGroup className='btn'>
              <Button >全部</Button>
              <Button >进行中</Button>
              <Button >已结束</Button>
            </ButtonGroup>
          </div>
          <div>
            <Table
              columns={columns}
              dataSource={obj}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

examList.propTypes = {
};
const mapStateToProps = state => {
  return {
    ...state.subject, ...state.exam
  }
}
const mapDispatchToProps = dispatch => {
  return {
    examType: () => {
      dispatch({
        type: 'subject/examType'
      })
    },
    subject: () => {
      dispatch({
        type: 'subject/subJect'
      })
    },
    examList: () => {
      dispatch({
        type: 'exam/examList'
      })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(examList);