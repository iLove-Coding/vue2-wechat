<template>
<div>
     <head-title></head-title>
     <section class="i-main">
      <div class="find-nav">
        <router-link class="nav-title" :to="{name:'Moments'}" tag="div">
        <i class="icon icon-circle"></i>
        <span>朋友圈</span>
        <i class="fa fa-angle-right" aria-hidden="true"></i>
        </router-link>
        <div class="nav-group">
        <p>
        <i class="icon icon-sao"></i>
        <span>扫一扫</span>
        <i class="fa fa-angle-right" aria-hidden="true"></i>
        </p>
        <p>
        <i class="icon icon-shake"></i>
        <span>摇一摇</span>
        <i class="fa fa-angle-right" aria-hidden="true"></i>
        </p>

        </div>
        <div class="nav-group">
        <p>
        <i class="icon icon-see"></i>
        <span>看一看</span>
        <i class="fa fa-angle-right" aria-hidden="true"></i>
        </p>
        <p>
        <i class="icon icon-search"></i>
        <span>搜一搜</span>
        <i class="fa fa-angle-right" aria-hidden="true"></i>
        </p>

        </div>
        <div class="nav-group">
        <p>
        <i class="icon icon-around"></i>
        <span>附近的人</span>
        <i class="fa fa-angle-right" aria-hidden="true"></i>
        </p>
        <p>
        <i class="icon icon-bottle"></i>
        <span>漂流瓶</span>
        <i class="fa fa-angle-right" aria-hidden="true"></i>
        </p>

        </div>
        <div class="nav-group">
        <p>
        <i class="icon icon-shop"></i>
        <span>购物</span>
        <i class="fa fa-angle-right" aria-hidden="true"></i>
        </p>
        <p>
        <i class="icon icon-game"></i>
        <span>游戏</span>
        <i class="fa fa-angle-right" aria-hidden="true"></i>
        </p>
        </div>
        <div class="nav-title">
        <i class="icon icon-program"></i>
        <span>小程序</span>
        <i class="fa fa-angle-right" aria-hidden="true"></i>
        </div>
        </div>
      </section>
      <foot-guide></foot-guide>
             <transition name="router-slid" mode="out-in">
            <router-view></router-view>
        </transition>
  </div>
 
</template>
<script>
import Head from "@/components/header/Head";
import FootGuide from "@/components/footer/FootGuide";
// import { websocket } from "@/servers/websoket";
export default {
 
  components: {
    headTitle: Head,
    footGuide: FootGuide
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
</style>
