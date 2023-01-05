//import { createApp, VueElement } from 'vue'
import Vue from 'vue'
import App from './App.vue'

import { router } from './router/index.js'
import './assets/main.css'

//createApp(App).mount('#app')
new Vue({
    router,
    render : h => h(App),
}).$mount('#app')