<template>
<el-card>
    <el-row>
        <el-col :span="8">
            <img :src="img" class="advImg"/>
        </el-col>
        <el-col :offset="3" :span="13">
            <el-row>
                <h2 class="titleText"> {{ title }} </h2>
            </el-row>
            <el-row>
                <span class="plainText"> {{ text }} </span>
            </el-row>
            <el-row>
                <span class="pinkText">費用： {{ price }} </span>
            </el-row>
        </el-col>
    </el-row>
</el-card>
</template>

<script>
export default {
  props: ["title", "img", "text", "price"],
};
</script>
<style scoped>

.el-card {
    padding: '20px';
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
    position: absolute;
    top: 45px;
    right: 30px;
    font-family: Roboto;
    font-weight: 700;
    color: #ff7377;
    font-size: 22px;
    line-height: 26px;
}
</style>