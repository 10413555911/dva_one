import addQuestions from "../pages/index/questions/addQuestions/addQuestions"
import questionsType from "../pages/index/questions/questionsType/questionsType"
import watchQuestions from "../pages/index/questions/watchQuestions/watchQuestions"
import addUser from "../pages/index/user/addUser/adduser"
import showUser from "../pages/index/user/showUser/showuser"
import addClass from '../pages/index/class/classman/classman'
import addroom from '../pages/index/class/addroom/addroom'
import examList from '../pages/index/examination/examList/examList'
import administration from '../pages/index/administration/administration'
import addExam from '../pages/index/examination/addExam/addExam'
import studentment from '../pages/index/class/studentMent/studentMent'

const router = [
    {
        type: "试题管理",
        id: "router.questions",
        children: [
            {
                path: "/index/addQuestions",
                component: addQuestions,
                id: "router.questions.add",
                title: "添加试题",
                view_id: 'main-addQuestions'
            },
           
            {
                path: "/index/questionsType",
                component: questionsType,
                id: "router.questions.type",
                title: "试题分类",
                view_id: "main-questionsType"
            },
            {
                path: "/index/watchQuestions",
                component: watchQuestions,
                id: "router.questions.view",
                title: "查看试题",
                view_id: "main-watchQuestions"
            }
        ]
    },
    {
        type: "用户管理",
        id: "router.user",
        children: [
            {
                path: "/index/addUser",
                component: addUser,
                id: "router.user.add",
                title: "添加用户",
                view_id: "main-addUser"
            },
            {
                path: "/index/showUser",
                component: showUser,
                id: "router.user.show",
                title: "用户展示",
                view_id: "main-showUser"
            }
        ]
    },
    {
        type: "考试管理",
        id: "router.exam",
        children: [
            {
                path: "/index/addExam",
                component: addExam,
                id: "router.exam.add",
                title: "添加考试",
                view_id: "main-addExam"
            },
            {
                path: "/index/examList",
                component: examList,
                id: "router.exam.list",
                title: "试卷列表",
                view_id: "main-examList"
            }
        ]
    },
    {
        type: "班级管理",
        id: "router.class",
        children: [
            {
                path: "/index/addClass",
                component: addClass,
                id: "router.class.add",
                title: "班级管理",
                view_id: "main-grade"
            },
            {
                path: "/index/addroom",
                component: addroom,
                id: "router.class.add",
                title: "教室管理",
                view_id: "main-room"

            },
            {
                path: "/index/studentment",
                component: studentment,
                id: "router.class.student",
                title: "学生管理",
                view_id: "main-student"
            }
        ]
    },
    {
        type: "阅卷管理",
        id: "router.examination",
        children: [
            {
                path: "/index/administration",
                component: administration,
                id: "router.examination.awat",
                title: "阅卷管理",
                view_id: "main-examPaperClassmate"
            }
        ]
    },


]
export default router;