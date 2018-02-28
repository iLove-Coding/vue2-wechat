<template>
  <section class="editSex-page">
    <header class="edit-head">
        <div class="return-icon">
            <span class="cancel-btn" @click="cancelHandle">取消</span>
            <h1 class="title">设置性别</h1>
            <span class="complete-btn-active" @click="completeHandle">完成</span>
        </div>
    </header>
    <ul class="select-group">
        <li class="item" @click="sexHandle">男
            <i class="fa fa-check" aria-hidden="true" v-show="isShow"></i>
        </li>
        <li class="item" @click="sexHandle">女
            <i class="fa fa-check" aria-hidden="true" v-show="!isShow"></i>
        </li>
    </ul>
</section>
</template>
<script>
import { mapState, mapMutations } from "vuex";
import { updateUserInfo } from "@/servers/";
export default {
  data() {
    return {
      isShow: true
    };
  },
  computed: {
    ...mapState(["myDetailInfo"])
  },
  methods: {
    ...mapMutations(["updateMyDetailInfo"]),
    sexHandle() {
      this.isShow = !this.isShow;
    },
    cancelHandle() {
      this.$router.go(-1);
    },
    completeHandle() {
      let infoObj = this.myDetailInfo;
      infoObj.sex = this.isShow ? 0 : 1;
      updateUserInfo(infoObj)
        .then(res => this.updateMyDetailInfo(infoObj))
        .then(res => this.$router.go(-1));
    }
  },
  mounted() {
    this.isShow = this.myDetailInfo.sex === 0 ? true : false;
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
.editSex-page {
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
  width: 100%;
  margin-bottom: torem(45px);
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
.select-group {
  background-color: white;
  border-top: solid torem(1px) #d9d9d9;
  border-bottom: solid torem(1px) #d9d9d9;
  box-sizing: border-box;
  padding-left: torem(45px);
  .item {
    height: torem(130px);
    line-height: torem(130px);
    box-sizing: border-box;
    border-bottom: solid torem(1px) #d9d9d9;
    font-size: torem(50px);
    padding-right: torem(46px);
    .fa-check {
      float: right;
      color: #007aff;
      margin-top: torem(40px);
    }
  }
}
</style>
