<template>
  <div class="frame">
    <div class="header">123</div>
    <div class="main">
      <div class="status-box">
        <div class="status-title">
          <p class="status-title-font" style="text-align:left;" v-if="status === 1">登录</p>
          <p class="status-title-font" style="text-align:right;" v-if="status === 2">注册</p>
        </div>
        <Login
          v-if="status === 1"
          @func="changeStatus"
        ></Login>
        <Register
          v-if="status === 2"
          @func="changeStatus"
        ></Register>
      </div>
    </div>
    <div class="footer"></div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      status: 1 // 1:登录，2:注册
    }
  },
  components: {
    Login: () => import('../../components/entrance/login.vue'),
    Register: () => import('../../components/entrance/register.vue')
  },
  methods: {
    changeStatus (data) {
      this.status = data
    }
  }
}
</script>

<style lang="less" scoped>
  div.frame {
    width: 100%;
    height: 100vh;
    background: linear-gradient(to right bottom, #262335, #d8dadd );
    display: flex;
    justify-content: center;
    align-items: center;
    div.header {
      width: 100%;
      height: 45px;
      position: fixed;
      top: 0;
      background: #6c6b77;
    }
    div.main {
      width: 300px;
      padding: 15px;
      // background: rgba(256, 256, 256, 0.3);
      background: linear-gradient(to right bottom, #92929b, #6c6b77);
      border-radius: 15px;
      box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
      // border: 1px solid #fff;
      div.status-box {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        align-items: flex-start;
        div.status-title {
          p.status-title-font {
            width: 100%;
            font-size: 18px;
            color: #fff;
          }
        }
      }
    }
  }
</style>
