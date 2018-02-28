<template>
  <footer class="i-foot">
    <router-link :to="{name:'Friend'}" @click.native="changeNavHandle('friend')">
        <i class="fa" aria-hidden="true" :class="navTag==='friend'?'fa-address-book':'fa-address-book-o'"></i>
        <span :class="{'active-font':navTag==='friend'}">通讯录</span>
     </router-link>
    <router-link :to="{name:'Chat'}" @click.native="changeNavHandle('chat')">
        <i class="fa" aria-hidden="true" :class="navTag==='chat'?'fa-comment':'fa-comment-o'"></i>
        <span :class="{'active-font':navTag==='chat'}">会话</span>
    </router-link>

     <router-link :to="{name:'Find'}" @click.native="changeNavHandle('find')">
        <i class="fa fa-compass" aria-hidden="true" :class="{'fa-compass-active':navTag==='find'}"></i>
        <span :class="{'active-font':navTag==='find'}">发现</span>
    </router-link>
    <router-link :to="{name:'MyInfo'}" @click.native="changeNavHandle('myInfo')">
        <i class="fa" aria-hidden="true" :class="navTag==='myInfo'?'fa-user':'fa-user-o'"></i> 
        <span :class="{'active-font':navTag==='myInfo'}">我</span>
    </router-link>
</footer>
</template>
<script>
import { contentConf } from "@/router/data.js";
export default {
  computed: {
    navTag() {
      return this.$store.state.nav.nowNavTag;
    }
  },
  methods: {
    changeNavHandle(tag) {
      let obj = { tag };
      switch (tag) {
        case "chat":
          obj = {
            ...obj,
            title: "微信",
            icon: "fa-plus"
          };
          break;
        case "friend":
          obj = {
            ...obj,
            title: "通讯录",
            icon: "fa-user-plus"
          };
          break;
        case "find":
          obj = {
            ...obj,
            title: "发现",
            icon: ""
          };
          break;
        case "myInfo":
          obj = {
            ...obj,
            title: "我",
            icon: ""
          };
          break;
        default:
          break;
      }
      this.$store.commit("nav/changeNavTag", obj);
    }
  }
};
</script>
<style>
@import url("../../css/footer.css");
.fa-comment,
.fa-address-book,
.fa-compass-active,
.fa-user,
.active-font {
  color: #1aad19;
}
</style>
