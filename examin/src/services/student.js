import request from '../utils/request'
//获取获取学生试卷列表接口
export function getstudent(payload) {
    return request.get('/exam/student',{ params: payload })
}

