import VueRouter from 'vue-router'
import { createRouter } from "vue-router"
import App from "../App.vue"

// 1. 定义路由组件.
import home from "../views/home.vue"
import user from "../views/user.vue"

App.use(createRouter)
// 2. 定义路由对组件进行映射
const routes = [
    { path: '/Home', component: home },
    { path: '/User', component: user },
]

// 3. 创建路由实例并传递 `routes` 配置
// 你可以在这里输入更多的配置，但我们在这里
// 暂时保持简单
const router = VueRouter.createRouter({
    // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
    history: VueRouter.createWebHashHistory(),
    routes, // `routes: routes` 的缩写
})

// 5. 创建并挂载根实例到根目录上(main.js)
export default router