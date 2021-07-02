<template>
    <div>
        <el-row>
            <el-col v-if="rotate === 0" :span="10" class="col">
                <img
                    :src="feature[0].img"
                    alt="pink"
                    class="changeImg backInLeft"
                />
            </el-col>
            <el-col :span="12" :offset="2" class="col">
                <FeatureList v-if="rotate === 0" :feature="feature[0]" />
            </el-col>
        </el-row>
        <el-row>
            <el-col v-if="rotate === 1" :span="10" class="col">
                <img
                    :src="feature[1].img"
                    alt="pink"
                    class="changeImg backInLeft"
                />
            </el-col>
            <el-col :span="12" :offset="2" class="col">
                <FeatureList v-if="rotate === 1" :feature="feature[1]" />
            </el-col>
        </el-row>
        <el-row>
            <el-col v-if="rotate === 2" :span="10" class="col">
                <img
                    :src="feature[2].img"
                    alt="pink"
                    class="changeImg backInLeft"
                />
            </el-col>
            <el-col v-if="rotate === 2" :span="12" :offset="2" class="col">
                <FeatureList :feature="feature[2]" />
            </el-col>
        </el-row>
    </div>
</template>

<script>
import { FEATURELIST } from "@/static/feature/feature";
export default {
    props: ["rotate"],
    data() {
        return {
            feature: FEATURELIST,
        };
    },
};
</script>

<style lang="scss" scoped>
.changeImg {
    width: 310px;
    height: auto;
}
</style>
