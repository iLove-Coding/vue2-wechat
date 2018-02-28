<template>
  <div class="in">
   <header class="chat-head">
    <div class="return-icon">
        <i class="fa fa-chevron-left" aria-hidden="true"></i>
        <span @click="goBackHandle">微信</span>
    </div>
    <h1 class="title">添加朋友</h1>
    <i class="fa add-icon fa-ellipsis-h" aria-hidden="true"></i>
</header>

<section class="add-page">
    <div class="search-btn">
        <i class="fa fa-search" aria-hidden="true"></i>
        <input class="tag" placeholder="邮箱地址" @keyup.enter="inputDone" v-model="inputVal"/>
    </div>
    <p class="my-mail">我的邮箱：{{myEmail}}</p>
</section>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      inputVal: ""
    };
  },
  computed: {
    ...mapState(["ws"]),
    myEmail() {
      return localStorage.getItem("mail");
    }
  },
  methods: {
    goBackHandle() {
      this.$router.push({ name: "Friend" });
    },
    inputDone() {
      console.log(this.inputVal);
      this.ws.sendMessage({
        msgId:10002,
        from:localStorage.getItem('mail'),
        to:this.inputVal,
        remark:'',
        tip:''
      })
      // this.$router.push({ name: "Card", params: { userId: this.inputVal } });
    }
  }
};
</script>
<style>
@import url("../../../../css/addFriend.css");
.in {
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  background-color: white;
  z-index: 100;
}
</style>
