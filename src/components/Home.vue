<script>
export default {
    props: {
        report_but: 0
    }
};
</script>

<template>
    <van-nav-bar title="石大小工具">
        <template #left>
            <van-icon name="user-circle-o" size="28" />
        </template>
    </van-nav-bar>
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
        <van-swipe-item>1</van-swipe-item>
        <van-swipe-item>2</van-swipe-item>
        <van-swipe-item>3</van-swipe-item>
        <van-swipe-item>4</van-swipe-item>
    </van-swipe>
    <div>
        <van-button v-on:click="autoReport" type="primary">自动打卡</van-button>
        <van-button v-on:click="ymq" type="primary">羽毛球场</van-button>
    </div>
    <div>
        <van-button type="primary">默认按钮</van-button>
        <van-button v-on:click="closeAll" type="warning" size="large">关闭所有脚本</van-button>
    </div>

</template>

<style scoped>
.my-swipe .van-swipe-item {
    color: #fff;
    font-size: 0px;
    line-height: 180px;
    text-align: center;
    background-color: #39a9ed;
}
</style>