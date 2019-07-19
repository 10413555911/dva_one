import addQuestions from "../pages/index/questions/addQuestions/addQuestions"
import questionsType from "../pages/index/questions/questionsType/questionsType"
import watchQuestions from "../pages/index/questions/watchQuestions/watchQuestions"
import addUser from "../pages/index/user/addUser/adduser"
import showUser from "../pages/index/user/showUser/showuser"
import Details from "../pages/index/questions/watchQuestions/details/details"
const router=[
    {
        type:"试题管理",
        id:"router.questions",
        children:[
            {
                path:"/index/addQuestions",
                component:addQuestions,
                id:"router.questions.add",
                title:"添加试题"
            },
            {
                path: "/index/details/?id",
                component: Details,
            },
            {
                path: "/index/questionsType",
                component: questionsType,
                id:"router.questions.type",
                title:"试题分类"
            },
            {
                path:"/index/watchQuestions",
                component:watchQuestions,
                id:"router.questions.view",
                title:"查看试题"
            }
        ]
    },
    {
        type:"用户管理",
        id:"router.user",
        children:[
            {
                path:"/index/addUser",
                component:addUser,
                id:"router.user.add",
                title:"添加用户"
            },
            {
                path: "/index/showUser",
                component: showUser,
                id:"router.user.show",
                title:"用户展示"
            }
        ]
    },
    {
        type:"考试管理",
        id:"router.exam",
        children:[
            {
                path:"/index/addExam",
                component:questionsType,
                id:"router.exam.add",
                title:"添加考试" 
            },
            {    
                path:"/index/examList",
                component:questionsType,
                id:"router.exam.list",
                title:"试卷列表" 
            }
        ]
    },
    {
       type:"班级管理",
       id:"router.class",
       children:[
           {
                path:"/index/showUser",
                component:showUser,
                id:"router.class.add",
                title:"班级管理"
            },
           {
                path:"/index/showUser",
                component:showUser,
                id:"router.class.classroom",
                title:"班级管理"
            },
            {
                path:"/index/showUser",
                component:showUser,
                id:"router.class.student",
                title:"班级管理"
            }
        ]
    },
    {
        type:"阅卷管理",
        id:"router.examination",
        children:[
            {
                path:"/index/showUser",
                component:showUser,
                id:"router.examination.awat",
                title:"阅卷管理"
            }
        ]
    },

]
export default router;