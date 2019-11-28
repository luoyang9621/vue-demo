<template>
  <div class="list">
    <input type="file" style="width: 40px;height: 40px;background-color: red;display: inline-block;" accept="image/*" capture>
    <div>
      区块链
    </div>
    <van-button @click="getList">触发接口</van-button>
  </div>
</template>

<script>
import cryptoJS from 'crypto-js';
import axios from './../axios';
class Block {
  constructor(index, timestamp, data, previousHash = '') {
    this.index = index;
    this.previousHash = previousHash;
    this.timestamp = timestamp;
    this.data = data;
    this.hash = this.calculateHash();
  }
  calculateHash() {
    return cryptoJS.SHA256(this.index + this.previousHash + this.timestamp + JSON.stringify(this.data)).toString();
  }
}
class Blockchain{
  constructor() {
    this.chain = [this.createGenesisBlock()];
  }
  createGenesisBlock() {
    return new Block(0, "01/01/2017", "Genesis block", "0");
  }
  getLatestBlock() {
    return this.chain[this.chain.length - 1];
  }
  addBlock(newBlock) {
    newBlock.previousHash = this.getLatestBlock().hash;
    newBlock.hash = newBlock.calculateHash();
    this.chain.push(newBlock);
  }
  isChainValid() {
    for (let i = 1; i < this.chain.length; i++){
      const currentBlock = this.chain[i];
      const previousBlock = this.chain[i - 1];
      if (currentBlock.hash !== currentBlock.calculateHash()) {
        return false;
      }
      if (currentBlock.previousHash !== previousBlock.hash) {
        return false;
      }
    }
    return true;
  }
}
  export default {
    name: 'demo8',
    data() {
      return {
      
      }
    },
    mounted() {
      // this.onLoad();
      this.init();
    },
    methods: {
      getList() {
        this.$get('/getList1', (res) => {
          console.log('getList1', res);
        });
      },
      onLoad() {
        axios({
          baseURL: 'http://127.168.10.139:3000',
          url: '/role',
          methods: 'get',
        }, () => {});
      },
      init() {
        let savjeeCoin = new Blockchain();
        savjeeCoin.addBlock(new Block(1, "20/07/2017", { amount: 4 }));
        savjeeCoin.addBlock(new Block(2, "20/07/2017", { amount: 8 }));
      },
    },
  }
</script>

<style scoped>

</style>