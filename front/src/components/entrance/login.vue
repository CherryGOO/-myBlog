<template>
  <div class="login-box">
    <div class="login-block input-box">
      <p class="input-title">用户名：</p>
      <el-input v-model="username" placeholder="请输入用户名"></el-input>
    </div>
    <div class="login-block input-box">
      <p class="input-title">密码：</p>
      <el-input v-model="pwd" placeholder="请输入密码" show-password></el-input>
    </div>
    <div class="forget">忘记密码</div>
    <div class="login-block btn" @click="toLog">
      <p>登录</p>
    </div>
    <div class="rule">
      登录即表示已经阅读并同意<span>《用户服务条款》</span>及<span>《隐私保护协议》</span>
    </div>
    <div class="toRegister">
      没有账号？去<span @click="toRegister">注册</span>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      username: '',
      pwd: '',
      UNreg: /^(?=.*[a-z])[a-z0-9]{3,15}$/ig, // 用户名验证 4-16位 全字母or首字母+字母与数字组合
      PWDreg: /^[a-zA-Z0-9]{4,10}$/ // 密码验证 4-10位 字母与数字组合
    }
  },
  methods: {
    toLog () {
      if (!this.UNreg.test(this.username)) {
        this.$message({
          message: '用户名格式错误',
          type: 'error'
        })
        this.username = ''
        this.pwd = ''
      } else if (!this.PWDreg.test(this.pwd)) {
        this.$message({
          message: '密码格式错误',
          type: 'error'
        })
        this.pwd = ''
      } else {
        this.$message({
          message: '登录成功',
          type: 'success'
        })
      }
    },
    toRegister () {
      this.$emit('func', 2)
    }
  }
}
</script>

<style lang="less" scoped>
  div.login-box {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    div.input-box {
      width: 100%;
      margin-top: 10px;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      p {
        color: #fff;
      }
    }
    div.forget {
      width: 100%;
      text-align: right;
      margin-top: 10px;
      color: #66b1ff;
      cursor: pointer;
    }
    div.btn {
      width: 100%;
      margin-top: 10px;
      cursor: pointer;
      background: linear-gradient(to right bottom, #6e6d79, #83828d);
      box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
      border-radius: 30px;
      p {
        // width: 100%;
        height: 45px;
        line-height: 45px;
        font-size: 18px;
        color: #fff;
        font-weight: 500;
      }
      p:hover {
        background: #66b1ff;
      }
    }
    div.rule {
      width: 100%;
      margin-top: 10px;
      text-align: left;
      span {
        color: #66b1ff;
        cursor: pointer;
      }
    }
    div.toRegister {
      width: 100%;
      margin-top: 10px;
      text-align: right;
      span {
        color: #66b1ff;
        cursor: pointer;
      }
    }
  }
</style>
