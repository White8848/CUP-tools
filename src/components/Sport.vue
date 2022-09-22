<script>
import { ref } from 'vue'
export default {
    setup() {
        const onClickLeft = () => history.back();
        return {
            onClickLeft,
        };
    }

}
</script>
    
<template>
    <van-nav-bar title="场馆预约" left-text="返回" left-arrow @click-left="onClickLeft" />
    <van-image width="100%" height="250" src="https://www.cup.edu.cn/tiyubu/images/gb20191224/img02.jpg" />

</template>