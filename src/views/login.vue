<template>
  <div class="login">
    <van-cell-group class="form">
      <van-field
              v-model="form.username"
              required
              clearable
              label="用户名"
              right-icon="question-o"
              placeholder="请输入用户名"
              @click-right-icon="$toast('question')"
      />
      <van-field
              v-model="form.password"
              type="password"
              label="密码"
              placeholder="请输入密码"
              required
      />
      <div class="submit-btn">
        <van-button type="info" @click="submit">登录</van-button>
      </div>
    </van-cell-group>
  </div>
</template>

<script>
  export default {
    name: "login",
    data() {
      return {
        form: {
          username: '',
          password: ''
        }
      }
    },
    mounted() {
    },
    methods: {
      submit() {
        const loading = this.$toast.loading({ duration: 0 });
        setTimeout(() => {
          loading.clear();
          const permission = [
            {permission: 'p1'},
            {permission: 's2'},
            {permission: 'm1'},
            {permission: 'n2'},
          ];
          localStorage.token = 'qae234erf234123434534ref3';
          localStorage.setItem('permission', JSON.stringify(permission));
          this.$router.push({ name: 's1' });
        }, 2000);
      },
    },
  }
</script>

<style lang="scss" scoped>
.form {
  height: 100%;
  /*background-color: #fff;*/
  .submit-btn {
    text-align: center;
    width: 70%;
    margin: 30px auto;
    button {
      width: 100%;
    }
  }
}
</style>