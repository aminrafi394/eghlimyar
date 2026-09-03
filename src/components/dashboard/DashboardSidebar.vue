<template>
  <aside
    class="hidden lg:flex flex-col w-72 bg-white border-l border-slate-200 h-screen sticky top-0"
  >

    <!-- اطلاعات کاربر -->

    <div class="px-6 py-6 border-b border-slate-200">
      <div class="flex flex-col items-center">
        <img
          :src="store.profileImage"
          class="w-40 h-40 rounded-full object-cover border-4 border-green-600"
        />

        <h3 class="mt-4 font-bold text-slate-800">
          {{ store.username }}
        </h3>
        <p>
          {{ store.phoneNumber }}
        </p>
      </div>
    </div>

    <!-- منو -->

    <div class="flex-1 px-4 py-6 space-y-2">
      <SidebarItem
        title="داشبورد"
        to="/dashboard"
        :icon="LayoutDashboard"
        :active="route.path === '/dashboard'"
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
      <router-link to="/">
        <button class="w-full bg-red-500 hover:bg-red-600 text-white rounded-xl py-3 transition">
          خروج از حساب
        </button>
      </router-link>
    </div>
  </aside>
</template>

<script setup>
import SidebarItem from './SidebarItem.vue'
import { useRoute } from 'vue-router'

import {
  LayoutDashboard,
  Trees,
  CloudSun,
  FileText,
  CreditCard,
  User,
  Lightbulb,
} from 'lucide-vue-next'
import { useUserStore } from '@/stores/authStore.js'
const route = useRoute()
const store = useUserStore()
</script>
