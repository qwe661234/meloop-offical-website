<template>
    <el-card class="advCard">
        <el-row>
            <el-col :span="8">
                <img :src="advertise.img" class="advImg" />
            </el-col>
            <el-col :offset="3" :span="13">
                <el-row>
                    <h2 class="titleText">{{ advertise.title }}</h2>
                </el-row>
                <el-row>
                    <span class="plainText"> {{ advertise.text }} </span>
                </el-row>
                <el-row>
                    <span class="pinkText">費用： {{ advertise.price }} </span>
                </el-row>
            </el-col>
        </el-row>
    </el-card>
</template>

<script>
export default {
    props: ["advertise"],
};
</script>
<style lang="scss" scoped>
.el-card {
    padding: "20px";
    border-radius: 20px;
}

.advImg {
    width: 337px;
    height: 200px;
}

.titleText {
    font-family: Roboto;
    font-weight: 700;
    font-size: 20px;
    color: #353b55;
}

.plainText {
    font-family: Noto Sans TC;
    font-weight: 400;
    text-align: left;
    color: #353b55;
    font-size: 18px;
    line-height: 28px;
}

.pinkText {
    @extend %pink;
    position: absolute;
    top: 45px;
    right: 30px;
    font-family: Roboto;
    font-weight: 700;
    font-size: 22px;
    line-height: 26px;
}

.advCard {
    padding: 32px 24px;
    margin-bottom: 32px;
    margin-top: 50px;
}
</style>
