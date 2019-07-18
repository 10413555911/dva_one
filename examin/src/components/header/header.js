import React,{useEffect,useState} from 'react';
import {connect} from "dva"
import style from './header.scss'
import {Select} from "antd";
const { Option } = Select;
function headers(props) {
  let handleProvinceChange=value=>{
    props.updataLocale(value)
  }
  return (
    <div className={style.header}>
      <div className={style.header_center}>
        <div>
          <img alt="" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1551624718911&di=4a7004f8d71bd8da84d4eadf1b59e689&imgtype=0&src=http%3A%2F%2Fimg105.job1001.com%2Fupload%2Falbum%2F2014-10-15%2F1413365052_95IE3msH.jpg" />
        </div>
        <div>
          <img className={style.portrait} alt="" />
          <span>chenmanjie</span>
        </div>
        <div>
          <Select
            defaultValue="中文"
            style={{ width: 120 }}
            onChange={(v)=>handleProvinceChange(v)}
          >
            <Option key="1" value={"zh"}>中文</Option>
            <Option key="2" value={"en"}>英文</Option> 
          </Select>
        </div>
      </div>
    </div>
  );
}
const mapStateToProps=state=>{
    return{
      ...state.global
    }
}
const mapDispatchToProps=dispatch=>{
  return{
    updataLocale:payload=>{
      dispatch({
        type:"global/updataLocale",
        payload
      })
  }
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(headers);