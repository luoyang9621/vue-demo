<template>
    <div class="demo2">
        <van-button type="primary" @click="$router.push({ name: 'demo3' })">前进</van-button>
        <van-button type="default" @click="$router.back()">后退</van-button>
        <van-field type="textarea" v-model="myData"></van-field>
        <van-button type="primary" @click="confirm">确定</van-button>

        <div class="test-div"
             @click="clickFn"
             @touchstart="t1"
             @touchmove="t2"
             @touchend="t3"
        >测试区域</div>

    </div>
</template>

<script>
import commonDemo1 from './../mixins/commonDemo1';

export default {
    name: "demo2",
    data() {
      return {
          myData: '',
      }
    },
    mixins: [commonDemo1],
    mounted() {
        console.log(this.$data.$commonData1);
        // this.$data.$commonData1 = '改版了';
    },
    methods: {
        confirm() {
            const params ={
                mobile: 113677778888,
                code: 1253,
            };
            this.$get('/index/assetlist', {
                params,
            });
        },
        clickFn() {
            console.log('click', Date.now());
        },
        t1() {
            console.log('touchstart', Date.now());
        },
        t2() {
            console.log('touchmove', Date.now());
        },
        t3() {
            console.log('touchend', Date.now());
        },
    },
}
</script>

<style lang="scss" scoped>
.test-div {
    width: 300px;
    height: 200px;
    background-color: #42b983;
    margin: 50px;
}
</style>