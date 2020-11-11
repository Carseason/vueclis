<template>
    <el-tooltip :class="className" effect="dark" :content="title" placement="top">
        <slot></slot>
    </el-tooltip>
</template>
<script>
export default {
    props: [
        "title",
        "className",
    ]
}
</script>
<style lang="less" scoped>
</style>
