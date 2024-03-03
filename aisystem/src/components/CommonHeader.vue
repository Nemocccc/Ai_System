<template>
    <div class="header-container">
        <div class="left-content">
            <el-button :icon="Menu" size="large" color="#DAF7A6"/>
            <!-- 面包屑 -->
            <span class="text">首页</span>
        </div>
        <div class="right-content">
            <el-dropdown>
                <span class="el-dropdown-link">
                    <img class="app-image" src="../assets/Images/学习通.png" alt="" />
                <el-icon class="el-icon--right">
                    <arrow-down />
                </el-icon>
                </span>
                <template #dropdown>
                    <el-dropdown-menu>
                        <el-dropdown-item>
                            跳转到超星网
                        </el-dropdown-item>
                        <!-- <el-dropdown-item>Action 2</el-dropdown-item>
                        <el-dropdown-item>Action 3</el-dropdown-item>
                        <el-dropdown-item disabled>Action 4</el-dropdown-item>
                        <el-dropdown-item divided>Action 5</el-dropdown-item> -->
                    </el-dropdown-menu>
                </template>
            </el-dropdown>
        </div>
    </div>
</template>

<script lang="ts" setup>
import {
    Menu
} from '@element-plus/icons-vue'

import { ArrowDown } from '@element-plus/icons-vue'

// function routerSwitch() {
//     window.location.href =
//         "https://v3.chaoxing.com/toJcLogin";
//     //刷新当前页面
//     window.location.reload();
// }
</script>

<style lang="less", scoped>
.header-container {
    padding: 20px;
    background-image: linear-gradient(to right, rgba(238, 131, 173, 1), rgba(199, 0, 57, 0.6) 30%, #f98b8b 60%, rgba(237, 202, 141, 1));
    height: 30px;
    margin-right: 0;
    margin-left: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .text {
        color: black;
        font-size: 14px;
        margin-left: 10px;
    }
    .right-content {
        .app-image {
            width: 40px;
            height: 40px;
            border-radius: 50%;
        }
    }
}
</style>
