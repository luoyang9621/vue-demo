|<template>
    <div class="da">
        da1111111111
        <input type="text" lable="请输入姓名">
        <van-button type="default" @click="$router.push({ name: 'da2'})">da2</van-button>
    </div>
</template>

<script>
export default {
    name: 'da1',
}
</script>

<style lang="scss">
.da {
    color: red;
}
</style>