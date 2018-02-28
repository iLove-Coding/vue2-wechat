<template>
  <div class="in">
      <header class="chat-head">
    <div class="return-icon" @click="goBackHandle">
        <i class="fa fa-chevron-left" aria-hidden="true"></i>
        <span>详细资料</span>
    </div>
    <h1 class="title">资料设置</h1>
</header>

<section class="delete-page">

    <div class="nav-title">
        <span>设置备注和标签</span>
        <i class="fa fa-angle-right" aria-hidden="true"></i>
    </div>
    <div class="nav-title">
        <span>把他推荐给朋友</span>
        <i class="fa fa-angle-right" aria-hidden="true"></i>
    </div>
    <div class="nav-title">
        <span>设为星标朋友</span>
    </div>
    <div class="nav-group">
        <p>
            <span class="tag">不看他看我的朋友圈</span>
     
        </p>
        <p>

            <span class="tag">不看朋友圈</span>

        </p>
    </div>
    <div class="nav-group">
        <p>
            <span class="tag">加入黑名单</span>
        </p>
        <p>

            <span class="tag">投诉</span>
            <i class="fa fa-angle-right" aria-hidden="true"></i>
        </p>
    </div>
    <div class="btn-set">
        <button class="delete-btn" type="button" @click="delFriendHandle">删除</button>
    </div>
</section>
  </div>
</template>
<script>
import { mapState, mapMutations } from "vuex";
import { deleteFriend } from "@/servers/";
export default {
  computed: {
    ...mapState(["chatUser"])
  },
  methods: {
    ...mapMutations(["delFriendList"]),
    goBackHandle() {
      this.$router.go(-1);
    },
    delFriendHandle() {
      //   deleteFriend({
      //       from:localStorage.getItem('mail'),
      //       to:this.chatUser.fMail
      //   }).then(res => this.delFriendList(this.chatUser.fMail));
      this.delFriendList(this.chatUser.fMail);
      this.$router.replace({name:"Friend"})
    }
  }
};
</script>

<style>
@import url("../../../../css/editFriend.css");
.in {
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  background-color: #efeff4;
  z-index: 200;
}
</style>
