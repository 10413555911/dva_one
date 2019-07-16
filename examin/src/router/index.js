import addQuestions from "../pages/index/questions/addQuestions/addQuestions"
import questionsType from "../pages/index/questions/questionsType/questionsType"
import watchQuestions from "../pages/index/questions/watchQuestions/watchQuestions"
import addUser from "../pages/index/user/addUser/adduser"
import showUser from "../pages/index/user/showUser/showuser"
import addExam from '../pages/index/examination/addExam/addExam'
import examDetails from '../pages/index/examination/addExam/examDetails/examDetails'  //添加试卷
import examList from '../pages/index/examination/examList/examList'
// import details from '../pages/index/watchQuestions/details/details'
const router = [
    {
        type: "试题管理",
        children: [
            {
                path: "/index/addQuestions",
                component: addQuestions,
                title: "添加试题",
                ids: '1'
            },
            // {
            //     path: "/index/details/?id",
            //     component: details,
            // },
            {
                path: "/index/questionsType",
                component: questionsType,
                title: "试题分类",
                ids: '2'
            },
            {
                path: "/index/watchQuestions",
                component: watchQuestions,
                title: "查看试题",
                ids: '3'
            }
        ]
    },
    {
        type: "用户管理",
        children: [
            {
                path: "/index/addUser",
                component: addUser,
                title: "添加用户",
                ids: '4'
            },
            {
                path: "/index/showUser",
                component: showUser,
                title: "用户展示",
                ids: '5'
            }
        ]
    },
    {
        type: "考试管理",
        children: [
            {
                path: "/index/addExam",
                component: addExam,
                title: "添加考试",
                ids: '6'
            },
            {
                path: '/index/Details_texts',
                component: examDetails,
            },
            {
                path: "/index/examList",
                component: examList,
                title: "试卷列表",
                ids: '7',
            }
        ]
    },
    {
        type: "班级管理",
        children: [
            {
                path: "/index/showUser",
                component: showUser,
                title: "班级管理"
            },
            {
                path: "/index/showUser",
                component: showUser,
                title: "班级管理"
            },
            {
                path: "/index/showUser",
                component: showUser,
                title: "班级管理"
            }
        ]
    },
    {
        type: "阅卷管理",
        children: [
            {
                path: "/index/showUser",
                component: showUser,
                title: "阅卷管理"
            }
        ]
    },

]
export default router;