import {getUserdata,getidentity,api_authority,api_authority_relation,view_authority,view_authority_relation} from "../services/user"
export default {
    namespace: 'user',
    state: {
        userlist:[],//用户数据
        identitylist:[],//展示身份数据
        apilist:[],//展示api接口权限
        api_identity:[],//展示身份和api权限关系
        viewdata:[],//展示视图权限数据
        view_identity:[]//展示身份和视图权限数据
    },
  
    subscriptions: {
      setup({ dispatch, history }) {  // eslint-disable-line
        
      },
    },
  
    effects: {
      *getUserdata({ payload }, { call, put }) {  // eslint-disable-line
        let data = yield call(getUserdata);
        yield put({ type: 'getuserdata',payload:data});
      },
      *getidentity({ payload }, { call, put }) {  // eslint-disable-line
        let data = yield call(getUserdata);
        console.log("user...",data)
        yield put({ type: 'getidentitydata',payload:data});
      },
    },
  
    reducers: {
        getuserdata(state, {payload:{data}}) {
            return { ...state,userlist:data};
        },
        getidentitydata(state, {payload:{data}}){
            return { ...state,identitylist:data};
        }
    },
  
  };