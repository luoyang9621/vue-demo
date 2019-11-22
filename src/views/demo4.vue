<template>
    <div class="demo4">
        <van-button type="primary" @click="$router.push({ name: 'demo1' })">前进 回到demo1</van-button>
        <van-button type="primary" @click="$router.push({ name: 'demo6' })">前进 demo6</van-button>
        <van-button type="default" @click="$router.back()">后退</van-button>
    </div>
</template>

<script>
    export default {
        name: "demo4"
    }
</script>

<style scoped>

</style>