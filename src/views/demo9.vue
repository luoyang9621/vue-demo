<template>
  <div class="list">
    <table>
      <tr v-for="(item, index) in list" :key="index">
        <td v-for="i in item" :key="i" :class="{'act': selectList.includes(i) }" @click="addList(i)">{{ i }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
  import CryptoJS from 'crypto-js';
  export default {
    name: 'demo9',
    data() {
      return {
        list: [],
        m: 5,
        timeS: 0,
        selectList: [],
      }
    },
    mounted() {
      this.addScer();
    },
    methods: {
      init() {
        this.selectList = [];
        this.timeS = 0;
        let list = [];
        for (let i = 1; i < (this.m * this.m + 1); i++) {
          list.push(i);
        }
        let i = list.length;
        while (i) {
          let j = Math.floor(Math.random() * i--);  //5555
          [list[j], list[i]] = [list[i], list[j]];
        }
        console.log(list, list.length);
        let count = 0;
        const allList = [];
        for (let i = 0; i < this.m; i++) { // 5
          const mylist = [];
          for (let j = 0; j < this.m; j++) { // 5
            mylist.push(list[count]);
            count += 1;
            console.log(count);
          }
          allList.push(mylist);
        }
        this.list = allList;
      },
      addList(val) {
        if (this.selectList.length === 0) {
          this.timeS = new Date().getTime();
        }
        if (this.selectList.includes(val)) {
          alert('点击错误，已存在');
          this.init();
          return;
        }
        if (val !== this.selectList.length + 1) {
          alert('顺序错误,已重新生成');
          this.init();
          return;
        }
        this.selectList.push(val);
        if (this.selectList.length === (this.list.length * this.list.length)) {
          const timeE = new Date().getTime();
          alert((timeE - this.timeS)/1000 + 's');
          this.init();
        }
      },
      addScer() {
        const str = '我是哈哈';
        const key = 0x13423534234243243242342FACE;
        console.log(CryptoJS);
        const data = CryptoJS.SHA256(str, key).toString();
        console.log(data);
        const data2 = CryptoJS.SHA256(data, key).toString();
        console.log(data2);
      },
    },
  }
</script>

<style lang="scss" scoped>
table {
  width: 100%;
  border-collapse: collapse;
  tr {
    td {
      border: 1px solid #e0e0e0; /*no*/
      min-height: 50px;
      line-height: 50px;
      text-align: center;
      &.act {
        background-color: #fff;
        color: #333;
      }
    }
  }
}
</style>