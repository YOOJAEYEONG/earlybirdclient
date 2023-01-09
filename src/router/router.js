import {createRouter, createWebHistory} from "vue-router";
import ContentsLayout from '@/components/ContentsLayout.vue'

const Page1 = { template : '<div>{{$route.params.name}}home template.</div>'}
const routes = [
    { path: '/', component: ContentsLayout, children : [
        { path : '', component : () => import('@/views/Home.vue')},
      ] 
    },
    { path: '/page1/:name', component: Page1 },
    { path: '/profile', component : () => import('../views/profile.vue') },
  ]




export const router = createRouter({
    history: createWebHistory(),
    routes,
});