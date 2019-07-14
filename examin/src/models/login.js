import { login } from '../services/index'
import { routerRedux } from 'dva/router';
import { setToken, getToken } from '@/utils/index'
export default {
    //命名空间
    //名字对应你使用的哪一项
    namespace: 'login',
    //初始数据
    state: {
        isLogin: -1
    },
    //订阅
    subscriptions: {
        setup({ dispatch, history }) {  // eslint-disable-line
          return history.listen(({ pathname }) => {   //监听地址栏    ！！！pathname是解构出来的
            // 1.判断去的页面是否是登陆页面
            if (pathname.indexOf('/login') === -1) {        //查找是不是login页面
              // 1.1 判断是否有登陆态
              if (!getToken()){                             //判断getToken是否有token
                // 1.1.1没有登陆态，利用redux做路由跳转
                dispatch(routerRedux.replace({              //通过routerRedux跳路由 replace替换当前地址
                  pathname: `/login`,
                  search: `?redirect=${encodeURIComponent(pathname)}`  
                }))
              }
            // 1.2用户没有登录态
            }else{
              // 1.2.1去登陆页面，如果已登陆跳回首页
              if (getToken()){
                 // 利用redux做路由跳转
                 dispatch(routerRedux.replace({
                  pathname: `/index`,
                }))
              }
            }
          });
        },
      },
    //异步generator
    effects: {
        *login({ payload, type }, { call, put }) {
            let data = yield call(login, payload)    //call改变this指向
            if (data.code === 1) {
                // 1.设置cookie
                setToken(data.token)
            }
            console.log(payload, data.code)
            yield put({                       //put是等于调用同步里面的方法  
                type: 'updataLogin',          //等于同步里面的函数名
                payload: data.code        //这个是走了上面然后调用了updataLogin的值 在log页面进行了修改  成功改变为1 不成功为0
            })
        }
    },
    //同步
    reducers: {
        updataLogin(state, action) {
            return { ...state, isLogin: action.payload };
        },
    },

};

