
<template>
  <section class="login-wrap">
    <header class="title">邮箱登录</header>
    <ul class="select-list">
        <li class="item-email">
            <span class="tag">邮箱</span>
            <input type="text" placeholder="邮箱账号" v-model="mail" AUTOCOMPLETE="off">
        </li>
        <li class="item-pwd">
            <span class="tag">密码</span>
            <input type="password" placeholder="请填写密码" v-model="pwd" AUTOCOMPLETE="off">
        </li>
    </ul>
    <button class="login-btn" @click="submitLogin">登录</button>
    <p class="tips">
        <a href="javascript:;">忘记密码</a>
        |
        <router-link :to="{name:'Register'}">注册账号</router-link>
    </p>
</section>
</template>

<script>
import { contentConf } from "@/router/data.js";
import { getLoginMessge, reqLogin } from "@/servers/";
import Chat from "@/servers/websocket";
export default {
  data() {
    return {
      mail: "",
      pwd: ""
    };
  },
  methods: {
    submitLogin() {
      let dataObj = {
        mail: this.mail,
        pwd: this.pwd
      };
      this.$router.replace({ name: "Chat" });
      reqLogin(dataObj).then(res => {
        if (getLoginMessge(res.data.ret)) {
          localStorage.setItem("mail", dataObj.mail);
          this.$router.replace({
            name: "Friend",
            params: { id: dataObj.mail }
          });
        }
      });
    }
  }
};
</script>

<style>
@import url("../../css/login.css");
</style>
