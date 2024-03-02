import { createRouter, createWebHashHistory } from "vue-router"

// 1. 定义路由组件.
import Bank from "../views/Bank.vue"
import Exam from "../views/Exam.vue"
import Main from "../views/MainRouter.vue"
import AiChat from "../views/AIChat.vue"
import OptionOne from "../views/OptionOne.vue"
import OptionTwo from "../views/OptionTwo.vue"

// 2. 定义路由对组件进行映射
const routes = [
    //定义主路由
    {
        path: '/', 
        component: Main,
        children:[
            //子路由, 即嵌套路由
            { path: 'Bank', component: Bank },//题库
            { path: 'Exam', component: Exam },//考试题
            { path: 'Chat', component: AiChat },//Ai对话
            { path: 'OptionOne', component: OptionOne },//设置1
            { path: 'OptionTwo', component: OptionTwo },//设置2
        ]
    },
]
// 3. 创建路由实例并传递 `routes` 配置
// 你可以在这里输入更多的配置，但我们在这里
// 暂时保持简单
const router = createRouter({
    // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
    history: createWebHashHistory(),
    routes, // `routes: routes` 的缩写
})

// 5. 创建并挂载根实例到根目录上(main.js)
export default router