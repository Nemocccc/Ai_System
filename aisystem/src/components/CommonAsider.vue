<template>
  <!--下段代码用于让用户决定是否展开导航-->
  <!--<el-radio-group 
    v-model="isCollapse" 
  >
    <el-radio-button :label="false">展开</el-radio-button>
    <el-radio-button :label="true">折叠</el-radio-button>
  </el-radio-group>-->
  <el-menu
    default-active="2"
    class="el-menu-vertical-demo"
    :collapse="isCollapse"
    @open="handleOpen"
    @close="handleClose"
    text-color="black"
    background-color="#f98b8b"
    active-text-color="#F4D03F"
  >
    <h3>{{ isCollapse ? '问答' : 'ai问答系统' }}</h3>
    <el-menu-item @click="ClickMenu(item)" v-for="item in nochildren" :key="item.name" :index="item.name">
      <el-icon>
        <keep-alive>
          <component :is="item.icon"></component>
        </keep-alive>
      </el-icon>
      <template #title>{{ item.label }}</template>
    </el-menu-item>

    <!--有二级菜单的导航-->
    <el-sub-menu v-for="item in haschildren" :key="item.name" :index="item.name" disabled="true">
      <template #title>
        <el-icon>
          <keep-alive>
            <component :is="item.icon"></component>
          </keep-alive>
        </el-icon>
        <span>{{ item.label }}</span>
      </template>
      <el-menu-item-group v-for="subItem in item.children" :key="subItem.name">
        <el-menu-item @click="ClickMenu(subItem)" :index="subItem.name">{{ subItem.label }}</el-menu-item>
      </el-menu-item-group>
    </el-sub-menu>
  </el-menu>
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue'
/*eslint no-unused-vars: "error"*/
import {
  //图标注册在此
  Document,
  Menu,
  ChatLineRound,
  Setting,
} from '@element-plus/icons-vue'
import { Vue } from 'vue-class-component';
import router from '../router/index'
import { store } from '../store'
// import { Vue } from 'vue-class-component';

const menuData = [
  {
    path: '/bank',
    name: 'question-bank',
    label: '题库',
    icon: 'Menu',
    url: 'Bank/Bank',
  },
  {
    path: '/exam',
    name: 'exam-question',
    label: '考试题',
    icon: 'Document',
    url: 'Exam/Exam',
  },
  {
    path: '/chat',
    name: 'AiChat',
    label: 'AI对话',
    icon: 'ChatLineRound',
    url: 'Chat/Chat',
  },
  {
    name: 'settings',
    label: '设置',
    icon: 'Setting',
    children: [
      {
        path: '/option1',
        name: 'option1',
        label: '设置1',
        // icon: 'Setting',
        url: 'Setting/OptionOne'
      },
      {
        path: '/option2',
        name: 'option2',
        label: '设置2',
        // icon: 'Setting',
        url: 'Setting/OptionTwo'
      }
    ]
  }
]
const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
// 点击菜单
function ClickMenu(item: any) {
  // console.log(item) // 打印当前的item
  // console.log(router.currentRoute.value.path)//打印当前路由
  if (router.currentRoute.value.path !== item.path && !(router.currentRoute.value.path === '/home' && (item.path === '/'))){
    router.push(item.path)
  }
}

// 在需要有子导航菜单（子路由）时启用下段代码
// 筛选出没有子路由的元素
const nochildren = computed(() => {
  return menuData.filter(item => !item.children);
});
// 筛选出有子路由的元素
const haschildren = computed(() => {
  return menuData.filter(item => item.children);
});
const isCollapse = computed(() => {
  // console.log(store.state.isCollapse)
  return store.state.isCollapse
})

</script>

<style lang="less" scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
.el-menu {
  border-right: 0;
  height: 100vh;
  h3 {
    color: black;
    text-align: center;
    line-height: 48px;
    font-weight: 500;
    font-size: 14px;
  }
  background-image: linear-gradient(rgba(238, 131, 173, 1), #f98b8b 30%, rgba(237, 202, 141, 1));
}
.el-radio-group {
  margin-bottom: 0;
  margin-left: 0;
}
</style>