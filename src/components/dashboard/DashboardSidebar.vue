<template>
  <aside
    class="hidden lg:flex w-[260px] bg-white border-l border-slate-200 flex-col h-screen sticky top-0"
  >
    <!-- لوگو -->
    <div class="h-20 border-b border-slate-200 flex items-center justify-center">
      <div class="flex items-center gap-3">

        <div
          class="w-12 h-12 rounded-2xl bg-green-600 text-white flex items-center justify-center text-xl font-bold"
        >
          🌱
        </div>

        <div class="text-right">
          <h2 class="font-bold text-slate-800">
            اسمارت فارم
          </h2>

          <p class="text-sm text-slate-500">
            پنل مدیریت
          </p>
        </div>

      </div>
    </div>

    <!-- منو -->
    <nav class="flex-1 px-4 py-6 space-y-2">

      <RouterLink
        v-for="item in menuItems"
        :key="item.title"
        :to="item.path"
        class="flex flex-row-reverse items-center justify-between rounded-xl px-4 py-3 transition-all duration-300"
        :class="
          route.path === item.path
            ? 'bg-green-600 text-white shadow'
            : 'text-slate-700 hover:bg-slate-100'
        "
      >

        <component
          :is="item.icon"
          :size="20"
        />

        <span class="font-medium">
          {{ item.title }}
        </span>

      </RouterLink>

    </nav>

    <!-- پایین -->
    <div class="border-t border-slate-200 p-4">

      <button
        class="w-full rounded-xl bg-red-500 hover:bg-red-600 transition text-white py-3"
      >
        خروج از حساب
      </button>

    </div>
  </aside>
</template>

<script setup>
import { RouterLink, useRoute } from "vue-router";

import {
  LayoutDashboard,
  Trees,
  CloudSun,
  FileText,
  CreditCard,
  User,
  LogOut,
} from "lucide-vue-next";

const route = useRoute();

const menuItems = [
  {
    title: "داشبورد",
    path: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "مزارع",
    path: "/farms",
    icon: Trees,
  },
  {
    title: "آب و هوا",
    path: "/weather",
    icon: CloudSun,
  },
  {
    title: "گزارش‌ها",
    path: "/reports",
    icon: FileText,
  },
  {
    title: "پرداخت‌ها",
    path: "/payments",
    icon: CreditCard,
  },
  {
    title: "پروفایل",
    path: "/profile",
    icon: User,
  },
];
</script>