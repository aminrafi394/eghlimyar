<template>
  <header class="sticky top-0 z-50 border-b border-slate-200/70 bg-white/90 backdrop-blur-xl">
    <div class="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
      <!-- Logo -->
      <a href="#home" class="flex items-center gap-3">
        <div
          class="flex h-11 w-11 items-center justify-center rounded-2xl bg-green-600 text-white shadow-sm"
        >
          <Sprout :size="23" :stroke-width="2" />
        </div>

        <div>
          <h1 class="text-lg font-black tracking-tight text-slate-900">اقلیم‌یار</h1>

          <p class="text-[10px] font-medium text-slate-400">سامانه هوشمند کشاورزی</p>
        </div>
      </a>

      <!-- Desktop Navigation -->
      <nav class="hidden items-center gap-8 lg:flex">
        <a
          href="#home"
          class="text-sm font-semibold text-slate-800 transition hover:text-green-600"
        >
          صفحه اصلی
        </a>

        <a
          href="#features"
          class="text-sm font-medium text-slate-500 transition hover:text-green-600"
        >
          امکانات
        </a>

        <a href="#about" class="text-sm font-medium text-slate-500 transition hover:text-green-600">
          درباره ما
        </a>
        <a
          href="#footer"
          class="text-sm font-medium text-slate-500 transition hover:text-green-600"
        >
          ارتباط با اقلیم یار
        </a>
      </nav>

      <!-- Actions -->
      <div class="flex items-center gap-3">
        <RouterLink
          to="/login"
          class="hidden px-3 py-2 text-sm font-semibold text-slate-700 transition hover:text-green-600 sm:block"
        >
          ورود
        </RouterLink>

        <RouterLink
          to="/signup"
          class="hidden rounded-xl bg-green-600 px-5 py-2.5 text-sm font-bold text-white shadow-sm transition hover:bg-green-700 hover:shadow-md sm:block"
        >
          شروع کار
        </RouterLink>

        <!-- Mobile Menu Button -->
        <button
          type="button"
          class="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-700 transition hover:border-green-200 hover:bg-green-50 hover:text-green-600 lg:hidden"
          @click="menuOpen = !menuOpen"
          :aria-label="menuOpen ? 'بستن منو' : 'باز کردن منو'"
          :aria-expanded="menuOpen"
        >
          <X v-if="menuOpen" :size="21" />
          <Menu v-else :size="21" />
        </button>
      </div>
    </div>

    <!-- Mobile Menu -->
    <div v-if="menuOpen" class="border-t border-slate-200 bg-white px-4 py-4 lg:hidden">
      <nav class="flex flex-col gap-1">
        <a
          href="#home"
          class="rounded-xl px-4 py-3 text-sm font-semibold text-slate-700 transition hover:bg-green-50 hover:text-green-600"
          @click="menuOpen = false"
        >
          صفحه اصلی
        </a>

        <a
          href="#features"
          class="rounded-xl px-4 py-3 text-sm font-medium text-slate-600 transition hover:bg-green-50 hover:text-green-600"
          @click="menuOpen = false"
        >
          امکانات
        </a>

        <a
          href="#about"
          class="rounded-xl px-4 py-3 text-sm font-medium text-slate-600 transition hover:bg-green-50 hover:text-green-600"
          @click="menuOpen = false"
        >
          درباره ما
        </a>
        <a
          href="#footer"
          class="rounded-xl px-4 py-3 text-sm font-medium text-slate-600 transition hover:bg-green-50 hover:text-green-600"
          @click="menuOpen = false"
        >
        ارتباط با اقلیم یار
        </a>

        <div class="my-2 border-t border-slate-100"></div>

        <RouterLink
          to="/login"
          class="rounded-xl px-4 py-3 text-center text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
          @click="menuOpen = false"
        >
          ورود
        </RouterLink>

        <RouterLink
          to="/signup"
          class="mt-1 rounded-xl bg-green-600 px-4 py-3 text-center text-sm font-bold text-white transition hover:bg-green-700"
          @click="menuOpen = false"
        >
          شروع کار با اقلیم‌یار
        </RouterLink>
      </nav>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import { Sprout, Menu, X } from 'lucide-vue-next'

const menuOpen = ref(false)
</script>
