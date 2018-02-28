<template>
  <div class="in">
      <header class="chat-head">
     <router-link class="return-icon" tag="div" :to="{name:'Friend'}">
        <i class="fa fa-chevron-left" aria-hidden="true"></i>
        <span>通讯录</span>
    </router-link>
    <h1 class="title">新的朋友</h1>
    <i class="add-icon" aria-hidden="true">添加朋友</i>
</header>
<section class="new-friend">
    <div class="main-search">
        <div class="search-box">
            <i class="fa fa-search" aria-hidden="true"></i>
            <span>搜索</span>
            <i class="fa fa-microphone" aria-hidden="true"></i>
        </div>
    </div>
    <ul class="friend-list">
        <li class="friend-item" v-if="recentAddReq.length>0">
            <header class="title">近三天</header>
            <ul class="chat-list">
                <li class="item" v-for="item in recentAddReq" :key="item.fMail">
                    <mt-cell-swipe
                        :right="[
                          {
                            content: '删除',
                            style: { background: '#ff3b30', color: '#fff',fontSize:'0.8376811594rem',display:'flex',alignItems:'center'},
                            handler: ()=> delHandle(item.fMail)
                          },
                            
                        ]">
                          <div class="item-pic">
                        <!--<img src="../img/photo1.jpeg" alt="">-->
                    </div>
                    <div class="item-info">
                        <p class="item-font">
                            <span class="name">{{item.name}}</span>
                            <button @click="confirmAddHandle(item.fMail)" v-if="!item.state">添加</button>
                            <time class="time" v-if="item.state">已添加</time>
                        </p>
                        <p class="item-font">{{item.tip?item.tip:'请求添加你为朋友'}}</p>
                    </div>
                    </mt-cell-swipe>
                   
                </li>
            </ul>
        </li>
        <li class="friend-item" v-if="outTimeAddReq.length>0">
            <header class="title">三天前</header>
            <ul class="chat-list">
                <li class="item" v-for="item in outTimeAddReq" :key="item.fMail">
                    <mt-cell-swipe
                        :right="[
                          {
                            content: '删除',
                            style: { background: '#ff3b30', color: '#fff',fontSize:'0.8376811594rem',display:'flex',alignItems:'center'},
                            handler: ()=>delHandle(item.fMail)
                          },
                            
                        ]">
                     <div class="item-pic">
                        <!--<img src="../img/photo1.jpeg" alt="">-->
                    </div>
                    <div class="item-info">
                        <p class="item-font">
                            <span class="name">{{item.name}}</span>
                            <time class="time">已过期</time>
                        </p>
                        <p class="item-font">{{item.tip?item.tip:'请求添加你为朋友'}}</p>
                    </div>
                    </mt-cell-swipe>
                    <!-- <div class="item-pic">
                        <img src="../img/photo1.jpeg" alt="">
                    </div>
                    <div class="item-info">
                        <p class="item-font">
                            <span class="name">{{item.name}}</span>
                            <time class="time">已过期</time>
                        </p>
                        <p class="item-font">{{item.tip?item.tip:'请求添加你为朋友'}}</p>
                    </div> -->
                </li>
            </ul>
        </li>
    </ul>
</section>
  </div>
</template>
<script>
import { mapMutations, mapGetters, mapState } from "vuex";
export default {
  computed: {
    ...mapState(["addFriendArr", "ws"]),
    ...mapGetters(["recentAddReq", "outTimeAddReq"])
  },
  methods: {
    ...mapMutations(["deleteAddFriendArr"]),
    confirmAddHandle(mail) {
      console.log(mail);
      this.ws.sendMessage({
        msgId: 10003,
        from: localStorage.getItem("mail"),
        to: mail,
        remark: ""
      });
    },
    delHandle(mail) {
      this.deleteAddFriendArr(mail);
    }
  }
};
</script>

<style scoped>
@import url("../../../../css/newFriend.css");
.in {
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  background-color: white;
  z-index: 100;
}
.mint-cell-wrapper {
  padding: 0;
  display: block;
}
.mint-cell-value {
  color: black;
}
.mint-cell:last-child {
  background-size: 0;
}
.mint-cell {
  display: flex;
  align-items: center;
  height: 100%;
}
.mint-cell-wrapper {
  height: 100%;
}
.mint-cell-value {
  height: 100%;
}
.mint-cell-swipe-buttongroup {
  display: flex;
}
</style>