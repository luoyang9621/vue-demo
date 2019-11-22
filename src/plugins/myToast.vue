<template>
  <div class="my-toast">
    <div class="header">
      {{ title }}
    </div>
    <div class="content" v-if="!payIng && payStatus === 0">
      <div class="password">
        <ul>
          <li v-for="i in 6" :key="i" :class="{'act': password.length >= i }"></li>
        </ul>
      </div>
      <div class="numbers">
        <ul v-for="item in list">
          <li v-for="i in item" @click="inputPw(i)">{{ i }}</li>
        </ul>
        <ul>
          <li @click="cancel">取消</li><li>0</li><li @click="backPw">后退</li>
        </ul>
      </div>
    </div>
    <div v-if="payIng" class="pay-img">
      <p>支付中...</p>
    </div>
    <div class="pay-success" v-if="!payIng && payStatus === 1">
      <p>支付成功</p>
    </div>
    <div class="my-dialog" v-if="showFail">
      <div class="mask"></div>
      <div class="dialog-container">
        <div class="msg">支付失败</div>
        <div class="btn-list">
          <span @click="resetPw">重新输入</span><span>忘记密码</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'myToast',
    props: {
        title: {
            type: String,
            default: '请输入支付密码',
        },
    },
    data() {
        return {
            list: [
                [1,2,3], [4,5,6], [7,8,9]
            ],
            password: '',
            payIng: false,
            payStatus: 0, // 支付完成状态，1成功，2失败
            showFail: false, // 支付失败，弹窗
        }
    },
    methods: {
        cancel() {
            this.$emit('cancel');
        },
        inputPw(val) {
            if (this.password.length < 6) {
                this.password += val;
            }
            if (this.password.length === 6) {
                console.log('输入完成，可以请求接口了');
                this.payIng = true;
                this.sendAxios().then((res) => {
                    this.payStatus = res ? 1 : 2;
                    console.log('pay', res);
                    this.payIng = false;
                    if (!res) {
                        this.showFail = true;
                    }
                });
            }
        },
        backPw() {
            if (this.password) {
                this.password = this.password.substr(0, this.password.length - 1);
            }
        },
        resetPw() {
          this.password = '';
          this.showFail = false;
          this.payStatus = 0;
        },
        sendAxios() {
            return new Promise((resolve) => {
                setTimeout(() => {
                    resolve((Math.random() * 100) > 50);
                }, 2000);
            })
        },
    }
}
</script>

<style lang="scss" scoped>
  *{
      margin: 0;
      padding: 0;
      border: none;
  }
.my-toast {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: auto;
  font-size: 16px;
  background-color: #fff;
  .header {
      height: 44px;
      line-height: 44px;
      text-align: center;
      color: #666;
      border-bottom: 1px solid #e0e0e0;
  }
  .content {
      .password {
        overflow: hidden;
        ul {
          width: 80%;
          margin: 20px auto;
          display: flex;
          border-top: 1px solid #e0e0e0;
          border-bottom: 1px solid #e0e0e0;
          li {
            flex: 1;
            height: 30px;
            position: relative;
            border-right: 1px solid #e0e0e0;
            &:first-child {
              border-left: 1px solid #e0e0e0;
            }
            &.act {
              &::before {
                content: '';
                display: flex;
                width: 6px;
                height: 6px;
                background-color: #000;
                border-radius: 50%;
                position: absolute;
                top: 50%;
                left: 50%;
                margin-top: -3px;
                margin-left: -3px;
              }
            }
          }
        }
      }
      .numbers {
       ul {
         display: flex;
         &:last-of-type {
           li:not(:nth-child(2)) {
             background-color: rgba(0,0,0,.1);
             &:active {
               background-color: rgba(0,0,0,.3);
             }
           }
         }
         &:last-child {
           li {
             border-bottom: none;
           }
         }
         li {
           flex: 1;
           border-bottom: 1px solid #e0e0e0;
           &:not(:last-child) {
             border-right: 1px solid #e0e0e0;
           }
           height: 44px;
           line-height: 44px;
           text-align: center;
           color: #666;
           &:active {
             background-color: #ccc;
             color: #fff;
           }
         }
       }
     }
  }
  .pay-img {
    width: 100%;
    height: 250px;
    padding-top: 50px;
    box-sizing: border-box;
    text-align: center;
    position: relative;
    &::after {
      content: url("../assets/loading.png");
      display: block;
      width: 32px;
      height: 32px;
      position: absolute;
      left: 50%;
      margin-left: -16px;
      top: 50%;
      margin-top: -16px;
      animation: myAnimation 3s linear infinite;
      /*transition: all ease inf;*/
    }
  }
  .pay-success {
    width: 100%;
    height: 250px;
    padding-top: 50px;
    box-sizing: border-box;
    text-align: center;
    position: relative;
    background: url("../assets/pay-success.png") no-repeat center 80px;
  }
}
.my-dialog {
  text-align: center;
  z-index: 12;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  .mask {
    background-color: rgba(0, 0, 0, .2);
    width: 100%;
    height: 100%;
  }
  .dialog-container {
    width: 300px;
    height: 145px;
    position: absolute;
    top: 50%;
    left: 50%;
    margin-top: -70px;
    margin-left: -150px;
    background-color: #ffffff;
    .msg {
      height: 100px;
      line-height: 100px;
    }
    .btn-list {
      display: flex;
      height: 44px;
      border-top: 1px solid #e0e0e0;
      span {
        display: inline-block;
        flex: 1;
        line-height: 44px;
        &:not(:last-child) {
          border-right: 1px solid #e0e0e0;
        }
        &:active {
          background-color: rgba(0,0,0,.1);
          color: #fff;
        }
      }
    }
  }
}
  @keyframes myAnimation {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
</style>