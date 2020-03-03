<template>
    <div class="demo3">
        <van-button type="primary" @click="$router.push({ name: 'demo4' })">前进</van-button>
        <van-button type="default" @click="$router.back()">后退</van-button>
        <van-button type="default" @click="updateP2(14324)">触发p2改变</van-button>
        <keep-alive :exclude="['da2']">
            <router-view></router-view>
        </keep-alive>
    </div>
</template>

<script>
    import { mapState, mapMutations } from 'vuex';
    import commonDemo1 from './../mixins/commonDemo1';
    export default {
        name: "demo3",
        mixins: [commonDemo1],
        computed: {
            ...mapState({
                p2: state => state.moduleA.p2,
            }),
        },
        watch: {
            p2(value) {
                console.log(111, value);
            }
        },
        created() {
            console.log('demo3组件内完成 create');
        },
        mounted() {
            console.log('demo3组件内完成 mounted', this.$data.$commonData1);
            this.$myF1();
        },
        methods: {
            ...mapMutations({
                updateP2: 'moduleA/updateP2'
            }),
        },
    }
</script>

<style scoped>

</style>