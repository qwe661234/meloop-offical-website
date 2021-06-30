<template>
<transition name="storeIcon">
    <div v-if="show">
      <img :src="require('~/assets/images/pinkMonster.svg')" alt="pinkMonster" class="pink">
    </div>
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
.pink {
    padding: 0px 260px 0px;
    margin-top: -10%;
    width: 444px;
    height: 415px;
}
</style>