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
                <span v-if="show">
                    將生活教練概念遊戲化的匿名社群平台 App
                </span>
            </transition>
        </el-row>
        <transition name="storeIcon">
            <el-row v-if="show">
                <el-col :span="8">
                    <AppStoreIcon />
                </el-col>
                <el-col :offset="5" :span="8">
                    <GooglePlayIcon />
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

<style lang="scss" scoped>
h1 {
    @extend %pink;
    font-size: 28px;
    line-height: 30px;
}

.purpleText {
    @extend %purple;
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
