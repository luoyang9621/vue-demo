<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    {{ mgData | changeNumber }}
  </div>
</template>

<script>
  import { mapActions, mapState, mapMutations } from 'vuex';
  import mutation from "../store/moduleA/mutations";

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    return {
      mgData: '这个是测试的字符串',
    }
  },
  computed: {
    ...mapState({
      list: state => state.moduleA.list,
    }),
  },
  mounted() {
    this.actionUpdateList();
    // console.log(this.$store);
    // console.log(this.list);
    // console.log(this.upDateList(['1', 2, 5]));
  },
  methods: {
    ...mapActions(['actionUpdateList']),
    // ...mapMutations(['upDateList']),
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
