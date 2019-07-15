import { subject, examType, subjectData, allQuestions, condition, insertQuestionsType, questions, userInfo, update } from '../services/index'

export default {
    namespace: 'subject',
    state: {
        TypeList: [],
        examTypeDate: [], //考试的类型
        subjectDataType: [], //日周月
        All: [],   //全部试题
        Objs: {},   // 试题的每一项
        userIds: '', //用户id,
        Alldatacomplie: null //编辑页面的每一个数据
    },
    effects: {
        *subject({ payload }, { call, put }) { 
            let data = yield call(subject)
            yield put({
                type: 'subjectDate',
                payload: data.data
            })
        },
        *examType({ payload }, { call, put }) { 
            let data = yield call(examType)
            yield put({
                type: 'examTypeDate',
                payload: data.data
            })
        },
        //获取所有试题的类型（第二页面）
        *subjectData({ payload }, { call, put }) {  
            let data = yield call(subjectData)
            yield put({
                type: 'subjectDa',
                payload: data.data
            })
        },
        //点击切换详情
        *clickitem({ payload, type }, { call, put }) {  
            yield put({
                type: 'ClickUpdata',
                payload
            })
        },
        //获取按条件全部试题
        *condition({ payload }, { call, put }) {
            let data = yield call(condition, payload)
            yield put({
                type: 'allQuestions_async',
                payload: data.data
            })
        },
        //添加试题类型
        *insertQuestionsType({ payload }, { call, put }) {
            let data = yield insertQuestionsType(payload)
            console.log(payload,data)
            if (data.code === 1) {
                yield put({
                    type: 'subjectData',
                })
            }
        },
        //查找用户id
        *userInfo({ payload }, { call, put }) {
            let data = yield userInfo(payload)
            yield put({
                type: 'userInfo_async',
                payload: data.data.identity_id
            })
        },
        //添加试题
        *questions({ payload }, { call, put }) {
            let data = yield call(questions, payload)
            console.log(data)
           
        },
        //获取所有的试题
        *allQuestions({ payload }, { call, put }) {
            let data = yield call(allQuestions)
            console.log(data)
            yield put({
                type: 'allQuestions_async',
                payload: data.data
            })
        },
        //编辑的数据
        *datacomplie({ payload }, { call, put }) {
            yield put({
                type: 'datacomplie_async',
                payload
            })
        },
        //编辑页
        *update({ payload }, { call, put }) {
          yield  console.log(payload)
            let data = yield update(payload)
            console.log(data,'q')
        },
    },

    reducers: {
        subjectDate(state, action) {
            return { ...state, TypeList: action.payload, };
        },
        examTypeDate(state, action) {
            return { ...state, examTypeDate: action.payload, };
        },
        subjectDa(state, action) {
            return { ...state, subjectDataType: action.payload, };
        },
        allQuestions_async(state, action) {
            return { ...state, All: action.payload, };
        },
        ClickUpdata(state, action) {
            return { ...state, Objs: action.payload };
        },
        userInfo_async(state, action) {
            return { ...state, userIds: action.payload };
        },
        datacomplie_async(state, action) {
            return { ...state, Alldatacomplie: action.payload };
        }
    },

};
