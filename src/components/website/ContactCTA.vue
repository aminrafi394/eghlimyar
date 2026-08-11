<template>
  <section
    class="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-24"
  >
    <div
      class="relative overflow-hidden rounded-3xl bg-green-600 px-6 py-14 text-center shadow-2xl sm:px-12 sm:py-16"
    >
      <div
        class="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-white/10 sm:h-64 sm:w-64"
      ></div>

      <div
        class="absolute -bottom-24 -left-16 h-64 w-64 rounded-full bg-white/10 sm:h-72 sm:w-72"
      ></div>

      <div class="relative z-10 mx-auto max-w-3xl">
        <span
          class="inline-block rounded-full bg-white/15 px-4 py-2 text-xs font-semibold text-white sm:text-sm"
        >
          🌱 اقلیم یار
        </span>

        <h2
          class="mt-5 text-3xl font-extrabold leading-[1.5] text-white sm:mt-6 sm:text-4xl lg:text-5xl"
        >
          آماده هوشمندسازی
          <br class="hidden sm:block" />
          مزرعه خود هستید؟
        </h2>

        <p
          class="mx-auto mt-5 max-w-2xl text-sm leading-7 text-green-50 sm:mt-6 sm:text-base sm:leading-8 lg:text-lg"
        >
          با اقلیم یار مدیریت مزرعه خود را ساده‌تر کنید و با استفاده
          از اطلاعات و تحلیل‌های کاربردی، تصمیم‌های بهتری بگیرید.
        </p>

        <div
          class="mt-8 flex flex-col justify-center gap-3 sm:mt-10 sm:flex-row"
        >
          <RouterLink
            to="/login"
            class="rounded-2xl bg-white px-7 py-3.5 text-sm font-bold text-green-700 transition hover:bg-slate-100 sm:px-8 sm:py-4 sm:text-base"
          >
            ورود به سامانه
          </RouterLink>

          <a
            href="#contact"
            class="rounded-2xl border border-white px-7 py-3.5 text-sm font-bold text-white transition hover:bg-white hover:text-green-700 sm:px-8 sm:py-4 sm:text-base"
          >
            تماس با ما
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { RouterLink } from "vue-router";
</script>