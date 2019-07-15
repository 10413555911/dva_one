import request from '../utils/request'
export function addexam(payload) {
    console.log('123123')
    return request.post('/exam/exam', payload
    )
}