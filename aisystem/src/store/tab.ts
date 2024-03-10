import { store } from './index'

export default {
    state: {
        isCollapse: false, // 控制侧栏展开折叠
    },
    mutations: {
        //修改菜单展开收起
        collapseMenu (state: any) {
            state.isCollapse = !state.isCollapse
            // 修改 store 中的 isCollapse 属性
            store.state.isCollapse = state.isCollapse;
            // console.log(store.state.isCollapse)
        }
    }
}