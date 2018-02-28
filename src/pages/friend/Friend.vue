<template>
<div>
       <head-title></head-title>
     <section class="i-main">
      <search-input></search-input>
   <div class="address-list">
        <ul class="select-list">
           <router-link class="select-item" :to="{name:'NewFriend'}" tag="li">
                <div class="select-icon">
                    <img src="" alt=""/>
                </div>
                <span>新的朋友</span>
           </router-link>
      
            <router-link class="select-item" tag="li" :to="{name:'ChatGroup'}">
                <div class="select-icon">
                    <img src="" alt="">
                </div>
                <span>群聊</span>
            </router-link>
        </ul>
        <ul class="friend-list">
            <li class="friend-item">
                <header class="title">A</header>
                <ul class="list">
                    <!-- <li class="item" v-for="item in friendList" :key="item.fMail" @click="toCardHandle(item)">
                        <div class="friend-photo">
                            <img src="" alt="">
                        </div>
                        <span class="friend-name">{{item.name}}</span>
                   </li> -->
                   <li class="item" v-for="item in friendList" :key="item.fMail" @click="toCardHandle(item)">
                     <mt-cell-swipe
                        :right="[
                          {
                            content: '备注',
                            style: { background: '#c7c7cc', color: '#fff',fontSize:'0.8376811594rem',display:'flex',alignItems:'center'},
                            handler: () => this.$messagebox('delete')
                          }  
                        ]">
                           <div class="friend-photo">
                            <img src="" alt="">
                        </div>
                        <span class="friend-name">{{item.name}}</span>
                    </mt-cell-swipe>

                   </li>
                    <!-- <li class="item">
                        <div class="friend-photo">
                            <img src="" alt="">
                        </div>
                        <span class="friend-name">222</span>
                   </li> -->

                </ul>
            </li>
           
        </ul>
    </div>
      </section>
      <foot-guide></foot-guide>
<transition name="router-slid" mode="in-out">
            <router-view></router-view>
        </transition>
    </div>
</template>
<script>
import SearchInput from "@/components/common/searchInput/SearchInput";
import Head from "@/components/header/Head";
import FootGuide from "@/components/footer/FootGuide";

import { mapState, mapMutations } from "vuex";
export default {
  components: {
    headTitle: Head,
    footGuide: FootGuide,
    searchInput: SearchInput
  },
  computed: {
    ...mapState(["friendList"])
  },
  methods: {
    ...mapMutations(["updateChatUser"]),
    toCardHandle(elt) {
      this.updateChatUser(elt);
      this.$router.push({ name: "Card", params: { userId: elt.fMail } });
    }
  }
};
</script>
<style>
.router-slid-enter-active,
.router-slid-leave-active {
  transition: all 0.2s;
}
.router-slid-enter,
.router-slid-leave-active {
  transform: translate3d(5rem, 0, 0);
  opacity: 0;
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
  .mint-cell-wrapper{
    height: 100%;
  }
  .mint-cell-value{
    height: 100%;
  }
  .mint-cell-swipe-buttongroup{
    display: flex;
  }
</style>
