import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import router from './router/index'//实际上是'./router/index.ts'但是不允许导入.ts后缀的文件，因删
import App from "./App.vue"
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import { store, key } from './store' // 这里导入文件夹，会自动找到index文件

const app = createApp(App)

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}
app.use(router)
app.use(store, key)
app.use(ElementPlus)
app.mount('#app')