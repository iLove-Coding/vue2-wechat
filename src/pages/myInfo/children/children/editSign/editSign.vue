<template>
  <section class="editSign-page">
    <header class="edit-head">
        <div class="return-icon">
            <span class="cancel-btn" @click="cancelHandle">取消</span>
            <h1 class="title">设置个性签名</h1>
            <span class="complete-btn-active" @click="completeHandle">完成</span>
        </div>
    </header>
    <div class="edit-area">
        <textarea name="" id="" maxlength="25" v-model="inputVal"></textarea>
    </div>
</section>
</template>
<script>
import { mapState, mapMutations } from "vuex";
import { updateUserInfo } from "@/servers/";
export default {
  data() {
    return {
      inputVal: ""
    };
  },
  computed: {
    ...mapState(["myDetailInfo"])
  },
  methods: {
    ...mapMutations(["updateMyDetailInfo"]),
    cancelHandle() {
      this.$router.go(-1);
    },
    completeHandle() {
      let infoObj = this.myDetailInfo;
      infoObj.sign = this.inputVal;
      updateUserInfo(infoObj)
        .then(res => this.updateMyDetailInfo(infoObj))
        .then(res => this.$router.go(-1));
    }
  },
  mounted() {
    this.inputVal = this.myDetailInfo.sign;
  }
};
</script>

<style lang="scss" scoped>
@function torem($px) {
  @return $px / 69px * 1rem;
}

@mixin navIcon {
  float: left;
  width: torem(65px);
  height: torem(65px);
  margin-right: torem(50px);
  margin-top: torem(32px);
  background-size: 100%;
}
.editSign-page {
  position: absolute;
  height: 100%;
  width: 100%;
  left: 0;
  top: 0;
  background-color: #efeff4;
  z-index: 150;
}
$bacgroundColor: #302f35;

.edit-head {
  height: torem(140px);
  background-color: $bacgroundColor;
  margin-bottom: torem(45px);
  width: 100%;
  .return-icon {
    height: torem(140px);
    color: white;
    font-size: torem(50px);
    line-height: torem(140px);
    display: flex;
    box-sizing: border-box;
    justify-content: space-between;
    padding: 0 torem(35px);
    .title {
      font-size: torem(54px);
      font-weight: normal;
    }
    .complete-btn {
      color: #306733;
    }
    .complete-btn-active {
      color: #20d81f;
    }
  }
}
.edit-area {
  width: 100%;
  background-color: white;
  border-top: solid torem(1px) #d9d9d9;
  border-bottom: solid torem(1px) #d9d9d9;
  height: torem(238px);
  box-sizing: border-box;
  padding-top: torem(35px);
  textarea {
    width: 100%;
    border: none;
    outline: none;
    font-size: torem(44px);
    line-height: torem(58px);
    padding: 0 torem(50px);
    box-sizing: border-box;
  }
}
</style>
