<template>
    <div class="demo-component">
        自定义指令的元素111111222元素1123123
        <van-field type="textarea" v-model="textArea" />
        <textarea v-model="textArea2"></textarea>
        <van-button type="default" @click="confirm">提交</van-button>
    </div>
</template>

<script>
    export default {
        name: "demoComponent",
        data() {
            return {
                textArea: '',
                textArea2: '',
            }
        },
        methods: {
            confirm() {
                const params = {
                    str1: this.textArea,
                    str2: this.textArea,
                };
                console.log(params);
                this.$emit('confirm', params);
            },
        },
    }
</script>

<style lang="scss" scoped>
.demo-component {
    position: fixed;
    top: 100px;
    left: 0;
    box-shadow: 0 0 20px rgba(0,0,0,.2);
    background-color: #fff;
}
</style>