import React from 'react';
import { connect } from 'dva';
import styles from './addQuestions.scss';
import { Input ,Select,Button} from 'antd';
import Editor from 'for-editor'
const { Option, OptGroup } = Select;

class IndexPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
       valeu1:"",
       value2:""
    };
  }
  handleChange=(e)=>{
    console.log(e.target)
  }
  render() {
    const {value1,value2}=this.state;
    return (
      <div className={styles.home}>
        <div className={styles.inp_box}>
          <h4>题目信息</h4>
          <p>题干</p>
          <Input placeholder="请输入题目标题,不超过20个字" onChange={(e)=>this.handleChange(e)} />
        </div>
        <div className={styles.quest}>
          <h4>题目主题</h4>
          <Editor value={value1} onChange={(e)=>this.handleChange(e)} style={{height:212}} />
        </div>
        <div className={styles.selectbox}>
          <h4>请选择考试</h4>
          <Select defaultValue="周考1" style={{ width: 200 }} onChange={(e)=>this.handleChange(e)}>
            <OptGroup>
              <Option value="周考1">周考1</Option>
              <Option value="周考2">周考2</Option>
              <Option value="周考3">周考3</Option>
              <Option value="月考">月考</Option>
            </OptGroup>
          </Select>
        </div>
        <div className={styles.selectbox}>
          <h4>请选择课程类型</h4>
          <Select defaultValue="javaScript上" style={{ width: 200 }} onChange={(e)=>this.handleChange(e)}>
            <OptGroup>
              <Option value="javaScript上">javaScript上</Option>
              <Option value="javaScript下">javaScript下</Option>
              <Option value="模块开发">模块开发</Option>
              <Option value="移动开发">移动开发</Option>
            </OptGroup>
          </Select>
        </div>
        <div className={styles.selectbox}>
          <h4>请选择题目类型</h4>
          <Select defaultValue="简答题" style={{ width: 200 }} onChange={(e)=>this.handleChange(e)}>
            <OptGroup>
              <Option value="简答题">简答题</Option>
              <Option value="javaScript下">javaScript下</Option>
              <Option value="模块开发">模块开发</Option>
              <Option value="移动开发">移动开发</Option>
            </OptGroup>
          </Select>
        </div>
        <div className={styles.quest}>
          <h4>题目主题</h4>
          <Editor value={value2} onChange={(e)=>this.handleChange(e)} style={{height:212}} />
        </div>
        <div className={styles.btn}>
          <Button type="primary">
            提交
          </Button>
        </div>
      </div>
    );
  }
}

export default connect()(IndexPage);
