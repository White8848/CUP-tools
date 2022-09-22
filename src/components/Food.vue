<script>
import { ref } from 'vue'
export default {
    setup() {
        const onClickLeft = () => history.back();
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
            // initMap,
        };
    }
}

</script>
    
<template>
    <van-nav-bar title="美食地图" left-text="返回" left-arrow @click-left="onClickLeft" />

    <!-- <body onload="initMap">
        <div id="container"></div>
    </body> -->
</template>

<style scoped>

</style>