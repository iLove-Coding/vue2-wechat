<template>
  <div class="in">
      <header class="chat-head">
    <router-link class="return-icon" tag="div" :to="{name:'Friend'}">
        <i class="fa fa-chevron-left" aria-hidden="true"></i>
        <span>通讯录</span>
    </router-link>
    <h1 class="title">群聊</h1>
</header>
<section class="chat-group">
<div class="main-search">
    <div class="search-box">
        <i class="fa fa-search" aria-hidden="true"></i>
        <span>搜索</span>
        <i class="fa fa-microphone" aria-hidden="true"></i>
    </div>
</div>
    <ul class="group-list">
        <li class="item">
            <div class="group-photo">
                <img src="" alt="">
            </div>
            <span class="group-name">嗷嗷</span>
        </li>
        <li class="item">
            <div class="group-photo">
                <img src="" alt="">
            </div>
            <span class="group-name">嗷嗷</span>
        </li>
        <li class="item">
            <div class="group-photo">
                <img src="" alt="">
            </div>
            <span class="group-name">嗷嗷</span>
        </li>
        <li class="item">
            <div class="group-photo">
                <img src="" alt="">
            </div>
            <span class="group-name">嗷嗷</span>
        </li>
    </ul>
</section>
  </div>
</template>
<style>
@import url('../../../../css/chatGroup.css');
.in{
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  background-color:white;
  z-index: 100;
}
</style>

