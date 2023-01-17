import { createRouter, createWebHistory } from "vue-router";
import ContentsLayout from "@/components/ContentsLayout.vue";

const Page1 = { template: "<div>{{$route.params.name}}home template.</div>" };
const routes = [
  {
    path: "/",
    component: ContentsLayout,
    children: [{ path: "", component: () => import("@/views/MainPage.vue") }],
    meta: { title: "title" },
  },
  { path: "/page1/:name", component: Page1 },
  { path: "/profile", component: () => import("../views/profileMain.vue") },
];

export default createRouter({
  history: createWebHistory(),
  routes,
});
