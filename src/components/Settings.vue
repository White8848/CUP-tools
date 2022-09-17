<script>
export default {
    data() {
        return {
            checked: true
        }
    }
};
</script>

<template>
    <van-nav-bar title="设置" />

    <div>
        <van-cell center title="标题">
            <template #right-icon>
                <van-switch v-model="checked" size="24" />
            </template>
        </van-cell>
    </div>
</template>