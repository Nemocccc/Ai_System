<template>
<el-page-header @click="goBack">
    <template #content title="返回">
        <span class="text-large font-600 mr-3"> Title </span>
    </template>
</el-page-header>
</template>

<script lang="ts" setup>
const goBack = () => {
 console.log('go back')
}
</script>
