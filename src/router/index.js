import { createRouter, createWebHistory } from "vue-router";


// Website
import MainLayout from "@/layouts/MainLayout.vue";
import HomeView from "@/views/website/HomeView.vue";


// Auth
import LoginView from "@/views/auth/LoginView.vue";
import SignupView from "@/views/auth/SignupView.vue";
import SignupOtpView from "@/views/auth/SignupOtpView.vue";
import ForgotPasswordView from "@/views/auth/ForgotPasswordView.vue";
import ForgotPasswordOtpView from "@/views/auth/ForgotPasswordOtpView.vue";
import ResetPasswordView from "@/views/auth/ResetPasswordView.vue";


// Dashboard
import DashboardLayout from "@/layouts/DashboardLayout.vue";
import DashboardView from "@/views/dashboard/DashboardView.vue";

import ProfileView from "@/views/dashboard/ProfileView.vue";

import FarmListView from "@/views/dashboard/FarmListView.vue";
import FarmDetailView from "@/views/dashboard/FarmDetailView.vue";
import AddFarmView from "@/views/dashboard/AddFarmView.vue";
import EditFarmView from "@/views/dashboard/EditFarmView.vue";

import WeatherView from "@/views/dashboard/WeatherView.vue";

import RecommendationView from "@/views/dashboard/RecommendationView.vue";

import ReportView from "@/views/dashboard/ReportView.vue";
import ReportDetailView from "@/views/dashboard/ReportDetailView.vue";
import AddReportView from "@/views/dashboard/AddReportView.vue";

import PaymentListView from "@/views/dashboard/PaymentListView.vue";
import PaymentView from "@/views/dashboard/PaymentView.vue";



const routes = [

  // =====================
  // Website
  // =====================

  {
    path: "/",
    component: MainLayout,
    children: [

      {
        path: "",
        name: "home",
        component: HomeView,
      },

    ],
  },


  // =====================
  // Auth
  // =====================

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
    path: "/signup/otp",
    name: "signup-otp",
    component: SignupOtpView,
  },


  {
    path: "/forgot-password",
    name: "forgot-password",
    component: ForgotPasswordView,
  },


  {
    path: "/forgot-password/otp",
    name: "forgot-password-otp",
    component: ForgotPasswordOtpView,
  },


  {
    path: "/forgot-password/reset",
    name: "reset-password",
    component: ResetPasswordView,
  },



  // =====================
  // Dashboard
  // =====================

  {
    path: "/dashboard",
    component: DashboardLayout,

    children: [

      {
        path: "",
        name: "dashboard",
        component: DashboardView,
      },


      // Profile

      {
        path: "profile",
        name: "profile",
        component: ProfileView,
      },


      // Farms

      {
        path: "farms",
        name: "farms",
        component: FarmListView,
      },


      {
        path: "farms/:id",
        name: "farm-detail",
        component: FarmDetailView,
      },


      {
        path: "add-farm",
        name: "add-farm",
        component: AddFarmView,
      },


      {
        path: "edit-farm/:id",
        name: "edit-farm",
        component: EditFarmView,
      },



      // Weather

      {
        path: "weather",
        name: "weather",
        component: WeatherView,
      },



      // Recommendations

      {
        path: "recommendations",
        name: "recommendations",
        component: RecommendationView,
      },



      // Reports

      {
        path: "reports",
        name: "reports",
        component: ReportView,
      },


      {
        path: "reports/:id",
        name: "report-detail",
        component: ReportDetailView,
      },


      {
        path: "add-report",
        name: "add-report",
        component: AddReportView,
      },



      // Payments

      {
        path: "payments",
        name: "payments",
        component: PaymentListView,
      },


      {
        path: "payment",
        name: "payment",
        component: PaymentView,
      },


    ],
  },



  // =====================
  // 404
  // =====================

  {
    path: "/:pathMatch(.*)*",
    redirect: "/",
  },


];



const router = createRouter({

  history: createWebHistory(),

  routes,

});

router.beforeEach((to, from, next) => {

  const isLoggedIn = localStorage.getItem("isLoggedIn")


  const protectedRoutes = [
    "/dashboard"
  ]


  const requiresAuth = protectedRoutes.some(path =>
    to.path.startsWith(path)
  )


  if (requiresAuth && !isLoggedIn) {

    next("/login")

  } 
  else {

    next()

  }

})
export default router;