import React,{useEffect,useState,message} from 'react';
import { connect } from 'dva';
import style from './questionsType.scss'
import { Button, Table, Modal,Form,Input } from 'antd';
function questionsType(props) {
    let {subjectDataType}=props;
    useEffect(() => {
        props.subjectData()
    }, [])
    const columns = [
        {
            title: '类型ID',
            dataIndex: 'questions_type_id',
        },
        {
            title: '类型名称',
            dataIndex: 'questions_type_text',
        },
        {
            title: '操作',
            dataIndex: 'questions_type_sort',
        },
    ];
    const [showModal,updataModal] = useState(false)
    let {getFieldDecorator} = props.form 
    function handleSubmit(){
        props.form.validateFields((err, values) => {
            if (!err) {
                props.insertQuestionsType({
                    text: values.username,
                    sort:new Date().getTime() //通过时间戳
                })
             updataModal(false)
            }else{
               message.error(err.types.errors[0].message)
            }
          });
    }
    return (
        <div className={style.wrap}>
            <div className={style.main}>
                <div className={style.button}>
                    <Button type="primary" onClick={()=>updataModal(true)} >
                        添加类型
                    </Button>
                </div>
                <div className={style.from}>
                    <div>
                        <Table columns={columns} dataSource={subjectDataType} rowKey='questions_type_id' size="middle" />
                    </div>
                </div>
            </div>
            <Modal visible={showModal} title="添加考试类型"    onCancel={()=>updataModal(false)}    onOk={()=>handleSubmit()}> 
                 <Form onSubmit={handleSubmit}>
                     <Form.Item>
                          {getFieldDecorator('username', {
                                rules: [{ required: true, message: '请输入试题' }]})(
                                        <Input placeholder="Username"/>,
                               )}
                     </Form.Item>
                 </Form>
            </Modal>
        </div>
    );
}
questionsType.propTypes = {
};
let mapstateToProps = state => {
    return { ...state.subject }
}
let mapdispatchToProps = dispatch => {
    return {
        subjectData:()=>{
            dispatch({
                type: 'subject/subjectData',
            })
        },
        insertQuestionsType:(payload)=>{
            dispatch({
                type: 'subject/insertQuestionsType',
                payload
            })
        }
    }
}
export default connect(mapstateToProps, mapdispatchToProps)(Form.create()(questionsType));