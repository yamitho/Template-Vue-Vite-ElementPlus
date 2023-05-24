//TODO: faltan las rutas
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/home",
      name: "home",
      component: () => import("@/views/Home.vue"),
      meta: {
        title: "Home",
        icon: "el-icon-house",
      },
    },
    {
      path: "/",
      name: "login",
      component: () => import("@/views/Login.vue"),
      meta: {
        title: "Login",
        icon: "el-icon-house",
      },
    },
  ],
});

export default router;
