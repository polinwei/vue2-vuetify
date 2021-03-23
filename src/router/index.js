import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  { path: "/", name: "Home", alias:"/home", component: Home },
  { path: "/login", name: "Login", component: () => import("../views/Login.vue") },
  { path: "/about", name: "About", component: () => import(/* webpackChunkName: "about" */ "../views/About.vue") },
  { path: '/learning-*/codepen/:codepen_id', name: 'learning', component: () => import("../views/Learning.vue") }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
