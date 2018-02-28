<template>
 <div>
     <head-title></head-title>
     <section class="i-main">
         <div class="about-me">
            <div class="my-info" tag="div" @click="queryHandle">
                <div class="my-pic">
                    <img src="" alt="">
                </div>
                <div class="my-tag">
                    <p class="my-name">{{myDetailInfo.name}}</p>
                    <p class="my-id">微信号：{{mail}}</p>
                </div>
                <div class="more-tag">
                    <span class="twocode"></span>
                    <i class="fa fa-angle-right" aria-hidden="true"></i>
                </div>
            </div>
            <div class="nav-box">
                <div class="nav-title">
                    <i class="icon icon-sao"></i>
                    <span>小程序</span>
                    <i class="fa fa-angle-right" aria-hidden="true"></i>
                </div>
                <div class="nav-group">
                    <p>
                        <i class="icon icon-sao"></i>
                        <span>购物</span>
                        <i class="fa fa-angle-right" aria-hidden="true"></i>
                    </p>
                    <p>
                        <i class="icon icon-sao"></i>
                        <span>游戏</span>
                        <i class="fa fa-angle-right" aria-hidden="true"></i>
                    </p>
                    <p>
                        <i class="icon icon-sao"></i>
                        <span>游戏</span>
                        <i class="fa fa-angle-right" aria-hidden="true"></i>
                    </p>
                    <p>
                        <i class="icon icon-sao"></i>
                        <span>游戏</span>
                        <i class="fa fa-angle-right" aria-hidden="true"></i>
                    </p>
                </div>
                <div class="nav-title">
                    <i class="icon icon-sao"></i>
                    <span>小程序</span>
                    <i class="fa fa-angle-right" aria-hidden="true"></i>
                </div>
            </div>
        <transition name="router-slid" mode="out-in">
            <router-view></router-view>
        </transition>
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
// import '../../css/index.css'
import { queryUserInfo } from "@/servers/";
import { mapState, mapMutations } from "vuex";
export default {
  components: {
    headTitle: Head,
    footGuide: FootGuide
  },
  data() {
    return {
      mail: localStorage.getItem("mail")
    };
  },
  computed: {
    ...mapState(["myDetailInfo"])
  },
  methods: {
    ...mapMutations(["updateMyDetailInfo"]),
    queryHandle() {
      this.$router.push({
        name: "Info"
      });
    }
  },
  mounted() {
    queryUserInfo({
      mail: localStorage.getItem("mail")
    }).then(res => {
      this.updateMyDetailInfo({
        name: res.data.user.name,
        mail: res.data.user.mail,
        sex: res.data.user.sex,
        sign: res.data.user.sign,
        address: ""
      });
    });
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