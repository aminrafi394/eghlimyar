<template>
  <aside
    class="hidden lg:flex flex-col w-72 bg-white border-l border-slate-200 h-screen sticky top-0"
  >
    <!-- لوگو -->
    <div
      class="h-20 flex items-center justify-center border-b border-slate-200"
    >
      <div class="flex items-center gap-3">

        <div
          class="w-12 h-12 rounded-2xl bg-green-600 flex items-center justify-center text-white text-xl"
        >
          🌱
        </div>

        <div class="text-right">
          <h2 class="font-extrabold text-slate-800">
            اقلیم یار
          </h2>

          <p class="text-xs text-slate-500">
            پنل مدیریت
          </p>
        </div>

      </div>
    </div>

    <!-- اطلاعات کاربر -->

    <div class="px-6 py-6 border-b border-slate-200">

      <div class="flex flex-col items-center">

        <img
          src="https://i.pravatar.cc/120"
          class="w-20 h-20 rounded-full border-4 border-green-100"
        />

        <h3 class="mt-4 font-bold text-slate-800">
          مرتضی اشرف
        </h3>

        <span class="text-sm text-slate-500">
          مدیر سیستم
        </span>

      </div>

    </div>

    <!-- منو -->

    <div class="flex-1 px-4 py-6 space-y-2">

      <SidebarItem
        title="داشبورد"
        to="/dashboard"
        :icon="LayoutDashboard"
        :active="route.path==='/dashboard'"
      />

      <SidebarItem
        title="مزارع"
        to="/dashboard/farms"
        :icon="Trees"
        :active="route.path.includes('/farms')"
      />

      <SidebarItem
        title="آب و هوا"
        to="/dashboard/weather"
        :icon="CloudSun"
        :active="route.path.includes('/weather')"
      />

      <SidebarItem
        title="توصیه ها"
        to="/dashboard/recommendations"
        :icon="Lightbulb"
        :active="route.path.includes('/recommendations')"
      />

      <SidebarItem
        title="گزارش ها"
        to="/dashboard/reports"
        :icon="FileText"
        :active="route.path.includes('/reports')"
      />

      <SidebarItem
        title="پرداخت ها"
        to="/dashboard/payments"
        :icon="CreditCard"
        :active="route.path.includes('/payments')"
      />

      <SidebarItem
        title="پروفایل"
        to="/dashboard/profile"
        :icon="User"
        :active="route.path.includes('/profile')"
      />

    </div>

    <!-- خروج -->

    <div class="p-5 border-t border-slate-200">

      <button
        class="w-full bg-red-500 hover:bg-red-600 text-white rounded-xl py-3 transition"
      >
        خروج از حساب
      </button>

    </div>

  </aside>
</template>

<script setup>
import SidebarItem from "./SidebarItem.vue";
import { useRoute } from "vue-router";

import {
  LayoutDashboard,
  Trees,
  CloudSun,
  FileText,
  CreditCard,
  User,
  Lightbulb,
} from "lucide-vue-next";

const route = useRoute();
</script>