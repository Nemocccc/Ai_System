import tab from './tab'
import { InjectionKey } from 'vue'
import { createStore, Store } from 'vuex'


// 配置选项中的接口
interface State {
    isCollapse: boolean
}

// 这个key需要在组件中引入 store时使用, 没有会报错 --> useStore(key) 
export const key: InjectionKey<Store<State>> = Symbol()

// 创建vuex的实例
export const store = createStore<State>({
    state: {
        isCollapse: tab.state.isCollapse
    },
    modules: {
        tab
    }
})