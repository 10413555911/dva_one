import React, { useState,useEffect } from 'react';

import { connect } from 'dva'
import style from './header.scss'
import {injectIntl} from 'react-intl';
function Example(props) {
  return (
    <div className={style.header}>
      <div className={style.header_center}>
        <div>
          <img alt="" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1551624718911&di=4a7004f8d71bd8da84d4eadf1b59e689&imgtype=0&src=http%3A%2F%2Fimg105.job1001.com%2Fupload%2Falbum%2F2014-10-15%2F1413365052_95IE3msH.jpg" />
        </div>
        <div className={style.btn}>
          <button onClick={() => props.changeLocale(props.intl.locale === 'en' ? 'zh' : 'en')}>{props.intl.locale === 'en' ? '英文' : '中文'}</button>
        </div>
        <div>
          <img className={style.portrait} alt="" />
          <span>chenmanjie</span>
        </div>
      </div>
    </div>
  );
}
Example.propTypes = {
};

const mapDispatchToProps = dispatch => {
  return {
    changeLocale: payload => {
      console.log(payload)
      dispatch({
        type: 'global/updateLocale',
        payload
      })
    }
  }
}
export default injectIntl(connect(null, mapDispatchToProps)(Example));
