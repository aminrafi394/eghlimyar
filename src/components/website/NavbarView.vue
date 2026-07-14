<template>
  <header class="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-slate-200">
    <div class="mx-auto flex h-20 max-w-7xl items-center justify-between px-4">
      <!-- Logo -->
      <RouterLink to="/" class="flex items-center gap-3">
        <div
          class="flex h-12 w-12 items-center justify-center rounded-2xl bg-green-600 text-2xl text-white"
        >
          🌱
        </div>

        <div>
          <h2 class="text-xl font-extrabold text-slate-800">اقلیم یار</h2>
        </div>
      </RouterLink>

      <!-- Desktop Menu -->
      <nav class="hidden items-center gap-8 xl:flex">
        <RouterLink to="/" class="font-medium text-slate-700 transition hover:text-green-600">
          صفحه اصلی
        </RouterLink>

        <RouterLink to="/about" class="font-medium text-slate-700 transition hover:text-green-600">
          درباره ما
        </RouterLink>

        <RouterLink
          to="/contact"
          class="font-medium text-slate-700 transition hover:text-green-600"
        >
          تماس با ما
        </RouterLink>
      </nav>

      <!-- Actions -->
      <div class="flex items-center gap-3">
        <RouterLink
          to="/login"
          class="hidden rounded-xl bg-green-600 px-5 py-3 md:block text-sm font-semibold text-white transition hover:bg-green-700"
        >
          ورود به پنل
        </RouterLink>
      </div>
      <button class="rounded-xl border p-3 md:hidden">☰</button>
    </div>
  </header>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>
