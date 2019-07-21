import request from '../utils/request'
//获取获取学生试卷列表接口
export function student() {
    return request.get('/exam/student')
}

