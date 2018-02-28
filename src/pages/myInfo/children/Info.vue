<template>
  <div class="myinfo-page">
<header class="chat-head">
    <div class="return-icon">
        <i class="fa fa-chevron-left" aria-hidden="true"></i>
        <span @click="$router.go(-1)">我</span>
    </div>
    <h1 class="title">个人信息</h1>
</header>
<div class="nav-group">
    <p class="my-photo">
        <span>头像</span>
        <span class="box-r">
        <img src="" alt="" class="pic">
        <i class="fa fa-angle-right" aria-hidden="true"></i>
         </span>
    </p>
    <router-link :to="{name:'EditName'}" tag="p">
        <span>名字</span>
        <span class="box-r">
        <em class="font-tag">{{myDetailInfo.name}}</em>
        <i class="fa fa-angle-right" aria-hidden="true"></i>
        </span>
    </router-link>
    <p>
        <span>微信号</span>
    <span class="box-r">
        <em class="font-tag">{{myDetailInfo.mail}}</em>
    </span>
    </p>
    <router-link :to="{name:'EditSex'}" tag="p">
        <span>性别</span>
        <span class="box-r">
            <em class="font-tag">{{myDetailInfo.sex===0?'男':'女'}}</em>
            <i class="fa fa-angle-right" aria-hidden="true"></i>
        </span>
    </router-link>
    <router-link :to="{name:'EditSign'}" tag="p">
    <span>个性签名</span>
    <span class="box-r">
        <em class="font-tag sign-tag">{{myDetailInfo.sign}}</em>
        <i class="fa fa-angle-right" aria-hidden="true"></i>
    </span>
    </router-link>
</div>
    <div class="nav-title">
        <span>我的地址</span>
        <i class="fa fa-angle-right" aria-hidden="true"></i>
    </div>

    <router-view></router-view>

  </div>
</template>
<script>
import { mapState, mapMutations } from "vuex";
export default {
  computed: {
    ...mapState(["myDetailInfo"])
  },
  methods:{

  }
};
</script>

<style>
@import url("../../../css/myInfo.css");
</style>
