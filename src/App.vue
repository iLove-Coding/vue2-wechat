<template>
	<div>
		<keep-alive>
			<router-view v-if="$route.meta.keepAlive"></router-view>
		</keep-alive>
			<router-view v-if="!$route.meta.keepAlive"></router-view>
    </div>
</template>
<script>
require("./assets/js/initial");
import {mapState} from 'vuex'
export default {
  computed:{
    ...mapState(["ws"])
  },
  watch: {
    $route() {
      if (this.$route.params.id) {
        console.log("有人登陆啦");
        this.ws.initialize({
          msgId: 10001,
          from: localStorage.getItem("mail")
        });
      }
    }
  }

};

</script>

<style>
@import url("./assets/css/font-awesome.min.css");
@import url("./assets/css/reset.css");
@import url("./assets/css/tools.css");
@import url("./assets/css/global.css");
@import url("./css/index.css");
</style>

