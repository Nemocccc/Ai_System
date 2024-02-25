import { createRouter, createWebHashHistory } from "vue-router"

// 1. 定义路由组件.
import Home from "../views/SelfHome.vue"
import User from "../views/SelfUser.vue"
import Main from "../views/MainRouter.vue"

// 2. 定义路由对组件进行映射
const routes = [
    //定义主路由
    {
        path: '/', 
        component: Main,
        children:[
            //子路由, 即嵌套路由
            { path: 'Home', component: Home },
            { path: 'User', component: User },
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