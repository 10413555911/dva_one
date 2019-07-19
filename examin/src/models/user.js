import {
  updataUser,
  getUserdata,
  getidentity,
  api_authority,
  api_authority_relation,
  view_authority,
  view_authority_relation,
  adduser,
  addidentity,
  authorityApi,
  authorityView,
  setIdentityApi,
  getAvatar
} from "../services/user"
export default {
    namespace: 'user',
    state: {
        userlist:[],//用户数据
        identitylist:[],//展示身份数据
        apilist:[],//展示api接口权限
        api_identity:[],//展示身份和api权限关系
        viewdata:[],//展示视图权限数据
        view_identity:[],//展示身份和视图权限数据
        Avater:"",
        msg:""

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
      //视图权限
      *view_authority_relation({ payload }, { call, put }){
        let data = yield call(view_authority_relation);
        yield put({ type: 'getviewauthority',payload:data});
      },
      //添加用户
      *adduser({ payload }, { call, put }){
          let data=yield call(adduser,payload);
          yield put({
            type:"addUser",
            payload:data
          })
      },
      //添加身份
      *addidentity({ payload }, { call, put }){
        let data=yield call(addidentity,payload);
        console.log("user...",data)
        yield put({
          type:"addIdentity",
          payload:data
        })
      },
      //添加api接口权限
      *authorityApi({ payload }, { call, put }){
        let data=yield call(authorityApi,payload);
        yield put({
          type:"addauthorityApi",
          payload:data
        })
      },
      //添加视图接口
      *authorityView({ payload }, { call, put }){
        let data=yield call(authorityView,payload);
        yield put({
          type:"AuthorityView",
          payload:data
        })
      },
      //添加身份api接口权限
      *setIdentityApi({ payload }, { call, put }){
        let data=yield call(setIdentityApi,payload);
        yield put({
            type:"setIdApi",
            payload:data
        })
      },
      //更新用户
      *updataUser({ payload }, { call, put }){
          let data=yield call(updataUser,payload);
          yield put({
            type:"updatauser",
            payload:data
          })
          
      },
      //添加头像接口
      *getAvatar({ payload }, { call, put }){
        let data=yield call(getAvatar,payload);
        yield put({
          type:"getavatar",
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
        },
        addIdentity(state, {payload}){
          return { ...state, payload};
        },
        addauthorityApi(state, {payload}){
          console.log(payload)
          return { ...state, payload};
        },
        AuthorityView(state, {payload}){
          return {...state,payload}
        },
        setIdApi(state, {payload}){
          console.log(payload)
          return {...state,payload}
        },
        //请求头像
        getavatar(state,{payload}){
          return {...state,Avater:payload}
        },
        //更新用户
        updatauser(state, {payload}){
          return {...state,msg:payload.mag}
        }
        
    },
  
  };