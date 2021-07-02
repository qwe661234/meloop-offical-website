<template>
    <div>
        <transition name="pinkText">
            <el-row v-if="show" class="pinkText">
                <span class="bold"> {{ feature.title }} </span> <br />
                <span> {{ feature.subtitle }} </span>
            </el-row>
        </transition>
        <transition name="feature1">
            <el-row v-if="show">
                <Feature
                    :img="require('~/assets/images/feature1.svg')"
                    count="1"
                    :text="feature.featureOneText"
                />
            </el-row>
        </transition>
        <transition name="feature2">
            <el-row v-if="show">
                <Feature
                    :img="require('~/assets/images/feature2.svg')"
                    count="2"
                    :text="feature.featureTwoText"
                />
            </el-row>
        </transition>
        <transition name="feature3">
            <el-row v-if="show">
                <Feature
                    :img="require('~/assets/images/feature3.svg')"
                    count="3"
                    :text="feature.featureThreeText"
                />
            </el-row>
        </transition>
    </div>
</template>

<script>
export default {
    transition: {
        name: ["pinkText", "feature1", "feature2", "feature3"],
    },
    props: ["feature"],
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
.pinkText {
    @extend %pink;
    font-size: 28px;
}

.bold {
    font-weight: bold;
}
</style>
