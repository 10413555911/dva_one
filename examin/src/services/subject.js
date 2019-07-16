import request from '../utils/request'
//获取所有的课程
export function subject() {
    return request.get('/exam/subject')
}
//获取所有的考试类型 (日周月)
export function examType() {
    return request.get('/exam/examType')
}
//获取所有的题目类型
export function subjectData() {
    return request.get('/exam/getQuestionsType')
}
//获取所有试题
export function allQuestions() {
    return request.get('/exam/questions/new')
}
//按要去获取试题
export function condition(payload) {
    return request.get('/exam/questions/condition', { params: payload })
}
//添加试题类型
export function insertQuestionsType(payload) {
    return request.get('/exam/insertQuestionsType', { params: payload })
}
//添加试题
export function questions(payload) {
    return request.post('/exam/questions', payload)
}
//获取用户id
export function userInfo() {
    return request.get('/user/userInfo'
    )
}
//更新试题接口
export function update(payload) {
    return request.put('/exam/questions/update', payload
    )
}



