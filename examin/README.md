# 前言

[README in English](README-en.md)
这是考试管理平台



## 技术栈

dva + react +  webpack + ES6  + sass + flex 


## 项目运行


```
git clone https://github.com/10413555911/dva_one/tree/gz 

npm install 或 yarn(推荐)

npm run dev 或 npm start

```
## 关于接口数据

此项目的所有接口数据都来源于配套的后台系统，

如果想体验前后台同时开发，可以下载后台系统。

此时启动本项目的命令为：npm start。


# 说明

>  如果对您有帮助，您可以点右上角 "Star" 支持一下 谢谢！ ~~

>  [项目交流群](https://gitter.im/vue2-elm/Lobby?utm_source=share-link&utm_medium=link&utm_campaign=share-link)

>  推荐一个 react + react 开源项目，对react感兴趣的朋友赶紧去看看。[地址在这里](https://github.com/bailicangdu/react-pxq)

>  另外一个 dva + react 的入门项目，比当前的项目简单很多，非常适合入门练习。[地址在这里](https://github.com/bailicangdu/vue2-happyfri)


# 效果演示

[查看demo请戳这里](http://cangdu.org/elm/)（请用chrome手机模式预览）



# 目标功能
- [x] 登录、注册 -- 完成
- [x] 验证登录 -- 完成
- [x] 添加试卷 -- 完成
- [x] 试卷详情 -- 完成
- [x] 切换状态 -- 完成
- [x] 点击打开抽屉 -- 完成
- [x] 可以选择开始结束时间 -- 完成
- [x] 计算时间 -- 完成
- [x] 权限问题 -- 完成
- [x] 老师的批卷 -- 完成
- [x] 点击搜索出现对应的学生 -- 完成
- [x] 点击搜索 -- 完成




# 总结

1、可以说是第一次写一个项目，有很多地方需要改进。
2、写完项目明确的目录结构
    1.api下放所有的接口,便于总结和日后的修改,
    2.component下放全局的组件并在main.js下使用component用。
    3.router下放所有的路由也是为了方便统一管理
    4.static放置所有的静态资源的地方
    5.store放置的是react，也是仓库方便组件之间的传值。
    6.utils这个目录里面放置的是工具，统一放置统一管理。
    7.views放置的是所有的页面。
    8.plugins放置所有的插件
    9.directives放置的是所有自定义指令


# 最终目标

1、用react构建一个完整的考试平台

。。。敬请期待




