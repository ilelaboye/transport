import { createRouter, createWebHistory } from "vue-router";
import DashboardLayout from "@/views/dashboard/layout.vue";
import Dashboard from "@/views/dashboard/dashboard.vue";
import Staff from "@/views/dashboard/staff.vue";
import Schools from "@/views/dashboard/schools.vue";

import Students from "@/views/dashboard/students.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/layout",
      component: DashboardLayout,
      children: [
        {
          path: "/dashboard",
          component: Dashboard,
        },
        {
          path: "/staff",
          component: Staff,
        },
        {
          path: "/schools",
          component: Schools,
        },
        {
          path: "/students",
          component: Students,
        },
      ],
    },

    {
      path: "/login",
      name: "Login",
      component: () => import("@/views/public/login.vue"),
    },
    {
      path: "/",
      name: "Admin",
      component: () => import("@/views/public/adminLogin.vue"),
    },
  ],
});

export default router;
