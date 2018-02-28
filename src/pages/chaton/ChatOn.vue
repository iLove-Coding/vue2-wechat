<template>
  <div class="in">
      <header class="chat-head">
    <div class="return-icon">
        <i class="fa fa-chevron-left" aria-hidden="true"></i>
        <span @click="toChatHandle">返回</span>
    </div>
    <h1 class="title">{{chatUser.name}}</h1>
    <i class="fa fa-user" aria-hidden="true"></i>
</header>
<section class="chat-main">
    <div class="chat-panel" v-if="chatInfoMap[chatUser.fMail]">
        <p><time>上午 10:00</time></p>
        <div class="item-in" v-for="item in chatInfoMap[chatUser.fMail]" :key="item.id">
        <div class="res-item clearfix" v-if="item.type===2">
            <a href="javascript:;"><img src="" alt=""/></a>
            <span>{{item.text}}</span>
        </div>
        <div class="send-item clearfix" v-else-if="item.type===1">
            <a href="javascript:;"><img src="" alt=""/></a>
            <span>{{item.text}}</span>
        </div>
        </div>
        <!-- <div class="warn-tip-friend">
            炫封开启了朋友验证，你还不是他（它）朋友。请先发送朋友验证，对方验证通过后，才能聊天
            <a href="">发送朋友验证</a>
        </div>-->
   </div>
</section>
<footer class="chat-foot">
    <a href=""></a>
    <input type="text" placeholder="输入你想说的话..." @keyup.enter="sendMsgHandle" v-model="inputVal">
  <button class="send-btn" @click="sendMsgHandle">发送</button>
</footer>
  </div>
</template>
<script>
import { mapState, mapMutations } from "vuex";
export default {
  data() {
    return {
      inputVal: ""
    };
  },
  computed: {
    ...mapState(["chatUser", "ws", "chatInfoMap"])
  },
  methods: {
    toChatHandle() {
      this.$router.go(-1);
    },
    sendMsgHandle() {
      this.ws.sendMessage({
          msgId: 10005,
          from: localStorage.getItem("mail"),
          to: this.chatUser.fMail,
          text: this.inputVal
        })
    }
  }
};
</script>

<style>
@import url("../../css/chaton.css");
.in {
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  background-color: #ebebeb;
  z-index: 100;
}
</style>
