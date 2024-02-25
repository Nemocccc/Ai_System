import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import router from './router/index'//实际上是'./router/index.ts'但是不允许导入.ts后缀的文件，因删
import App from "./App.vue"


const app = createApp(App)

app.use(router)
app.use(ElementPlus)
app.mount('#app')