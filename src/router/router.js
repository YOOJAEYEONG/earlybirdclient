import Home from '../views/Home.vue'
import {createRouter, createWebHistory} from "vue-router";


const Page1 = { template : '<div>{{$route.params.name}}home template.</div>'}
const routes = [
    { path: '/', component: Home },
    { path: '/page1/:name', component: Page1 },
    { path: '/profile', component : () => import('../views/profile.vue') },
  ]




export const router = createRouter({
    history: createWebHistory(),
    routes,
});