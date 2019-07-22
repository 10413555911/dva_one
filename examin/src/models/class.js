
import { grade, room, addgrade, update_class, delete_class, addroom, addroom_ADD, DelRoom, Allstudent } from '../services/index'
export default {
  namespace: 'class',
  state: {
    AllClass_name: '', //没有分配的教室
    Allroom: [],  //全部教室号
    messgae_code: -1,
    addRoom: [],
    Allstudent_All: []
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
      yield put({
        type: 'Allroom',
        payload: data.data
      })
    },
    *addgrade({ payload }, { call, put }) { //添加班级   !!!!!!!!!!!!!
      let data = yield addgrade(payload)
      console.log(data)
      yield put({
        type: 'code',
        codes: data.code
      })
      // 现在的bug 创建完毕不显示
      yield put({
        type: 'room',
      })
    },
    *update_class({ payload }, { call, put }) {  //更新班级信息
      let data = yield update_class(payload)
      console.log(data)
    },
    *delete_class({ payload }, { call, put }) {
      let data = yield call(delete_class, payload)  //删除班级号
      console.log(data)
      yield put({
        type: 'code',
        codes: data.code
      })
    },
    *addroom({ payload }, { call, put }) {   //获取全部教室
      let data = yield call(addroom)
      // console.log(data)
      yield put({
        type: 'addRoom_code',
        payload: data.data
      })
    },
    *addroom_ADD({ payload }, { call, put }) {   //添加教室
      let data = yield call(addroom_ADD, payload)
      console.log(data)
      yield put({
        type: 'addroom',
      })
    },
    *DelRoom({ payload }, { call, put }) {   //删除教室
      yield call(DelRoom, payload)
      yield put({
        type: 'addroom',
      })
    },
    *Allstudent({ payload }, { call, put }) {   //获取全部学生
      let data = yield call(Allstudent)
      console.log(data)
      yield put({
        type: 'student',
      })
    },

  },

  reducers: {
    AllClass(state, action) {  // 没有分配的教室
      return { ...state, AllClass_name: action.payload };
    },
    Allroom(state, action) {   //全部教室
      return { ...state, Allroom: action.payload };
    },
    code(state, action) {   //code嘛    问题是取反
      return { ...state, messgae_code: action.codes };
    },
    addRoom_code(state, action) {   //code嘛    问题是取反
      return { ...state, addRoom: action.payload };
    },
    student(state, action) {   //全部学生
      return { ...state, Allstudent_All: action.payload };
    }
  },

};
