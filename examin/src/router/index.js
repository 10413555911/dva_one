import addQuestions from "../pages/index/questions/addQuestions/addQuestions"
import questionsType from "../pages/index/questions/questionsType/questionsType"
import watchQuestions from "../pages/index/questions/watchQuestions/watchQuestions"
import addUser from "../pages/index/user/addUser/adduser"
import showUser from "../pages/index/user/showUser/showuser"
const router=[
    {
        type:"试题管理",
        children:[
            {
                path:"/index/addQuestions",
                component:addQuestions,
                title:"添加试题"
            },
            {
                path:"/index/questionsType",
                component: questionsType,
                title:"试题分类"
            },
            {
                path:"/index/watchQuestions",
                component:watchQuestions,
                title:"查看试题"
            }
        ]
    },
    {
        type:"用户管理",
        children:[
            {
                path:"/index/addUser",
                component:addUser,
                title:"添加用户"
            },
            {
                path:"/index/showUser",
                component: showUser,
                title:"用户展示"
            }
        ]
    },
    {
        type:"考试管理",
        children:[
            {
                path:"/index/addExam",
                component:questionsType,
                title:"添加考试" 
            },
            {    
                path:"/index/examList",
                component:questionsType,
                title:"试卷列表" 
            }
        ]
    },
    {
       type:"班级管理",
       children:[
           {
                path:"/index/showUser",
                component:showUser,
                title:"班级管理"
            },
           {
                path:"/index/showUser",
                component:showUser,
                title:"班级管理"
            },
            {
                path:"/index/showUser",
                component:showUser,
                title:"班级管理"
            }
       ]
    },
    {
        type:"阅卷管理",
        children:[
            {
                path:"/index/showUser",
                component:showUser,
                title:"阅卷管理"
            }
        ]
    }
   


]
export default router;