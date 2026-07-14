<template>
  <header
    class="h-20 bg-white border-b border-slate-200 px-8 flex items-center justify-between"
  >
    <!-- سمت راست -->
    <div class="flex items-center gap-4">
      <button
        class="lg:hidden w-11 h-11 rounded-xl border border-slate-200 flex items-center justify-center hover:bg-slate-100 transition"
      >
        <Menu :size="22" />
      </button>

      <div>
        <h1 class="text-2xl font-extrabold text-slate-800">
          داشبورد
        </h1>

        <p class="text-sm text-slate-500 mt-1">
          به پنل مدیریت اقلیم یار خوش آمدید.
        </p>
      </div>
    </div>

    <!-- سمت چپ -->
    <div class="flex items-center gap-4">

      <!-- اعلان -->

      <button
        class="relative w-11 h-11 rounded-xl border border-slate-200 flex items-center justify-center hover:bg-slate-100 transition"
      >

        <Bell :size="20" />

        <span
          class="absolute top-2 right-2 w-2.5 h-2.5 rounded-full bg-red-500"
        ></span>

      </button>

      <!-- کاربر -->

      <div class="flex items-center gap-3">

        <div class="text-right hidden sm:block">

          <h3 class="font-bold text-slate-700">
            مرتضی اشرف
          </h3>

          <p class="text-xs text-slate-500">
            مدیر سیستم
          </p>

        </div>

        <img
          src="https://i.pravatar.cc/150"
          class="w-12 h-12 rounded-full border-2 border-green-100"
        />

      </div>

    </div>
  </header>
</template>

<script setup>
import {
  Bell,
  Menu,
} from "lucide-vue-next";
</script>