import request from '../utils/request'
export function login(params) {
    return request.post('/user/login', params)
}
//获取视图权限数据
export function authority() {
    return request.get('/user/view_authority')
}

