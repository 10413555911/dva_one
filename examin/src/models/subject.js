import { subject, examType, subjectData, allQuestions, condition,insertQuestionsType } from '../services/index'

export default {
    namespace: 'subject',
    state: {
        TypeList: [], 
        examTypeDate: [], //考试的类型
        subjectDataType: [], //日周月
        All: [],   //全部试题
        Objs: {}    // 试题的每一项
    },
    //异步
    effects: {
        *subject({ payload }, { call, put }) {  // eslint-disable-line
            let data = yield call(subject)
            yield put({
                type: 'subjectDate',
                payload: data.data
            })
        },
        *examType({ payload }, { call, put }) {  // eslint-disable-line
            let data = yield call(examType)
            yield put({
                type: 'examTypeDate',
                payload: data.data
            })
        },
        *subjectData({ payload }, { call, put }) {  // eslint-disable-line
            let data = yield call(subjectData)
            console.log(data)
            yield put({
                type: 'subjectDa',
                payload: data.data
            })
        },
        *allQuestions({ payload }, { call, put }) {
            let data = yield call(allQuestions)
            yield put({
                type: 'allQuestions_async',
                payload: data.data
            })
        },
        *clickitem({ payload, type }, { call, put }) {     //点击切换详情
            yield put({
                type: 'ClickUpdata',
                payload
            })
        }
        ,
        *condition({ payload }, { call, put }) {
            let data = yield call(condition, payload)
            yield put({
                type: 'allQuestions_async',
                payload: data.data
            })
        },
        //添加试题类型
        *insertQuestionsType({ payload }, { call, put }) {
            let data = yield  insertQuestionsType(payload)
            if(data.code ===1) {
                yield put({
                    type: 'condition',      
                })
            }        
        },
    },
    //同步
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
        // insertQuestionsType_async(state, action){
        //     return { ...state, Objs: action.payload };
        // }
    },

};
