import { getstudent } from '../services/index'
export default {
    namespace: 'student',
    state: {
        studentAll: [] //全部学生的接口
    },
    effects: {
        *getstudent({ payload }, { call, put }) {
            console.log("111",payload)
            let data = yield call(getstudent,payload)
            console.log("111...",data)
            yield put({
                type: 'getStudent',
                payload: data
            })
        }
    },
    reducers: {
        getStudent(state,action){
            return{...state,studentAll:action.payload}
        }
    },
};
