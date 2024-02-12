import { createRouter, createWebHistory } from "vue-router";
import DashboardLayout from "../views/dashboard/layout.vue";
import Dashboard from "../views/dashboard/dashboard.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: DashboardLayout,
      children: [
        {
          path: "",
          component: Dashboard,
        },
      ],
    },
    {
      path: "/login",
      name: "login",
      component: () => import("../views/public/login.vue"),
    },
  ],
});

export default router;
