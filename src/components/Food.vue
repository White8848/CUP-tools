<script>
import { ref } from 'vue'
export default {
    setup() {
        const onClickLeft = () => history.back();
        const active = ref(0);
        // initMap = () => {
        //     //设置地图中心点
        //     let center = new TMap.LatLng(39.984104, 116.307503);
        //     // 初始化地图
        //     this.map = new TMap.Map('container', {
        //         zoom: 15,
        //         center: center,
        //         // baseMap: {  // 设置卫星地图
        //         //   type: 'satellite'
        //         // }
        //     });
        // }
        return {
            onClickLeft,
            active,
            // initMap,
        };
    }
}

</script>
    
<template>
    <van-nav-bar title="美食地图" left-text="返回" left-arrow @click-left="onClickLeft" />
    <van-image width="100%" height="250"
        src="https://www.cup.edu.cn/images/2020-11/756f76eccbbd47949c88004ec131a967.png" />
    <van-sidebar v-model="active">
        <van-sidebar-item title="火锅" />
        <van-sidebar-item title="烧烤" />
        <van-sidebar-item title="炒菜" />
        <van-sidebar-item title="面条" />
        <van-sidebar-item title="快餐" />
    </van-sidebar>
    <!-- <body onload="initMap">
        <div id="container"></div>
    </body> -->
</template>

<style scoped>

</style>