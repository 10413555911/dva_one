import React from "react"
import {connect} from "dva"
import style from  "./adduser.scss"
import { Layout,Form} from "antd"
import Tablescom from "@/components/Tablescom/index"
import Tablescom2 from "@/components/Tablescom2/index"
import Tablescom3 from "@/components/Tablescom3/index"
import Tablescom4 from "@/components/Tablescom4/index"
import Tablescom5 from "@/components/Tablescom5/index"
import Tablescom6 from "@/components/Tablescom6/index"
const { Content } = Layout;
function adduser(props){
    const {userlist,identitylist}=props;
    return(
        <div className={style.user_wrap}>
            <Content className={style.content}>
                <div className={style.user_box}>
                    <Tablescom 
                        identitylist={identitylist}
                        userlist={userlist}
                    />
                </div>
                <div className={style.user_box}>
                    <Tablescom2/>
                </div>
                <div className={style.user_box}>
                    <Tablescom3/>
                </div>
                <div className={style.user_box}>
                    <Tablescom4/>
                </div>
                <div className={style.user_box}>
                    <Tablescom5/>
                </div>
                <div className={style.user_box}>
                    <Tablescom6/>
                </div>
            </Content>
        </div>
    )
}
const mapStateToProp=state=>{
    return{
        ...state.user
    }
}
const mapDispatchToProp=dispatch=>{
    return{
       
    }
}
export default connect(mapStateToProp, mapDispatchToProp)(Form.create()(adduser));