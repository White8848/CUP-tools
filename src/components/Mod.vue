<script>
export default {
    data() {
        return {
            value: ''
        }
    }
};
</script>

<template>
    <van-nav-bar title="插件" />
    <van-search v-model="value" shape="round" background="#4fc08d" placeholder="请输入搜索关键词" />
    <van-pull-refresh v-model="isLoading" success-text="刷新成功" @refresh="onRefresh" style="min-height: 80vh;">
        <p>刷新次数: {{ count }}</p>
        <van-cell-group inset>
            <van-cell title="单元格" value="内容" />
            <van-cell title="单元格" value="内容" label="描述信息" />
        </van-cell-group>
    </van-pull-refresh>

</template>