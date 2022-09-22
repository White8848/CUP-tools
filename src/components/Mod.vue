<script>
import { ref } from 'vue'
export default {
    setup() {
        const count = ref(0);
        const isloading = ref(false);
        const onRefresh = () => {
            setTimeout(() => {
                Toast('刷新成功');
                isloading.value = false;
                count.value++;
            }, 1000);
        };
        const addMod = () => {

        }
        return {
            count,
            isloading,
            onRefresh,
            addMod
        }
    }
}
</script>

<template>
    <van-nav-bar fixed title="插件">
        <template #right>
            <van-icon name="plus" size="26" v-on:click="addMod" />
        </template>
    </van-nav-bar>
    <div class="bar" :style="{height:'47px'}"></div>
    <van-sticky>
        <van-search v-model="value" shape="round" background="#F7D78C" placeholder="请输入搜索关键词" />
    </van-sticky>
    <van-pull-refresh v-model="isLoading" success-text="刷新成功" @refresh="onRefresh" style="min-height: 100vh;">
        <van-space :size="25" direction="vertical" fill>
            <van-cell-group inset>
                <van-cell title="极速请假" value="更快的请假" label="可以一键生成请假信息" />
            </van-cell-group>
            <van-cell-group inset>
                <van-cell title="快捷翻译" value="更便捷的翻译" label="可以翻译选中的文字" />
            </van-cell-group>
            <van-cell-group inset>
                <van-cell title="喝水提醒" value="提醒你喝水" label="可以每天定时提醒你喝水" />
            </van-cell-group>
            <van-cell-group inset>
                <van-cell title="外卖助手" value="显示外卖情况" label="实时显示外卖配送情况" />
            </van-cell-group>
        </van-space>
    </van-pull-refresh>

</template>

<style scoped>
.van-cell-group {
    top: 20px;
    font-size:100px;
    --van-cell-font-size:15px;
    --van-cell-background-color: #f3d698;
    --van-cell-label-color:white;
    --van-cell-value-color:white;
    box-shadow: 0 0 10px rgb(129, 129, 129);
}

.van-nav-bar {
    background-color: rgba(255, 255, 255, .4);
    backdrop-filter: blur(10px);
}
</style>