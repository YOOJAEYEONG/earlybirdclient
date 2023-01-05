import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'


const Home2 = { template : '<div>home template.</div>'}
const routes = [
    { path: '/home', component: Home },
    { path: '/home2', component: Home2 },
    { path: '/go1', component : () => import('../views/go1.vue') },
    // { path: '/about', component: About },
  ]

export const router = VueRouter.createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: VueRouter.createWebHashHistory(),
    routes, // short for `routes: routes`
});

// const app = Vue.createApp({});
// app.use(router)
// app.mount('#app')

