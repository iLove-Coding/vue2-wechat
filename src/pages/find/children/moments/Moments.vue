<template>
  		<div class="page-moments">
		<header class="chat-head">
            <router-link class="return-icon" tag="div" :to="{name:'Find'}">
                <i class="fa fa-chevron-left" aria-hidden="true"></i>
                <span>发现</span>
            </router-link>
            <h1 class="title">朋友圈</h1>
            <i class="fa fa-camera" aria-hidden="true"></i>
        </header>
    <section class="moments-page">
    <header class="header">
        <div class="header-banner"></div>
        <div class="header-user">
            <span class="user-name">美少女战士</span>
            <a class="user-link" href="javascript:;"><img src="" width="70" height="70" alt=""></a>
        </div>
    </header>
    <div class="moments-list">
         <!-- 消息内容 -->
        <!--参考：多图片消息html结构示例-->
        <div class="moments-item" data-index="0">
            <a class="item-left" href="#">
                <img src="" width="42" height="42" alt=""/>
            </a>
            <div class="item-right">
                <a href="#" class="item-name">阳和</a>
                <p class="item-msg">华仔真棒，新的一年继续努力！</p>
                <!--<div class="item-share">
                    <img class="pic-small" src="./img/reward1.png">
                    <span class="article-title">漂洋过海来看你</span>
                </div>-->
                <!-------------------->
                <!--<ul class="item-pic">
                    <img class="pic-item" src="./img/reward1.png">
                    <img class="pic-item" src="./img/reward2.png">
                    <img class="pic-item" src="./img/reward3.png">
                    <img class="pic-item" src="./img/reward4.png">
                </ul>-->
                <!--<div class="item-pic">-->
                    <!--<img class="pic-big" src="./img/reward1.png">-->
                <!--</div>-->
                <div class="item-ft">
                    <span class="item-time">51分钟前</span>
                    <div class="item-panel">
                        <a href="#" class="icon-praise">
                            <span class="like-icon"></span>
                            <span class="unlike-icon"></span>
                        </a>
                        <a href="#" class="comm-icon"></a>
                    </div>
                    <div class="item-reply-btn">
                        <span class="item-reply"></span>
                    </div>
                </div>
                <div class="reply-zone">
                    <div class="reply-like">
                        <i class="icon-like-blue"></i>
                        <a href="#" class="reply-who">Guo封面</a>，
                        <a href="#" class="reply-who">源小神</a>
                    </div>
                    <div class="reply-comment">
                        <div class="comment-item">
                            <a class="reply-who" href="#">Guo封面</a>：你也喜欢华仔哈哈哈哈哈哈哈或或或哈哈哈哈哈哈！！！
                        </div>
                        <div class="comment-item">
                            <a class="reply-who" href="#">喵仔zsy</a>：华仔实至名归哈
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
		</div>
</template>
<script>
export default {};
</script>
<style>
@import url("../../../../css/moments.css");
.page-moments{
      position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  background-color: white;
  z-index: 100;
}
</style>
