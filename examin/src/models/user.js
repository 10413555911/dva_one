import {getUserdata,getidentity,api_authority,api_authority_relation,view_authority,view_authority_relation,adduser} from "../services/user"
export default {
    namespace: 'user',
    state: {
        userlist:[],//用户数据
        identitylist:[],//展示身份数据
        apilist:[],//展示api接口权限
        api_identity:[],//展示身份和api权限关系
        viewdata:[],//展示视图权限数据
        view_identity:[],//展示身份和视图权限数据

    },
  
    subscriptions: {
      setup({ dispatch, history }) {  // eslint-disable-line
        
      },
    },
  
    effects: {
      //用户数据
      *getUserdata({ payload }, { call, put }) {  
        let data = yield call(getUserdata);
        yield put({ type: 'getuserdata',payload:data});
      },
      //展示身份数据
      *getidentity({ payload }, { call, put }) { 
        let data = yield call(getidentity);
        yield put({ type: 'getidentitydata',payload:data});
      },
      //展示api接口权限
      *api_authority({ payload }, { call, put }) { 
        let data = yield call(api_authority);
        yield put({ type: 'getapi_authority',payload:data});
      },
      //展示身份和api权限关系
      *api_authority_relation({ payload }, { call, put }) { 
        let data = yield call(api_authority_relation);
        yield put({ type: 'getapi_relation',payload:data});
      },
      //展示身份和视图权限数据
      *view_authority({ payload }, { call, put }){
        let data = yield call(view_authority);
        yield put({ type: 'getview',payload:data});
      },
      //
      *view_authority_relation({ payload }, { call, put }){
        let data = yield call(view_authority_relation);
        yield put({ type: 'getviewauthority',payload:data});
      },
      //adduser
      *adduser({ payload }, { call, put }){
        console.log(111)
          let data=yield call(adduser,payload);
          console.log("user...",data)
          yield put({
            type:"addUser",
            payload:data
          })
      }
    },
  
    reducers: {
        getuserdata(state, {payload:{data}}) {
          return { ...state,userlist:data};
        },
        getidentitydata(state, {payload:{data}}){
          return { ...state,identitylist:data};
        },
        getapi_authority(state, {payload:{data}}){
          return { ...state,apilist:data};
        },
        getapi_relation(state, {payload:{data}}){
          return { ...state,api_identity:data};
        },
        getview(state, {payload:{data}}){
          return { ...state, viewdata:data};
        },
        getviewauthority(state, {payload:{data}}){
          return { ...state, view_identity:data};
        },
        addUser(state, {payload}){
          return { ...state, payload};
        }
    },
  
  };