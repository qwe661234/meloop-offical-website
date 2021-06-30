<template>
    <transition name="storeIcon">
    <el-col  :offset="6" :span="10" v-if="show">
        <img src="/images/getMonster.webp" alt="getMonster" class="getMonsterImg">
    </el-col>
    </transition>
</template>

<script>
export default {
  transition: {
    name: ["storeIcon"],
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
.getMonsterImg {
    transform: rotate(9.34deg);
    width: 296.52px;
    height: auto;
}
</style>