<template>
  <!-- 路由出口 -->
  <!-- 路由匹配到的组件将渲染在这里 -->
  <router-view></router-view>
</template>

<script lang="ts">
export default {
  name: 'app',
}
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0;
  // display: flex;
  // flex-direction: column;
  // justify-content: space-between;
}
html, body, h3 {
  margin: 0;
  padding: 0;
}
</style>
