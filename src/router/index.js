import { createRouter, createWebHistory } from "vue-router";

// Auth
import LoginView from "@/views/auth/LoginView.vue";
import SignupView from "@/views/auth/SignupView.vue";

// Layout
import DashboardLayout from "@/layouts/DashboardLayout.vue";

// Dashboard Pages
import DashboardView from "@/views/dashboard/DashboardView.vue";

const routes = [
  {
    path: "/",
    redirect: "/login",
  },

  {
    path: "/login",
    name: "login",
    component: LoginView,
  },

  {
    path: "/signup",
    name: "signup",
    component: SignupView,
  },

  {
    path: "/dashboard",
    component: DashboardLayout,

    children: [
      {
        path: "",
        name: "dashboard",
        component: DashboardView,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
