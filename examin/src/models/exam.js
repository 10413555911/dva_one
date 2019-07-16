import { addexam } from '../services/index'
export default {
  namespace: 'exam',
  state: {
    //添加试题成功的 三个题
    Allquestion:null
  },
  effects: {
    *addexam({ payload }, { call, put }) {  // eslint-disable-line
      let data = yield addexam(payload);
      yield put({
        type:'Allquestion',
        payload:data.data.questions
      })
    
    },
  },
  reducers: {
    Allquestion(state, action) {
      return { ...state, Allquestion:action.payload };
    },
  },
};
