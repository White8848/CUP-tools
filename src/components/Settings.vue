<script>
import { ref } from 'vue'
export default {
    setup() {
        const checked = ref(false)
        const value = ref(0)
        const show = ref(false)
        const currentTime = ref('12:00')
        return {
            checked,
            value,
            show,
            currentTime
        }
    }
}
</script>

<template>
    <van-nav-bar title="设置" />
    <van-cell center title="开启自定义设置">
        <template #right-icon>
            <van-switch v-model="checked" size="24" />
        </template>
    </van-cell>
    <van-cell center title="循环天数">
        <van-stepper v-model="value" integer />
    </van-cell>
    <van-cell center title="当前剩余循环"></van-cell>
    <van-cell title="执行时间" is-link @click="show=true">
        <template #value>
            {{currentTime}}
        </template>
    </van-cell>
    <van-popup v-model:show="show" position="bottom" :style="{ height: '50%' }">
        <van-datetime-picker v-model="currentTime" type="time" title="选择时间" @confirm="show=false" :min-hour="0" :max-hour="23" />
    </van-popup>


</template>