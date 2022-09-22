import { createApp } from 'vue'
import {createRouter,createWebHistory} from 'vue-router'

import App from './App.vue'
import './assets/main.css'

import vant from 'vant'
import 'vant/lib/index.css'

import Home from './components/Home.vue'
import Mod from './components/Mod.vue'
import Settings from './components/Settings.vue'
import Sport from './components/Sport.vue'
import Report from './components/Report.vue'
import Food from './components/Food.vue'


const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: Home },
        { path: '/Mod', component: Mod },
        { path: '/Settings', component: Settings },
        { path: '/Sport', component: Sport },
        { path: '/Report', component: Report },
        { path: '/Food', component: Food },

    ]
})

// createApp(App).use(vant).mount('#app')

createApp(App).use(vant).use(router).mount('#app')

