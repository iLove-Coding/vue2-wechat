<template>
   <section class="register-wrap">
        <router-link class="cancel-tip" :to="{name:'Login'}">取消</router-link>
        <header class="title">邮箱注册</header>
        <ul class="select-list">
            <li class="item-email">
                <span class="tag">邮箱</span>
                <input type="text" placeholder="请输入你的邮箱" v-model="mail">
            </li>
            <li class="item-pwd">
                <span class="tag">密码</span>
                <input type="password" placeholder="请填写密码" v-model="pwd">
            </li>
            <li class="item-pwd">
                <span class="tag">确认</span>
                <input type="password" placeholder="请再次确认密码" v-model="rePwd">
            </li>
            <li class="item-pwd">
                <span class="tag">验证码</span>
                <input type="text" placeholder="请输入验证码" class="twocode" maxlength="6" v-model="codeNum">
                <span class="time" @touchstart="reqCodeHandle" v-show="isClick">点击发送验证码</span>
                <span class="active-time" v-show="!isClick">{{count}}s后可重新发送</span>
            </li>
        </ul>
        <button class="login-btn" type="button" @click="submitRegister">注册</button>
    </section>
</template>
<script>
import { contentConf } from "@/router/data.js";
import { reqTwoCode, reqRegister } from "@/servers/";
export default {
  data() {
    return {
      mail: "",
      pwd: "",
      rePwd: "",
      codeNum: "",
      isClick: true,
      count: 60
    };
  },

  methods: {
    reqCodeHandle() {
      if (this.mail === "") {
        alert("请输入邮箱");
      } else {
        this.isClick = false;
        this.getSeconds();
        reqTwoCode({ mail: this.mail }).then(res => {
          console.log(res.data);
        });
      }
    },
    submitRegister() {
      if (
        this.mail !== "" &&
        this.pwd !== "" &&
        this.rePwd !== "" &&
        this.codeNum !== ""
      ) {
        reqRegister({
          mail: this.mail,
          pwd: this.pwd,
          codeNum: this.codeNum
        }).then(res => {
          console.log(res.data);
          localStorage.removeItem("mail");
          this.$router.replace({ name: "Login" });
        });
      } else {
        console.log("不可为空");
      }
    },
    getSeconds() {
      let timer = setInterval(() => {
        this.count--;
        if (this.count === 0) {
          clearInterval(timer);
          this.isClick = true;
        }
      }, 1000);
    }
  }
};
</script>
<style>
@import url("../../css/register.css");
</style>
