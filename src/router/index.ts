import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/launches",
    alias: ["/future-launches", "/past-launches"],
    name: "Launches",
    component: () =>
      import(/* webpackChunkName: "launches" */ "../views/Launches.vue"),
  },
  {
    path: "/launch/:id",
    name: "Launch",
    component: () =>
      import(/* webpackChunkName: "launch" */ "../views/Launch.vue"),
  },
  {
    path: "/rocket/:id",
    name: "Rocket",
    component: () =>
      import(/* webpackChunkName: "rocket" */ "../views/Rocket.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
