<template>
    <div class="aichat-layout">
        <main class="main-layout">
            <div class="pre-chat" v-if="chatData.length === 0">
                <img src="../assets/Images/aiLogo.png" alt="用户头像" height="400" width="400"/>
                <br>
                <text>在输入框写下你想提出的问题吧!</text>
            </div>
            <div class="scrollbar-container">
                <div v-for="(item, index) in chatData" :key="index">
                    <p id="uservalue" class="message-item">
                        <img src="../assets/Images/userLogo.png" alt="用户头像" height="40" width="40"/>
                        {{ item.userValue }}
                    </p>
                    <hr class="dotted-divider" style="height:1px; border:none; border-top:1px dashed #b3b6b7;"/>
                    <p id="aivalue" class="message-item">
                        <img src="../assets/Images/aiLogo.png" alt="用户头像" height="40" width="40"/>
                        {{ item.aiValue }}
                    </p>
                    <hr v-if="index < chatData.length - 1" class="solid-divider"/>
                </div>
            </div>
        </main>
        <footer class="footer-layout">
            <!-- <div class="button-container">
                <el-button type="primary" :icon="Delete" @click="clearChatRecord"/>
            </div> -->
            <div class="input-container">
                <el-input
                    v-model.trim="textarea"
                    @keyup.enter.exact="dataStoreFunc"
                    @keydown.shift.enter.exact="handleShiftEnter"
                    :rows="3"
                    type="textarea"
                    placeholder="请输入："
                    resize="none"
                />
            </div>
        </footer>
    </div>
</template>  

<script lang="ts" setup>
import { ref } from 'vue'
import { Delete } from '@element-plus/icons-vue'

const textarea = ref('')
const chatData:any = ref([])
function dataStoreFunc() {
    // 使用trim()来移除字符串两边的空白字符
    // console.log(textarea.value !== '')
    if (textarea.value !== '')
    {
        chatData.value.push(
            {
                userValue:textarea.value,
                aiValue:"测试"
            }
        )
        textarea.value=''
    }
    // console.log(chatData)
}
function handleShiftEnter(event:any) {
    // 阻止默认的换行行为
    event.preventDefault()
    // 添加一个新行
    textarea.value = textarea.value + '\n'
}
function clearChatRecord() {
    chatData.value=[]//直接清空记录
}
</script>

<style lang="less" scoped>
.aichat-layout{
    display: flex;
    flex-direction: column;
    height: 100vh - 11px; //设置明确的高度
    .main-layout {
        flex: 1; //将.main-layout设为flex元素
        overflow: auto;     
        .scrollbar-container {
            padding: 20px;
            overflow: auto;  // 出现滚动条
            height: 100%;
            // display: flex;
            // align-items: center;
            // justify-content: center;
            // height: 50px; //用于设置滚动条高度
            // margin: 10px;
            text-align: left;
            // border-radius: 4px;
            // background: var(--el-color-primary-light-9);
            // color: var(--el-color-primary);
        }
    }
    .footer-layout {
        flex: none; //设置footer不需要弹性空间
        padding: 20px;
        // .input-wrapper {
        //     display: flex;
        //     justify-content: space-between;
        // }
        // .button-container {
        //     width: auto;  /* Adjust accordingly based on the desired width of the button */
        // }
        // .input-container {
        //     width: 100%;  /* Takes up the rest of the width in the container */
        // }
    }
}
</style>

<!-- <style lang="less" scoped>
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
</style> -->
