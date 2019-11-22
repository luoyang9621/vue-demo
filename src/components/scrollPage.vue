<template>
  <div class="scroll-wrap" ref="wrap">
    <slot></slot>
    <slot name="noData">
      <div class="no-data" v-if="list.length === 0"><p>暂无数据</p></div>
    </slot>
  </div>
</template>
/*
*具名插槽 slot name=''
**/

<script>
  import BScroll from 'better-scroll';

  export default {
      name: "scrollPage",
      data() {
        return {
          scroll: null,
        }
      },
      props: {
          page: {
              type: Object,
              default: () => {
                  return {
                      current: 0,
                      total: 0,
                      size: 10,
                  }
              },
          },
          list: {
              type: Array,
              default: () => [],
          },
          getList: {
              type: Function,
              default: () => {},
          }
      },
      watch: {
        list() {
            this.$nextTick(() => {
                this.scroll.refresh();
            });
        }
      },
      mounted() {
          console.log(this.list.length);
          this.init();
      },
      methods: {
        init() {
          const wrap = this.$refs.wrap;
          if (!wrap) {
              return;
          }
          this.scroll = new BScroll(wrap, {
              click: true,
              probeType: 2,
              // 下拉刷新
              pullDownRefresh: {
                  threshold: 50,
                  stop: 20
              },
              // 上啦加载
              pullUpLoad: {
                  threshold: 50
              },
          });
          this.scroll.on('pullingDown', this.pullingDown); // 下拉刷新
          this.scroll.on('pullingUp', this.pullingUp); // 上拉加载
        },
        async pullingDown() {
            this.page.current = 1;
            await this.getList();
            this.scroll.finishPullDown();
            console.log('pullingDown', this.page);
            // window.addEventListener('touched')
        },
        async pullingUp() {
            const current = Number(this.page.current) + 1;
            await this.getList(current);
            this.scroll.finishPullUp();
            console.log('pullingUp', this.page);
        },
      },
  }
</script>

<style lang="scss" scoped>
.scroll-wrap {
  height: 100%;
  /*display: flex;*/
  background-color: #fff;
  /*.scroll-wrap-content {*/
  /*  flex: 1;*/
  /*  overflow: auto;*/
  /*  background-color: #0ff;*/
  /*  color: #333;*/
    /*display: flex;*/
    .no-data {
      width: 100%;
      min-height: 100%;
      overflow: hidden;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  /*}*/
}
</style>