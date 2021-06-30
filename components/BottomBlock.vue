<template>
<div>
  <el-row >
    <el-col :span="10" class="col" v-if="show1 === 0">
      <img :src="feature[0].img" alt="pink" class="changeImg backInLeft"/>
    </el-col>
    <el-col :span="12" :offset="2" class="col">
      <FeatureList :feature="feature[0]" v-if="show1 === 0"/>
    </el-col>
  </el-row>
  <el-row > 
    <el-col :span="10" class="col" v-if="show1 === 1">
      <img :src="feature[1].img" alt="pink" class="changeImg backInLeft"/>
    </el-col>
    <el-col :span="12" :offset="2" class="col">
      <FeatureList :feature="feature[1]" v-if="show1 === 1"/>
    </el-col>
  </el-row>
  <el-row>
    <el-col :span="10" class="col" v-if="show1 === 2" >
      <img :src="feature[2].img" alt="pink" class="changeImg backInLeft"/>
    </el-col>
    <el-col :span="12" :offset="2" class="col" v-if="show1 === 2">
      <FeatureList :feature="feature[2]"/>
    </el-col>
  </el-row>
</div>
</template>

<script>
import { FEATURELIST } from '@/static/feature/feature'
export default {
  data() {
    return {
      show1: 0,
      feature: FEATURELIST,
    };
  },
  // watch: {
  //   // 如果 `question` 发生改变，这个函数就会运行
  //   show1: function () {
  //     console.log(this.show1);
  //   },
  //   show2: function () {
  //     console.log(this.show2);
  //   }
  // },
  mounted() {
    setInterval(() => {
      this.show1 = (this.show1 + 1) % 3;
    }, 4000)
  },
}
</script>

<style scoped>
.changeImg {
  width: 310px;
  height: auto;
}
</style>