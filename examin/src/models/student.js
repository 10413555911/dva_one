import { student } from '../services/index'
export default {
    namespace: 'student',
    state: {
        studentAll: '' //全部学生的接口
    },
    effects: {
        *student({ payload }, { call, put }) {  // 点击添加试卷
            let data = yield student(payload);
            console.log(data, '111')
        },
    },
    reducers: {

    },
};
