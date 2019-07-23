import React, { useEffect, useState, message } from 'react';
import { connect } from 'dva';
import style from './questionsType.scss'
import XLSX from 'xlsx'
import { Button, Table, Modal, Form, Input } from 'antd';
function questionsType(props) {
    let { subjectDataType } = props;
    useEffect(() => {
        props.subjectData()
    }, [])
    //导出表格
    let excel = (e) => {
        // console.log(e.target.result)
        // var files = e.target.files = files[0];
        // var reader = new FileReader();
        // reader.onload = function (e) {
        // var data = new Uint8Array(e.target.result);
        // var workbook = XLSX.read(data, { type: 'array' });
        // console.log(data)
        // }
        // 生成一个worshet
        var wq = XLSX.utils.json_to_sheet(subjectDataType)
        //生成一个 workBook
        var wb = XLSX.utils.book_new()
        //添加work shet    wb传入wq 在wb添加成功wq
        XLSX.utils.book_append_sheet(wb, wq)
        //导出 workBook
        XLSX.writeFile(wb, '12321.xlsb')
    }
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
    const [showModal, updataModal] = useState(false)
    let { getFieldDecorator } = props.form
    function handleSubmit() {
        props.form.validateFields((err, values) => {
            if (!err) {
                props.insertQuestionsType({
                    text: values.username,
                    sort: new Date().getTime() //通过时间戳
                })
                updataModal(false)
            } else {
                message.error(err.types.errors[0].message)
            }
        });
    }
    return (
        <div className={style.wrap}>
            <div className={style.main}>
                <div className={style.button}>
                    <Button type="primary" onClick={() => updataModal(true)} >
                        添加类型
                    </Button>
                    <Button style={{ marginLeft: '10px' }} onClick={() => excel()}>导出表格</Button>
                </div>
                <div className={style.from}>
                    <div>
                        <Table columns={columns} dataSource={subjectDataType} rowKey='questions_type_id' size="middle" />
                    </div>
                </div>
            </div>
            <Modal visible={showModal} title="添加考试类型" onCancel={() => updataModal(false)} onOk={() => handleSubmit()}>
                <Form onSubmit={handleSubmit}>
                    <Form.Item>
                        {getFieldDecorator('username', {
                            rules: [{ required: true, message: '请输入试题' }]
                        })(
                            <Input placeholder="Username" />,
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
        subjectData: () => {
            dispatch({
                type: 'subject/subjectData',
            })
        },
        insertQuestionsType: (payload) => {
            dispatch({
                type: 'subject/insertQuestionsType',
                payload
            })
        }
    }
}
export default connect(mapstateToProps, mapdispatchToProps)(Form.create()(questionsType));