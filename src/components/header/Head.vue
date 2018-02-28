<template>
  <header class="i-head">
    <h1 class="title">{{headTag}}</h1>
    <!-- <span class="tip">(<em class="chat-num">10</em>)</span> -->
    <!-- <i class="fa fa-ellipsis-h" aria-hidden="true"></i> -->
  <i class="fa add-icon" @click="eventHandle" aria-hidden="true" :class="iconTag"></i>
  <!-- <i class="fa  add-icon" aria-hidden="true"></i> -->
</header>
</template>
<script>
export default {
  computed: {
    navTag(){
     return this.$store.state.nav.nowNavTag;
    },
    headTag() {
      return this.$store.state.nav.nowTitleTag;
    },
    iconTag() {
      return this.$store.state.nav.nowIconTag;
    }
  },
  methods: {
    eventHandle() {
      switch (this.navTag) {
        case "friend":
          this.$router.push({name:'AddFriend'})
          break;
        case "chat":
        // this.$router.push({name:''})
          break;
        default:
          break;
      }
    }
  }
};
</script>
<style>
@import url("../../css/header.css");
.fa-plus {
  color: white;
}
</style>

