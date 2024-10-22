<template>
  <div class="container">
    <div class="login_bj"> </div>
    <div class="login_form">
      <el-card class="card_color">
        <h3 class="cent">博客后台系统</h3>
        <el-form label-width="50px" label-position="left" :model="userForm">
          <el-form-item porp="username" label="账号">
            <el-input v-model="userForm.username" placeholder="请输入用户名"></el-input>
          </el-form-item>
          <el-form-item porp="password" label="密码">
            <el-input v-model="userForm.password" placeholder="请输入密码" show-password></el-input>
          </el-form-item>
          <el-form-item class="cent">
            <el-button @click="login">登入</el-button>
          </el-form-item>

        </el-form>
      </el-card>
    </div>
  </div>
</template>

<script>
  import bgImg from '@/assets/img/bj.jpg';
  export default {
    data() {
      return {
        bgImg,
        userForm: {
          username: '',
          password: '',
        },
      };
  },
  methods: {
    /**
     * 登入
     * @param
     * @return
     */
    login() {
      this.$router.push('/home')
    }
    }
  };
</script>

<style scoped>
  .container {
    position: relative;
    width: 100%;
    height: 100%;
    .login_bj {
      height: 100vh;
      background-image: url(~@/assets/img/bj.jpg);
      background-size: 100% 100%;
    }
    .login_form {
      position: absolute;
      width: 500px;
      top: 50%;
      left: 50%;
      right: 0;
      bottom: 0;
      transform: translate(-50%,-50%);
      .card_color {
        background: transparent;
        border: none;
      }
    }
  }

  .cent {
    display: flex;
    justify-content: center;
  }
</style>
