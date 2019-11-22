import { mapState, mapActions } from 'vuex';

const Mixin = {
    data() {
        return {
            $commonData1: 'aa',
            $commonData2: 'bb',
        }
    },
    computed: {
      ...mapState({
          '$_list': state => state.moduleB.keepAliveList,
      }),
    },
    created() {
        console.log('mixin create完成', this.$data);
        if (this.$_list.length === 0) {
          this.commitList().then(() => {
              this.$toast('action完成了');
          });
        }
    },
    mounted() {
        console.log('mixin mounter完成', this.$data);
    },
    methods: {
      $myF1() {
        console.log('mixin里面的myf1函数');
      },
      ...mapActions({
        commitList: 'moduleB/commitList'
      }),
    },
};
export default Mixin;