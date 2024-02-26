<template>
    <div class="common-layout">
        <el-container>
        <el-aside width="200px">
            <common-asider></common-asider>
        </el-aside>
        <el-container>
            <el-header>顶层</el-header>
            <el-container>
            <el-main>
                <!--[这里是主窗口]-->
                <!-- 路由出口 -->
                <!-- 路由匹配到的组件将渲染在这里 -->
                <router-view></router-view>
            </el-main>
            <el-footer>底部</el-footer>
            </el-container>
        </el-container>
        </el-container>
    </div>
</template>

<script>
import CommonAsider from '@/components/CommonAsider.vue';

export default{
    data(){
        return {}
    },
    components: {
        CommonAsider,
    }
}
</script>

<style lang="less" scoped>
.el-header {
    height: 60px;
    margin-left: 200px;
}
.el-aside {
    margin-top: 0;
}
</style>