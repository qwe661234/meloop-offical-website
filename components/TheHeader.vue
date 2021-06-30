<template>
<div class="header">
  <el-row type="flex" align="middle">
    <el-col>
      <nuxt-link to="/"
        ><img :src="require('~/assets/images/logo.png')" alt="logo" class="logo"
      /></nuxt-link>
    </el-col>
    <el-col :offset="7.5" :span="4">
      <nuxt-link to="/" class="grayText"> 首頁 </nuxt-link>
    </el-col>
    <el-col :span="5"> 
      <nuxt-link to="/Advertising" class="grayText"> 廣告投放 </nuxt-link>
    </el-col>
    <el-col :span="2">
      <a href="https://www.facebook.com/i.loop.u/"
        ><img :src="require('~/assets/images/fbIcon.png')" alt="fbIcon" class="iconImg"
      /></a>
    </el-col>
    <el-col :span="2">
      <a href="https://www.instagram.com/i.loop.u/"
        ><img :src="require('~/assets/images/igIcon.png')" alt="igIcon" class="iconImg"
      /></a>
    </el-col>
  </el-row>
</div>
</template>

<style scoped>
.header {
  background-color:rgba(255, 255, 255, 0.6);
  height: 76px;
  padding: 15px 260px 0 260px;
}
.logo {
  height: 32px;
  width: auto;
}
.grayText {
  font-family: Noto Sans TC;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 26px;
  color: #6b6b6b;
  margin-right: 32px;
  text-decoration: none;
}
.iconImg {
  height: 30px;
  width: 30px;
}
</style>