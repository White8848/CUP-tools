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
    <van-nav-bar title="健康打卡" left-text="返回" left-arrow @click-left="onClickLeft" />
</template>