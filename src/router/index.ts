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
      name: "Login",
      component: () => import("@/views/public/login.vue"),
    },
    {
      path: "/signup",
      name: "Signup",
      component: () => import("@/views/public/signup.vue"),
    },
  ],
});

export default router;
