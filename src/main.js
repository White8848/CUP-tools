import { createApp } from 'vue'
import {createRouter,createWebHistory} from 'vue-router'

import App from './App.vue'
import './assets/main.css'

import vant from 'vant'
import 'vant/lib/index.css'

import Home from './components/Home.vue'
import Mod from './components/Mod.vue'
import Settings from './components/Settings.vue'


const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: Home },
        { path: '/Mod', component: Mod },
        { path: '/Settings', component: Settings },
    ]
})

// createApp(App).use(vant).mount('#app')

createApp(App).use(vant).use(router).mount('#app')

