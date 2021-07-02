<template>
    <div>
        <div class="section purple">
            <el-row type="flex" align="middle">
                <LeftTopBlock />
                <RightTopBlock />
            </el-row>
        </div>
        <MiddleBlock />
        <div class="section blue">
            <BottomBlock :rotate="rotate" />
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            rotate: 0,
        };
    },
    mounted() {
        setInterval(() => {
            this.rotate = (this.rotate + 1) % 3;
        }, 4000);
    },
};
</script>
