<template>
  <el-radio-group v-model="isCollapse" style="margin-bottom: 20px">
    <el-radio-button :label="false">展开</el-radio-button>
    <el-radio-button :label="true">折叠</el-radio-button>
  </el-radio-group>
  <el-menu
    default-active="2"
    class="el-menu-vertical-demo"
    :collapse="isCollapse"
    @open="handleOpen"
    @close="handleClose"
  >
    <!--有二级菜单的导航-->
    <!--<el-sub-menu index="1">
      <template #title>
        <el-icon><location /></el-icon>
        <span>Navigator One</span>
      </template>
      <el-menu-item-group>
        <template #title><span>Group One</span></template>
        <el-menu-item index="1-1">item one</el-menu-item>
        <el-menu-item index="1-2">item two</el-menu-item>
      </el-menu-item-group>
      <el-menu-item-group title="Group Two">
        <el-menu-item index="1-3">item three</el-menu-item>
      </el-menu-item-group>
      <el-sub-menu index="1-4">
        <template #title><span>item four</span></template>
        <el-menu-item index="1-4-1">item one</el-menu-item>
      </el-sub-menu>
    </el-sub-menu>-->
    
    <el-menu-item v-for="item in menuData" :key="item.name" :index="item.name">
      <el-icon>
        <keep-alive>
          <component :is="item.icon"></component>
        </keep-alive>
      </el-icon>
      <template #title>{{ item.label }}</template>
    </el-menu-item>
    <!--<el-menu-item index="2" disabled>
      <el-icon><Document /></el-icon>
      <template #title>考试题</template>
    </el-menu-item>
    <el-menu-item index="3">
      <el-icon><ChatLineRound /></el-icon>
      <template #title>ai对话</template>
    </el-menu-item>
    <el-menu-item index="4">
      <el-icon><Setting /></el-icon>
      <template #title>设置</template>
    </el-menu-item>-->
  </el-menu>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
/*eslint no-unused-vars: "error"*/
import {
  //图标注册在此
  Document,
  Menu,
  ChatLineRound,
  Setting,
} from '@element-plus/icons-vue'
// import { Vue } from 'vue-class-component';

const isCollapse = ref(true)
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
    path: '/settings',
    name: 'settings',
    label: '设置',
    icon: 'Setting',
    url: 'Setting/Setting',
  }
]
const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}

// 在需要有子导航菜单（子路由）时启用下段代码
// 筛选出没有子路由的元素
// const nochildren = computed(() => {
//   return menuData.filter(item => !item.children);
// });
// 筛选出有子路由的元素
// const haschildren = computed(() => {
//   return menuData.filter(item => item.children);
// });
</script>

<style>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style>