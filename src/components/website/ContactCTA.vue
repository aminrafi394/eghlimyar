<template>
  <section class="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">

    <div
      class="overflow-hidden rounded-3xl bg-gradient-to-r from-green-700 to-green-500 px-8 py-16 text-center text-white shadow-2xl md:px-16"
    >

      <span
        class="rounded-full bg-white/20 px-4 py-2 text-sm backdrop-blur"
      >
        🌱 اقلیم یار
      </span>

      <h2 class="mt-6 text-4xl font-extrabold md:text-5xl">
        آماده هوشمندسازی مزرعه خود هستید؟
      </h2>

      <p class="mx-auto mt-6 max-w-2xl text-lg leading-8 text-green-100">
        با اقلیم یار مدیریت مزارع، گزارش‌ها، پیش‌بینی آب‌وهوا و توصیه‌های
        هوشمند را در یک سامانه یکپارچه تجربه کنید.
      </p>

      <div
        class="mt-10 flex flex-col justify-center gap-4 sm:flex-row"
      >

        <RouterLink
          to="/login"
          class="rounded-2xl bg-white px-8 py-4 font-bold text-green-700 transition hover:bg-slate-100"
        >
          ورود به سامانه
        </RouterLink>

        <RouterLink
          to="/contact"
          class="rounded-2xl border border-white px-8 py-4 font-semibold transition hover:bg-white hover:text-green-700"
        >
          تماس با ما
        </RouterLink>

      </div>

    </div>

  </section>
</template>

<script setup>
import { RouterLink } from "vue-router";
</script>