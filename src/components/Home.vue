<script>
import { ref } from 'vue'
export default {
    setup() {
        const images = [
            'https://www.cup.edu.cn/culture/images/2020-09/3fc895259eb144368baf08a68e7aacb9.jpg',
            'https://www.cup.edu.cn/culture/images/2020-09/5a6a3246fedd4ebd9e71a10c890986a8.jpg',
            'https://www.cup.edu.cn/culture/images/2020-09/d4204e7e1acd40ebaee9cf5debe380fd.jpg',
        ];
        const show = ref(false)
        const checked1 = ref(false)
        const checked2 = ref(false)
        const checked3 = ref(false)
        const checked4 = ref(false)
        return {
            images,
            show,
            checked1,
            checked2,
            checked3,
            checked4
        }
    }
}


</script>

<template>
    <van-nav-bar fixed title="石大小工具">
        <template #left>
            <van-icon name="more-o" size="26" v-on:click="show=!show" />
        </template>
    </van-nav-bar>
    <div class="bar" :style="{height:'47px'}"></div>
    <van-popup class="home_popup" v-model:show="show" position="left" :style="{width: '70%',height:'100%'}">
        <van-image width="100%" height="30%"
            src="https://picx.zhimg.com/v2-896450e686794a4e118e444f64aaeeaf_1440w.jpg?source=172ae18b" />
        <van-cell center title="开启无障碍模式">
            <template #right-icon>
                <van-switch v-model="checked1" size="24" />
            </template>
        </van-cell>
        <van-cell center title="运行完自动关闭">
            <template #right-icon>
                <van-switch v-model="checked2" size="24" />
            </template>
        </van-cell>
        <van-cell center title="后台运行">
            <template #right-icon>
                <van-switch v-model="checked3" size="24" />
            </template>
        </van-cell>
        <van-cell center title="调试模式">
            <template #right-icon>
                <van-switch v-model="checked4" size="24" />
            </template>
        </van-cell>
    </van-popup>

    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white" :height="200">
        <van-swipe-item v-for="image in images" :key="image">
            <van-image fill :src="image" height="110%" />
        </van-swipe-item>
    </van-swipe>
    <van-grid direction="horizontal" :column-num="2" :border="false" :gutter="15" clickable square>
        <van-grid-item to='/Report' text="健康打卡" />
        <van-grid-item to='/Sport' text="场馆预约" />
        <van-grid-item to='/Sport' text="美食地图" />
        <van-grid-item text="开发中..." />
        <!-- <van-grid-item text="关闭脚本" /> -->
    </van-grid>
</template>

<style scoped>
.my-swipe .van-swipe-item {
    color: #fff;
    font-size: 0px;
    text-align: center;
    background-color: rgba(187, 229, 249, 0.297);
}

.van-grid{
    top: 15px;
    --van-grid-item-text-font-size: 25px;
    --van-grid-item-text-color: black;
    --van-grid-item-content-active-color: linear-gradient(to right bottom, #eebd89, #d13abd);
    --van-grid-item-content-background-color: linear-gradient(to right bottom, #eebd89, #d13abd);
}
.van-grid-item{
    border-radius:20px;
}

.van-nav-bar {
    background-color: rgba(255, 255, 255, .4);
    backdrop-filter: blur(10px);
}
</style>
