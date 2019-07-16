import request from '../utils/request'
export function addexam(payload) {
    return request.post('/exam/exam', payload
    )
}
export function del(payload) {
    return request.delete('/exam/exam/' + payload,
    )
}

export function examList() {
    return request.get('/exam/exam/')
}