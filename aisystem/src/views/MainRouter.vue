<template>
    <div class="common-layout">
        <el-container>
        <el-aside width="200px">
            <common-asider></common-asider>
        </el-aside>
        <el-container>
            <el-header>
                <!--<top-header></top-header>-->
            </el-header>
            <el-container>
            <el-main>
                <!--[这里是主窗口]-->
                <!-- 路由出口 -->
                <!-- 路由匹配到的组件将渲染在这里 -->
                <router-view></router-view>
            </el-main>
            <el-footer>
                <!--<bottom-input></bottom-input>-->
            </el-footer>
            </el-container>
        </el-container>
        </el-container>
    </div>
</template>

<script>
import CommonAsider from '@/components/CommonAsider.vue';
// import BottomInput from '@/components/BottomInput.vue';
// import TopHeader from '@/components/TopHeader.vue';

export default{
    data(){
        return {}
    },
    components: {
        CommonAsider,
        // BottomInput,
        // TopHeader,
    }
}
</script>

<style lang="less" scoped>
.el-header {
    height: 60px;
    background-image: linear-gradient(to right, rgba(238, 131, 173, 1), rgba(190, 36, 36, 0.7) 30%, rgba(237, 202, 141, 1));
}
.el-aside {
    margin-top: 0;
}
.el-footer {
    margin-bottom: 20px;
}
</style>