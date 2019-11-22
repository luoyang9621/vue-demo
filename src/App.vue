<template>
  <div id="app">
<!--    <span class="fix">{{ $route.meta.isAlive }}</span>-->
    <!--
      transition结合keep-alive使用，如果在meta中增加字段来判断是否需要添加缓存的话，需要增加key来消除不同的东西
      要不然会导致不需要缓存的组件也会缓存的。
    -->
<!--    <transition :name="animateDirection">-->
<!--      <keep-alive>-->
<!--        <router-view class="wrap" v-if="$route.meta.isAlive" />-->
<!--        <router-view class="wrap" v-else :key="`t${new Date().getTime()}`" />-->
<!--      </keep-alive>-->
<!--    </transition>-->
    <!--
      如果是使用include和exclude来完成keep-alive
      只需要控制数组就行，可以改变数据来完成在不同情境下是否需要缓存组件
     -->
    <transition :name="animateDirection">
      <keep-alive :include="keepAliveList">
        <router-view class="wrap" />
      </keep-alive>
    </transition>
  </div>
</template>

<script>
import demoComponent from './components/demoComponent.vue';
import HelloWorld from './components/HelloWorld.vue';
import { mapState, mapActions } from 'vuex';

export default {
  name: 'app',
  components: {
    HelloWorld, demoComponent
  },
  computed: {
    ...mapState({
        animateDirection: state => state.moduleA.animateDirection,
        keepAliveList: state => state.moduleB.keepAliveList,
    }),
  },
  data() {
    return {
      animate: 'forward',
    }
  },
  created() {
    // console.log('9999999999999', this.$store.state.moduleA);
    this.up1();
    // this.up2();
  },
  mounted() {
    // this.$f2();
  },
  methods: {
    ...mapActions(['commitList']),
    ...mapActions({
      up1: 'moduleA/actionUpdatePermission',
    }),
    ...mapActions('moduleB', {
      up2: 'actionUpdatePermission',
    }),
  },
}
</script>

<style>
#app {
  width: 100%;
  min-height: 100%;
}
.fix {
  position: absolute;
  top: 0;
  right: 0;
  z-index: 100;
}
  .wrap {
    height: 100%;
    color: #fff;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 10;
    transition: all .5s ease;
    backface-visibility: visible;
  }
</style>
