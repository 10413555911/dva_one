import React from "react"
import {connect} from "dva"
import style from  "./adduser.scss"
import {Form} from "antd"
function adduser(){
    return(
        <div className={style.user_wrap}>
            添加用户
        </div>
    )
}
const mapStateToProp=state=>{
    return{
        ...state
    }
}
const mapDispatchToProp=dispatch=>{
    return{
        
    }
}
export default connect()(adduser);