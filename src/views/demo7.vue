<template>
  <div class="list">
    <van-list
            v-model="loading"
            :finished="finished"
            finished-text="没有更多了"
            @load="onLoad"
    >
      <van-cell
              v-for="item in list"
              :key="item"
              :title="item"
      />
    </van-list>
  </div>
</template>

<script>
  const list = [];
  for (let i = 0; i < 40; i += 1) {
    list.push(i);
  }
  export default {
    name: 'demo7',
    data() {
      return {
        loading: false,
        finished: false,
        list: [],
        page: {
          current: 0,
          total: 0,
          size: 10,
        },
      }
    },
    methods: {
      onLoad() {
        setTimeout(() => {
          const res = [];
          for (let i = 0; i < 20; i += 1) {
            res.push(i);
          }
          if (this.page.current === 0) {
            this.list = res;
          } else {
            this.list = this.list.concat(res);
          }
          this.page.current += 1;
          this.loading = false;
          if (this.list.length >= 40) {
            this.finished = true;
          }
        }, 2000);
      },
    },
  }
</script>

<style scoped>

</style>