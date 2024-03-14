<template>
    <div class="common-layout">
        <el-container>
        <el-aside width="auto">
            <common-asider></common-asider>
        </el-aside>
        <el-container>
            <el-header>
                <common-header></common-header>
            </el-header>
            <el-container>
            <el-main>
                <!--[这里是主窗口]-->
                <!-- 路由出口 -->
                <!-- 路由匹配到的组件将渲染在这里 -->
                <router-view></router-view>
            </el-main>
            </el-container>
        </el-container>
        </el-container>
    </div>
</template>

<script>
import CommonAsider from '@/components/CommonAsider.vue';
import CommonHeader from '@/components/CommonHeader.vue';

export default{
    data(){
        return {}
    },
    components: {
        CommonAsider,
        CommonHeader,
    }
}
</script>

<style lang="less" scoped>
.el-header {
    padding: 0;
}
.el-aside {
    padding: 0;
    margin-top: 0;
}
.el-main {
    margin-top: 10px;
    padding: 0;
    height: 100vh - 11px;
}
</style>