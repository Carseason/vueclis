<template>
    <i class="icon iconfont" :class="className" :id="id" :name="name" :title="title"></i>
</template>
<script>
export default {
    props: ["className", "id", "name", "title"],
}
</script>
<style scoped>
</style>
