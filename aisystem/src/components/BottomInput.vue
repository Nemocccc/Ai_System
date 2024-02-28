<template>
<el-input
    v-model="textarea"
    type="textarea"
    :Row="3"
    placeholder="请输入："
    resize="none"
/>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const textarea = ref('')
</script>
  