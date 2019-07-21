import request from '../utils/request'
export function grade() {               //获取已经分配教室的班级
    return request.get('/manger/grade'
    )
}
export function room() {                //获取全部教室
    return request.get('/manger/room'
    )
}
export function addgrade(payload) {     //添加班级接口
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
export function addroom() {    //获取全部教室
    return request.get('/manger/room'
    )
}
export function addroom_ADD(payload) {    //获取全部教室
    return request.post('/manger/room', payload
    )
}
export function DelRoom(payload) {    //删除教室
    console.log(payload)
    return request({
        method: 'delete',
        url: '/manger/room/delete',
        data: payload
    });
}

export function Allstudent() {    //获取全部学生
    return request.get('/manger/student'
    )
}





