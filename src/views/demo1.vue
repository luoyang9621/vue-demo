<template>
    <div class="demo1">
        demo1
        <van-button type="primary" @click="$router.push({ name: 'demo2' })">前进</van-button>
        <van-button type="default" @click="$router.back()">后退</van-button>
        <demo-component @confirm="confirm" v-if="show"></demo-component>
        <my-toast-component v-if="show2" @cancel="show2=false"></my-toast-component>
    </div>
</template>

<script>
    import demoComponent from '@/components/demoComponent.vue';

    export default {
        name: "demo1",
        components: {
            demoComponent
        },
        data() {
            return {
                textArea: '',
                textArea2: '',
                str1: 'aaaabbbbcccddde45a',
                mobile: '',
                show: false,
                show2: true,
            }
        },
        watch: {
            textArea(val) {
                console.log(val);
            },
            mobile(val) {
                const mobileReg = new RegExp('^1[3,4,5,6,7,8,9][0-9]{9}$');
                console.log(val);
                console.log(mobileReg.test(val));
            },
        },
        mounted() {
            // const html
            const reg1 = new RegExp('45');
            const reg2 = new RegExp('^b');
            const reg3 = new RegExp('a$');
            const reg4 = new RegExp('abc5*');
            const reg5 = new RegExp('ab+');
            const reg6 = new RegExp('abc?');
            const reg7 = new RegExp('a|6', '\g');
            const mobileReg = new RegExp('1[3,4,5,6,7,8,9]{2}\d{8}');
            // console.log(this.str1);
            // console.log(reg7);
            /*=======
                reg的^返回是否匹配第一个字符串
            ========*/
            // console.log(this.str1.replace(reg1, '00')); //
            // console.log(reg2.test(this.str1));
            // console.log(reg3.test(this.str1));
            // console.log(reg4.test(this.str1));
            // console.log(reg5.test(this.str1));
            // console.log(reg6.test(this.str1));
            // console.log(reg7.test(this.str1));
            // console.log(this.str1.replace(reg7, 'X'));
            this.$showMsg('gggg');
        },
        methods: {
            confirm(params) {
                console.log(params);
                this.$post('/index/login', params).then((res) => {
                    alert(JSON.stringify(res));
                }).catch((e) => {
                    alert(e);
                });
            },
        },
    }
</script>

<style scoped>
.demo1 {
    color: #333;
}
</style>