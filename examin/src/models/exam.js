import { addexam, del, examList } from '../services/index'
export default {
  namespace: 'exam',
  state: {
    //添加试题成功的 三个题
    Allquestion: null,
    obj:null
  },
  effects: {
    *addexam({ payload }, { call, put }) {  // 点击添加试卷
      let data = yield addexam(payload);
      yield put({
        type: 'Allquestion',
        payload: data.data.questions
      })
    },
    *del({ payload }, { call, put }) {  //删除试卷的接口
      let data = yield del(payload)

    },
    *examList({ payload }, { call, put }) {//获取试卷列表
      let data = yield examList()
      yield put({
        type:'examList_list',
        payload:data.exam
      })
    }
  },
  reducers: {
    Allquestion(state, action) {   //详情的几道题
      return { ...state, Allquestion: action.payload };
    },
    examList_list(state, action) {   //详情的几道题
      return { ...state, obj: action.payload };
    },
  },
};
