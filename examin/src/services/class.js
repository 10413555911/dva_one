import request from '../utils/request'
export function grade() {    //获取已经分配的教室的班级
    return request.get('/manger/grade'
    )
}
export function room() {    //获取已经分配的教室的班级
    return request.get('/manger/room'
    )
}
export function addgrade(payload) {    //获取已经分配的教室的班级
    return request.post('/manger/grade', payload
    )
}
export function update_class(payload) {    //更新班级信息
    return request.put('/manger/grade/update', payload
    )
}
export function delete_class(data) {    //删除班级接口
    //正确
    return request.delete('/manger/grade/delete', { data }
    )
}




