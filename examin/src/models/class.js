
import { grade, room, addgrade, update_class, delete_class } from '../services/index'
export default {
  namespace: 'class',
  state: {
    AllClass_name: '', //没有分配的教室
    Allroom: []  //全部教室号
  },
  effects: {
    *grade({ payload }, { call, put }) {  //获取已经分配的班级
      let data = yield grade()
      yield put({
        type: 'AllClass',
        payload: data.data
      })
    },
    *room({ payload }, { call, put }) {
      let data = yield room()
      console.log(data)
      yield put({
        type: 'Allroom',
        payload: data.data
      })
    },
    *addgrade({ payload }, { call, put }) {
      let data = yield addgrade(payload)
      console.log(data)

      // 现在的bug 创建完毕不显示
      yield put({
        type: 'room',
      })
    },
    *update_class({ payload }, { call, put }) {  //更新班级信息
      // let data = yield addgrade(payload)
      // console.log(data)
    },
    *delete_class({ payload }, { call, put }) {
      console.log(payload)
      let data = yield call(delete_class, payload)
      console.log(data)

    },


  },

  reducers: {
    AllClass(state, action) {
      return { ...state, AllClass_name: action.payload };
    },
    Allroom(state, action) {   //全部教室
      return { ...state, Allroom: action.payload };
    },
  },

};
