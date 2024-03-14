<template>
    <div class="aichat-layout">
        <main class="main-layout">
            ?<br>
            ?<br>
            ?<br>
            ?<br>
            ?<br>
            ?<br>
            ?<br>
            ?<br>
            ?<br>
            ?<br>
            ?<br>
            ?<br>
            ?<br>
            ?<br>
            ?<br>
            ?<br>
            ?<br>
            ?<br>
            ?<br>
            ?<br>
            ?<br>
            ?<br>
            ?<br>
            ?<br>
            ?<br>
            ?<br>
            ?<br>
            ?<br>
            ?<br>
            ?<br>
            ?<br>
            ?<br>
        </main>
        <footer class="footer-layout">
            <el-input
                v-model="textarea"
                :rows="3"
                type="textarea"
                placeholder="请输入："
                resize="none"
            />
        </footer>
    </div>
</template>  

<script lang="ts" setup>
import { ref } from 'vue'
const textarea = ref('')
</script>

<style lang="less" scoped>
.aichat-layout{
    display: flex;
    flex-direction: column;
    .main-layout {
        flex: 1;
        
        .el-main {
            overflow: auto;
        }
    }
    .footer-layout {
        padding: 20px;
    }
}
</style>