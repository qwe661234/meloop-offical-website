<template>
  <el-col :span="18">
    <el-row>
      <div class="backInLeft">
        <h1>探索生活の每一步</h1>
      </div>
    </el-row>
    <el-row class="purpleText">
      <transition name="purpleText">
        <span v-if="show"> Let me loop you in. </span>
      </transition>
    </el-row>
    <el-row class="plainText">
      <transition name="plainText">
        <span v-if="show"> 將生活教練概念遊戲化的匿名社群平台 App </span>
      </transition>
    </el-row>
      <transition name="storeIcon">
    <el-row v-if="show">
        <el-col :span="9.5">
          <a
            href="https://apps.apple.com/tw/app/me-loop-%E6%8E%A2%E7%B4%A2%E7%94%9F%E6%B4%BB%E3%81%AE%E6%AF%8F%E4%B8%80%E6%AD%A5/id1532001343"
          >
            <img
              src="/images/appleStore.svg"
              alt="appStore"
              class="storeIcon"
            />
          </a>
        </el-col>
        <el-col :span="1">
          <a
            href="https://play.google.com/store/apps/details?id=fun.meloop.app"
          >
            <img
              src="/images/googlePlay.svg"
              alt="googlePlay"
              class="storeIcon"
            />
          </a>
        </el-col>
    </el-row>
    </transition>
  </el-col>
</template>

<script>
export default {
  transition: {
    name: ["purpleText", "plainText", "storeIcon"],
  },
  data() {
    return {
      show: false,
    };
  },
  mounted() {
    this.show = true;
  },
};
</script>

<style scoped>
h1 {
  font-size: 28px;
  line-height: 30px;
  color: #ff959a;
}

.purpleText {
  color: #95b4f9;
  font-size: 24px;
  line-height: 30px;
  margin: 8px 0px 24px;
  font-weight: 700;
}

.plainText {
  font-size: 20px;
  line-height: 30px;
  margin: 8px 0px 24px;
  max-width: 300px;
  font-weight: 300;
}

.storeIcon {
  width: 176px;
  height: 53px;
  margin: 0 16px 0 0;
}
</style>