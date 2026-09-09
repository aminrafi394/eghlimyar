<template>
  <header
    class="sticky top-0 z-30 h-20 bg-white border-b border-slate-200 px-4 sm:px-6 lg:px-8 flex items-center justify-between"
  >

    <!-- سمت راست -->
    <div class="flex items-center gap-4">

      <!-- دکمه منوی موبایل -->
      <button
        type="button"
        class="lg:hidden w-11 h-11 rounded-xl border border-slate-200 bg-white flex items-center justify-center hover:bg-slate-100 transition"
        @click="$emit('toggle-menu')"
        aria-label="باز کردن منو"
      >
        <Menu :size="22" />
      </button>

    </div>


    <!-- سمت چپ -->
    <div class="flex items-center gap-4">

      <!-- کاربر -->
      <div class="flex items-center gap-3">

        <!-- نام کاربر -->
        <div class="text-right hidden sm:block">

          <h3 class="font-bold text-slate-700">
            {{ store.username }}
          </h3>

          <p class="text-sm text-slate-400">
            کاربر اقلیم یار
          </p>

        </div>


        <!-- عکس پروفایل -->
        <router-link to="/dashboard/profile">

          <button
            type="button"
            aria-label="پروفایل کاربر"
          >

            <img
              :src="store.profileImage"
              alt="تصویر پروفایل"
              class="w-12 h-12 rounded-full border-2 border-green-100 object-cover"
            />

          </button>

        </router-link>

      </div>

    </div>

  </header>
</template>


<script setup>
import { useUserStore } from "@/stores/authStore.js";

import {
  Menu,
} from "lucide-vue-next";


defineEmits(["toggle-menu"]);


const store = useUserStore();
</script>