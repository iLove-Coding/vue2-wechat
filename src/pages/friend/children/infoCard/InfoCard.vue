<template>
<div class="in">
     <header class="chat-head">
    <div class="return-icon">
        <i class="fa fa-chevron-left" aria-hidden="true"></i>
        <span @click ="toFriendHandle">通讯录</span>
    </div>
    <h1 class="title">详细资料</h1>
     <router-link tag="i" class="fa fa-ellipsis-h add-icon" aria-hidden="true" :to="{name:'EditFriend'}"></router-link>
</header>
      <section class="info-card">
    <div class="my-info">
        <div class="my-pic">
            <img src="" alt="">
        </div>
        <div class="my-tag">
            <p class="my-name">{{chatUser.name}}</p>
            <p class="my-id">微信号：{{chatUser.fMail}}</p>
        </div>
    </div>
    <div class="nav-title">
        <span>设置备注和标签</span>
        <i class="fa fa-angle-right" aria-hidden="true"></i>
    </div>
    <div class="nav-group">
        <p>
            <span class="tag">地区</span>
            <span>辽宁 大连</span>
            <i class="fa fa-angle-right" aria-hidden="true"></i>
        </p>
        <p>

            <span class="tag">个人相册</span>
            <span class="pic-set">

            </span>
            <i class="fa fa-angle-right" aria-hidden="true"></i>
        </p>
        <p>

            <span class="tag">个性签名</span>
            <span>代表月亮消灭你</span>
        </p>
    </div>
    <div class="btn-set">
    <button class="common-btn" type="button" @click="toChatOnHandle">发消息</button>
    </div>
</section>
             <transition name="router-slid" mode="out-in">
            <router-view></router-view>
        </transition>
</div>
</template>
<script>
import Head from "@/components/header/Head";
import { mapState, mapMutations } from "vuex";
export default {
  components: {
    headTitle: Head,
  },
  computed:{
      ...mapState(['chatUser'])
  },
  methods: {
    toFriendHandle() {
      this.$router.push({ name: "Friend" });
    },
    toChatOnHandle() {
      
      this.$router.push({ name: "SendMsg" });
    }
  }
};
</script>
<style>
@import url("../../../../css/infoCard.css");
.in {
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  background-color: #efeff4;
  z-index: 100;
}
.router-slid-enter-active,
.router-slid-leave-active {
  transition: all 0.2s;
}
.router-slid-enter,
.router-slid-leave-active {
  transform: translate3d(5rem, 0, 0);
  opacity: 0;
}
</style>
