import React, { useEffect, useState } from "react";
import { connect } from "dva";
import styles from "./approval.scss";
import { Table } from "antd";
import Cookie from "js-cookie";
function paper(props) {
    const { AllClass_name } = props
    console.log(AllClass_name)
    useEffect(() => {
        props.manger();
    }, []);
    const columns = [
        {
            title: "班级名",
            dataIndex: "grade_name",
            key: "grade_name",
            render: grade_name => <div>{grade_name}</div>
        },
        {
            title: "课程名称",
            dataIndex: "subject_text",
            key: "subject_text",
            render: subject_text => (
                <>
                    <p>{subject_text}</p>
                </>
            )
        },
        {
            title: "阅卷状态",
            dataIndex: "user_name",
            key: "user_name"
        },
        {
            title: "课程名称",
            dataIndex: "subject_text",
            key: "room_id",
            render: subject_text => <>{subject_text}</>
        },
        {
            title: "成材率",
            dataIndex: "room_text",
            key: "room_text",
            render: room_text => <>{room_text}</>
        },
        {
            title: "操作",
            key: "operation",
            render: item => (
                <>
                    <a onClick={() => sure(item)}>批卷</a>
                </>
            )
        }
    ];
    let sure = item => {
        Cookie.set("name", item.grade_name);
        Cookie.set("id", item.grade_id);
        props.history.push(
            "/index/administration"
        );
    };
    return (
        <>
            <div className={styles.content}>
                <Table columns={columns} dataSource={AllClass_name} rowKey={"grade_id"} />
            </div>
        </>
    );
}
paper.propTypes = {};
const mapState = state => {
    return { ...state.student, ...state.class };
};
const mapDispatch = dispatch => {
    return {
        manger: payload => {
            dispatch({
                type: 'class/grade'
            });
        }
    };
};
export default connect(
    mapState,
    mapDispatch
)(paper);
