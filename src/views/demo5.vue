<template>
  <div class="demo5">
    <scroll-page :list="list" :getList="getList">
      <ul>
        <li v-for="(i, index) in list" :key="index">{{ index }}</li>
      </ul>
    </scroll-page>
  </div>
</template>

<!--
slot 插槽，
使用的地方
<template slot="aa"></template>
模板
<slot name="aa"></slot>

不具名的话则默认slot所在的所有元素都是
-->

<!--
 <template v-slot:noData>
        <p>水水水水水</p>
      </template>
-->

<script>
import scrollPage from '@/components/scrollPage.vue';

export default {
    name: "demo5",
    components: { scrollPage },
    data() {
      return {
          list: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
          page: {
            current: 1,
            total: 0,
            size: 10,
          },
      };
    },
    methods: {
        getList(current, size) {
          return new Promise((resolve) => {
             setTimeout(() => {
                if (current === 1) {
                    this.page.current = 1;
                    this.list = new Array(10);
                } else {
                    this.list = this.list.concat(new Array(10));
                    this.page.current += 1;
                }
                 this.page.total = 23;
                 resolve();
             });
          });
        },
    }
}
</script>

<style lang="scss" scoped>
  .demo5 {
    height: 100%;
  }
ul {
  /*flex: 1;*/
  /*overflow: auto;*/
  flex: none;
  width: 100%;
  height: auto;
  li {
    height: 100px;
    /*margin-bottom: 10px;*/
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: red;
    border-bottom: 1px solid #333;
    input {
      width: 200px;
      height: 44px;
      line-height: 44px;
      border: 1px solid #e0e0e0;
      color: #333;
    }
    span {
      display: inline-block;
      width: 200px;
      height: 44px;
      line-height: 44px;
      background-color: #f00;
      color: #333;
    }
  }
}
</style>