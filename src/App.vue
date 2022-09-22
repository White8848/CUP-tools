<script>
import { ref } from 'vue'
export default {
  setup() {
    const active = ref(0);

    return {
      active
    }
  }
}
</script>

<template>
  <van-tabbar class="my_tabbar" fixed v-model="active" active-color="#ee0a24" inactive-color="#000"
    :style="{height:'60px'}">
    <van-tabbar-item to="/" icon="home-o">主页</van-tabbar-item>
    <van-tabbar-item to="/Mod" icon="apps-o">插件</van-tabbar-item>
    <van-tabbar-item to="/settings" icon="setting-o">设置</van-tabbar-item>
  </van-tabbar>
  <router-view></router-view>
</template>

<style scoped>
.my_tabbar {
  background-color: rgba(255, 255, 255, .2);
  backdrop-filter: blur(10px);
  box-shadow: 0 0 5px rgb(129, 129, 129);
}

.van-tabbar-item {
  background-color: rgba(255, 255, 255, .2);
}
</style>
