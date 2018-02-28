<template>
<div>
     <head-title></head-title>
     <section class="i-main">
      <search-input></search-input>
  <ul class="chat-list">
        <router-link class="item" tag="li" v-for="(item,key) in chatListGetter" :key="key" :to="{name:'ChatOn',params:{userId:1}}">
            <mt-cell-swipe
                        :right="[
                          {
                            content: '删除',
                            style: { background: '#ff3b30', color: '#fff',fontSize:'0.8376811594rem',display:'flex',alignItems:'center'},
                            handler: ()=>delHandle(item.fMail)
                          },
                            
                        ]">
                        <div class="item-pic">
                <img src="" alt="">
                <i class="tip" v-show="item.tip>0">{{item.tip}}</i>
            </div>
            <div class="item-info">
                <p class="item-font">
                    <span class="name">{{item.name}}</span>
                    <time class="time">{{item.time}}</time>
                </p>
                <p class="item-font">{{item.font}}</p>
            </div>
                    </mt-cell-swipe>
            <!-- <div class="item-pic">
                <img src="" alt="">
                <i class="tip" v-show="item.tip>0">{{item.tip}}</i>
            </div>
            <div class="item-info">
                <p class="item-font">
                    <span class="name">{{item.name}}</span>
                    <time class="time">{{item.time}}</time>
                </p>
                <p class="item-font">{{item.font}}</p>
            </div> -->

        </router-link>
       
    </ul>
      </section>
      <foot-guide></foot-guide>
  <transition name="router-slid" mode="out-in">
            <router-view></router-view>
        </transition>
    </div>
</template>
<script>
import SearchInput from "@/components/common/searchInput/SearchInput";
import Head from "@/components/header/Head";
import FootGuide from "@/components/footer/FootGuide";
import { mapState, mapGetters,mapMutations } from "vuex";

export default {
  components: {
    headTitle: Head,
    footGuide: FootGuide,
    searchInput: SearchInput
  },
  computed: {
    ...mapState(["chatList"]),
    ...mapGetters(["chatListGetter"])
  },
  methods: {

  }
};
</script>

<style scoped>
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
.mint-cell-wrapper {
  height: 100%;
}
.mint-cell-value {
  height: 100%;
}
.mint-cell-swipe-buttongroup {
  display: flex;
}
.i-main .chat-list{
    padding: 0;
}
</style>