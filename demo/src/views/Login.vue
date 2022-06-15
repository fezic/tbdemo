<template>
  <div class="outer">
    <div class="login-wrap">
      <a href="#"></a>
      <div class="login-domain">
        <div class="wrap">
          <div class="grid">
            <div class="column">
              <div class="login-pwd selected" @click="switchLogin()">密码登录</div>
              <div class="login-txt" @click="switchLogin()">短信登录</div>
            </div>
          </div>
          <div class="input-domain">
            <i></i>
            <input type="text" placeholder="账号/邮箱/手机号" />
          </div>
          <div class="input-domain">
            <i></i>
            <input type="password" placeholder="请输入登录密码" />
          </div>
          <button type="button" class="login-btn">登录</button>
          <div class="grid-exfun">
            <div>忘记密码</div>
            <div>忘记账号名</div>
            <div>免费注册</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loginWay: "password",
    };
  },
  methods: {
    switchLogin() {
      const pwd = document.querySelector(".login-pwd");
      const txt = document.querySelector(".login-txt");
      switch (this.loginWay) {
        case "password":
          pwd.classList.add("selected");
          txt.classList.remove("selected");
          this.loginWay = "txt";
          break;
        case "txt":
          txt.classList.add("selected");
          pwd.classList.remove("selected");
          this.loginWay = "password";
          break;
      }
    },
  },
};
</script>

<style lang="less" scoped>
.outer {
  background-color: #e93854;
  .login-wrap {
    background: url(../../public/images/loginbg.png) no-repeat;
    height: 475px;
    background-position: 50%;
    position: relative;
    a {
      position: absolute;
      width: 420px;
      height: 400px;
      left: 10%;
      top: 10%;
    }
    .login-domain {
      position: absolute;
      background: #fff;
      width: 350px;
      height: 350px;
      right: 10%;
      top: 10%;
      display: flex;
      justify-content: center;
      align-items: center;
      .wrap {
        width: 300px;
        height: 300px;
        background-color: yellow;
        .grid {
          display: grid;
          grid-template-columns: 1.4fr 1fr 0.6fr;
          grid-template-rows: 30px;
          .column{
            display: grid;
            grid-template-columns: 1fr 1fr;
            grid-template-rows: 25px 5px;
            font-size: 16px;
            font-weight: bold;
          }
        }
        .input-domain {
          margin-top: 10px;
          width: 300px;
          height: 35px;
        }
        .login-btn {
          margin-top: 10px;
          background-color: #f40;
          border-color: #f40;
          font-size: 16px;
          color: #fff;
          width: 100%;
          height: 42px;
        }
        .grid-exfun{
          width: 180px;
          margin-top:20px;
          display: grid;
          grid-template-columns: 1fr 1.2fr 1fr;
          grid-template-rows: 20px;
          float:right;
          text-align: right;
        }
      }
    }
  }
}
.selected {
  border-bottom: 2px solid black;
}
input::-webkit-input-placeholder{
  padding-left: 15px;
}
</style>