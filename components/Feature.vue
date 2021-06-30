<template>
  <el-row class="feature">
    <el-col :span="7">
      <img :src="img" />
    </el-col>
    <el-col :span="17">
      <el-row class="purpleText">
        <span> 特色 {{ count }} </span>
      </el-row>
      <el-row class="plainText">
        <span> {{ text }} </span>
      </el-row>
    </el-col>
  </el-row>
</template>

<script>
export default {
  props: ["img", "count", "text"],
};
</script>

<style scoped>
.feature {
  margin-top: 53px;
}
img {
  width: 120px;
  height: auto;
}
.purpleText {
  color: #b1aee8;
  font-size: 22px;
  line-height: 26px;
  margin-top: 20px;
  font-weight: 700;
}
.plainText {
  margin-top: 16px;
  text-align: left;
  font-size: 20px;
  line-height: 29px;
  max-width: 300px;
}
</style>
