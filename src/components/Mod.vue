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
        const addMod = ()=>{

        }
        return{
            count,
            isloading,
            onRefresh,
            addMod
        }
    }
}
</script>

<template>
    <van-nav-bar title="插件">
        <template #right>
            <van-icon name="plus" size="26" v-on:click="addMod"/>
        </template>
    </van-nav-bar>
    <van-search v-model="value" shape="round" background="#4fc08d" placeholder="请输入搜索关键词" />
    <van-pull-refresh v-model="isLoading" success-text="刷新成功" @refresh="onRefresh" style="min-height: 80vh;">
        <van-cell-group inset>
            <van-cell title="单元格" value="内容" />
            <van-cell title="单元格" value="内容" label="描述信息" />
        </van-cell-group>
    </van-pull-refresh>

</template>

<style scoped>
.van-cell-group{
    top:15px;
}
</style>