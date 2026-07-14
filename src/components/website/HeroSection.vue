<template>
  <section class="mx-auto mt-8 max-w-7xl px-4 sm:px-6 lg:px-8">

    <div
      class="relative overflow-hidden rounded-[32px] min-h-[420px] md:min-h-[600px]"
    >

      <!-- Background Image -->

      <img
        src="https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=1600"
        alt="Smart Farm"
        class="absolute inset-0 h-full w-full object-cover"
      >

      <!-- Overlay -->

      <div class="absolute inset-0 bg-black/50"></div>

      <!-- Content -->

      <div
        class="relative z-10 flex h-full items-center px-8 py-16 md:px-20"
      >

        <div class="max-w-2xl text-white">

          <span
            class="inline-block rounded-full bg-white/20 px-5 py-2 text-sm backdrop-blur"
          >
            🌱 سامانه هوشمند مدیریت کشاورزی
          </span>

          <h1
            class="mt-6 text-4xl font-extrabold leading-tight md:text-6xl"
          >
            آینده کشاورزی
            <br>
            از اینجا آغاز می‌شود
          </h1>

          <p
            class="mt-6 max-w-xl text-base leading-8 text-slate-200 md:text-lg"
          >
            اقلیم یار بستری هوشمند برای مدیریت مزارع، پیش‌بینی آب‌وهوا،
            گزارش‌های تحلیلی و افزایش بهره‌وری کشاورزی است.
          </p>

          <div
            class="mt-10 flex flex-col gap-4 sm:flex-row"
          >

            <RouterLink
              to="/login"
              class="rounded-2xl bg-green-600 px-8 py-4 text-center font-bold text-white transition hover:bg-green-700"
            >
              ورود به سامانه
            </RouterLink>

            <RouterLink
              to="/about"
              class="rounded-2xl border border-white px-8 py-4 text-center font-semibold transition hover:bg-white hover:text-slate-900"
            >
              درباره اقلیم یار
            </RouterLink>

          </div>

        </div>

      </div>

      <!-- Floating Card -->

      <div
        class="absolute bottom-8 left-8 hidden rounded-3xl bg-white/95 p-6 shadow-2xl backdrop-blur lg:block"
      >

        <h3 class="text-3xl font-extrabold text-green-600">
          +500
        </h3>

        <p class="mt-2 font-semibold text-slate-700">
          مزرعه فعال
        </p>

        <span class="mt-1 block text-sm text-slate-500">
          مدیریت شده در سامانه
        </span>

      </div>

    </div>

  </section>
</template>

<script setup>
import { RouterLink } from "vue-router";
</script>