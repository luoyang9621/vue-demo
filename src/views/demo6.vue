<template>
  <div class="demo6">
    内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容
    内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容
    <van-button @click="toPage">下一页</van-button>
    <div v-permission="'addList'">权限测试权限测试权限测试权限测试权限测试元素</div>
    <div v-permission="">22222222222222</div>
    <div ref="self">1111wqaw</div>
    <ul>
      <li v-for="i in list" :key="i">{{ i }}</li>
    </ul>
  </div>
</template>

<script>
  import { mapActions } from 'vuex';

    export default {
        name: "demo6",
        props: {
          live: {
              type: String,
              default: '',
          },
        },
        computed: {
            myLive() {
                return this.live + ' 哈哈';
            },
        },
        data() {
          return {
              list: [1],
          }
        },
        methods: {
          toPage() {
            this.$router.push({ name: 'demo7' });
          },
        },
        beforeCreate() {
            console.log('beforeCreate', this.list, this, this.myLive, this.$refs.self);
        },
        created() {
          console.log('created', this.list, this.live, this.myLive, this.$refs.self);
        },
        beforeMount() {
            console.log('beforeMount', this.list, this.live, this.myLive, this.$refs.self);
        },
        mounted() {
            console.log('mounted', this.list, this.live, this.myLive, this.$refs.self);
            setTimeout(() => {
                this.list.push(2,3);
            }, 5000);
        },
        beforeUpdate() {
            console.log('beforeUpdate', this.list, this.live, this.myLive, this.$refs.self);
        },
        updated() {
            console.log('updated', this.list, this.live, this.myLive, this.$refs.self);
        },
        beforeDestroy() {
            console.log('beforeDestroy', this.list, this.live, this.myLive, this.$refs.self);
        },
        destroyed() {
            console.log('destroyed', this.list, this.live, this.myLive, this.$refs.self);
        }
    }
</script>

<style lang="scss" scoped>
.demo6 {
  height: 200%;
  background-color: aquamarine;
  color: #000;
}
</style>