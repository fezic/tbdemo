<template>
  <div class="outer">
    <div class="login-wrap">
      <a href="#"></a>
      <div class="login-domain">
        <div class="wrap">
          <div>
            <div class="login-pwd selected" @click="switchLogin()">密码登录</div>
            <div class="login-txt " @click="switchLogin()">短信登录</div>
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
      loginWay:"password"
    };
  },
  methods:{
    switchLogin(){
      const pwd =document.querySelector(".login-pwd")
      const txt =document.querySelector(".login-txt")
      switch(this.loginWay){
        case "password":
          pwd.classList.add("selected")
          txt.classList.remove("selected")
          this.loginWay="txt"
          break;
        case "txt":
          txt.classList.add("selected")
          pwd.classList.remove("selected")
          this.loginWay="password"
          break;
      }
    }
  }
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
      width: 420px;
      height: 400px;
      right: 10%;
      top: 10%;
      display: flex;
      justify-content: center;
      align-items: center;
      .wrap {
        width: 340px;
        height: 300px;
        background-color: yellow;
        & > div {
          display: flex;
          .login-txt{
            margin-right: 5px;
            font-size: 20px;
            padding-bottom: 5px;
          }
          .login-pwd{
            margin-right: 5px;
            font-size: 20px;
            padding-bottom: 5px;
          }
        }
      }
    }
  }
}
.selected{
  border-bottom: 2px solid black;
}
</style>