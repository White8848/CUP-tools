<script>
export default {
    props: {
        report_but: 0
    },
    data() {
        return {
            show: false,
        }
    },
};
</script>

<template>
    <van-nav-bar title="石大小工具">
        <template #left>
            <van-icon name="user-circle-o" size="28" v-on:click="show=!show" />
        </template>
    </van-nav-bar>

    <van-popup v-model:show="show" position="left" :style="{ height: '30%' }" />

    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
        <van-swipe-item>1</van-swipe-item>
        <van-swipe-item>2</van-swipe-item>
        <van-swipe-item>3</van-swipe-item>
        <van-swipe-item>4</van-swipe-item>
    </van-swipe>
    <van-grid direction="horizontal" :column-num="2" :gutter="15" clickable square color="#ffffff">
        <van-grid-item text="自动打卡" />
        <van-grid-item text="文字" />
        <van-grid-item text="文字" />
    </van-grid>
</template>

<style scoped>
.my-swipe .van-swipe-item {
    color: #fff;
    font-size: 0px;
    line-height: 200px;
    text-align: center;
    background-color: #39a9ed;
}

.van-grid .van-grid-item {
    top: 15px;
    --van-grid-item-text-font-size: 25px;
    --van-grid-item-content-active-color: rgba(114, 210, 255, 0.297);

}
</style>
