<template>
    <transition name="storeIcon">
        <el-col v-if="show" :offset="6" :span="10">
            <img
                :src="require('~/assets/images/getMonster.webp')"
                alt="getMonster"
                class="getMonsterImg"
            />
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

<style lang="scss" scoped>
.getMonsterImg {
    transform: rotate(9.34deg);
    width: 296.52px;
    height: auto;
}
</style>
