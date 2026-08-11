<template>
  <header
    class="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur"
  >
    <div
      class="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:h-20 sm:px-6 lg:px-8"
    >
      <!-- Logo -->
      <a
        href="#home"
        class="flex items-center gap-2 sm:gap-3"
      >
        <div
          class="flex h-10 w-10 items-center justify-center rounded-xl bg-green-600 text-lg text-white sm:h-12 sm:w-12 sm:rounded-2xl sm:text-xl"
        >
          🌱
        </div>

        <div>
          <h1 class="text-base font-extrabold text-slate-800 sm:text-lg">
            اقلیم یار
          </h1>

          <p class="hidden text-[10px] text-slate-500 sm:block">
            سامانه هوشمند کشاورزی
          </p>
        </div>
      </a>

      <!-- Desktop Menu -->
      <nav class="hidden items-center gap-7 lg:flex">
        <a
          href="#home"
          class="text-sm font-medium text-slate-700 transition hover:text-green-600"
        >
          صفحه اصلی
        </a>

        <a
          href="#about"
          class="text-sm font-medium text-slate-700 transition hover:text-green-600"
        >
          درباره ما
        </a>

        <a
          href="#features"
          class="text-sm font-medium text-slate-700 transition hover:text-green-600"
        >
          خدمات
        </a>

        <a
          href="#contact"
          class="text-sm font-medium text-slate-700 transition hover:text-green-600"
        >
          تماس با ما
        </a>
      </nav>

      <!-- Actions -->
      <div class="flex items-center gap-2 sm:gap-3">
        <RouterLink
          to="/login"
          class="hidden rounded-xl bg-green-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-green-700 sm:block"
        >
          ورود
        </RouterLink>

        <button
          type="button"
          class="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 text-xl text-slate-700 lg:hidden"
          @click="menuOpen = !menuOpen"
        >
          ☰
        </button>
      </div>
    </div>

    <!-- Mobile Menu -->
    <div
      v-if="menuOpen"
      class="border-t border-slate-200 bg-white px-4 py-4 lg:hidden"
    >
      <nav class="flex flex-col gap-2">
        <a
          href="#home"
          class="rounded-xl px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-100"
          @click="menuOpen = false"
        >
          صفحه اصلی
        </a>

        <a
          href="#about"
          class="rounded-xl px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-100"
          @click="menuOpen = false"
        >
          درباره ما
        </a>

        <a
          href="#features"
          class="rounded-xl px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-100"
          @click="menuOpen = false"
        >
          خدمات
        </a>

        <a
          href="#contact"
          class="rounded-xl px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-100"
          @click="menuOpen = false"
        >
          تماس با ما
        </a>

        <RouterLink
          to="/login"
          class="mt-2 rounded-xl bg-green-600 px-4 py-3 text-center text-sm font-semibold text-white"
          @click="menuOpen = false"
        >
          ورود به سامانه
        </RouterLink>
      </nav>
    </div>
  </header>
</template>

<script setup>
import { ref } from "vue";
import { RouterLink } from "vue-router";

const menuOpen = ref(false);
</script>