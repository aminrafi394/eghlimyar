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

    </div>

    <!-- سمت چپ -->
    <div class="flex items-center gap-4">


      <!-- کاربر -->

      <div class="flex items-center gap-3">

        <div class="text-right hidden sm:block">

          <h3 class="font-bold text-slate-700">
          {{ store.username}}
          </h3>
          <p>کاربر اقلیم یار</p>
        </div>
        <router-link to="/dashboard/profile">
          <button>
            <img
              :src="store.profileImage"
              class="w-12 h-12 rounded-full border-2 border-green-100"
            />
          </button>
        </router-link>

      </div>

    </div>
  </header>
</template>

<script setup>
const store = useUserStore()
import { useUserStore } from "@/stores/authStore.js";
import {
  Menu,
} from "lucide-vue-next";
</script>