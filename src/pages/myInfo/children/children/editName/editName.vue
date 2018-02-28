<template>
  <section class="editName-page">
    <header class="edit-head">
        <div class="return-icon">
            <span class="cancel-btn" @click="cancelHandle">取消</span>
            <h1 class="title">设置名字</h1>
            <!--<span class="complete-btn">完成</span>-->
            <span class="complete-btn-active" @click="completeHandle">完成</span>
        </div>
    </header>
    <div class="edit-input">
        <input type="text" v-model="inputVal" v-focus>
    </div>
</section>
</template>
<script>
import { mapState, mapMutations } from "vuex";
import { updateUserInfo } from "@/servers/";
export default {
  computed: {
    ...mapState(["myDetailInfo"])
  },
  data() {
    return {
      inputVal: ""
    };
  },
  directives: {
    focus: {
      inserted(el, binding) {
        el.focus();
      },
      update(el, binding) {
        el.focus();
      }
    }
  },
  methods: {
    ...mapMutations(["updateMyDetailInfo"]),
    cancelHandle() {
      this.$router.go(-1);
    },
    completeHandle() {
      let infoObj = this.myDetailInfo;
      infoObj.name = this.inputVal;
      updateUserInfo(infoObj)
        .then(res => this.updateMyDetailInfo(infoObj))
        .then(res => this.$router.go(-1));
    }
  },
  mounted() {
    this.inputVal  = this.myDetailInfo.name;
  }
};
</script>
<style lang="scss" scoped>
// sass变量
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
.editName-page {
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
.edit-input {
  height: torem(130px);
  background-color: white;
  border-top: solid torem(1px) #d9d9d9;
  border-bottom: solid torem(1px) #d9d9d9;
  input {
    height: 100%;
    width: 100%;
    border: none;
    outline: none;
    text-indent: torem(33px);
    font-size: torem(50px);
  }
}
</style>
