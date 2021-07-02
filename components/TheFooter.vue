<template>
    <div class="footer">
        <el-col :offset="10" :span="2">
            <el-row class="titleText">聯絡我們</el-row>
            <el-row>
                <FbIcon class="iconImg" />
                <IgIcon class="iconImg" />
            </el-row>
        </el-col>
        <el-col :span="2">
            <el-row class="titleText">條款政策</el-row>
            <el-row class="plainText">
                <nuxt-link to="/useTerm" class="textLink"> 使用條款 </nuxt-link>
            </el-row>
            <el-row class="plainText">
                <nuxt-link to="/privacy" class="textLink"> 隱私政策 </nuxt-link>
            </el-row>
        </el-col>
    </div>
</template>

<style lang="scss" scoped>
.footer {
    text-align: center;
    width: 100%;
    height: 145px;
    background-color: #f4f7fb;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: 0.1em;
}

.el-col {
    padding: 25px 0px;
}

.titleText {
    font-weight: 700;
    margin-bottom: 10px;
}

.plainText {
    margin-bottom: 10px;
}

.textLink {
    text-decoration: none;
    font-weight: 300;
    color: black;
}

.iconImg {
    width: 32px;
    height: 32px;
    filter: grayscale(100%);
}
</style>
