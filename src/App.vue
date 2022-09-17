<script>
export default {
  data() {
    return {
      active: 0,
    }
  }
};
</script>

<template>
  <div background="#ffffff">
    <van-tabbar v-model="active" active-color="#ee0a24" inactive-color="#000">
      <van-tabbar-item to="/" icon="home-o">主页</van-tabbar-item>
      <van-tabbar-item to="/Mod" icon="apps-o">插件</van-tabbar-item>
      <van-tabbar-item to="/settings" icon="setting-o">设置</van-tabbar-item>
    </van-tabbar> 
    <router-view></router-view>
  </div>
</template>

<style scoped>

</style>
