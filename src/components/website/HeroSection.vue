<template>
  <section class="mx-auto mt-4 px-4 sm:mt-6 sm:px-6 lg:mt-8 lg:px-8">
    <div
      class="relative mx-auto min-h-[500px] max-w-7xl overflow-hidden rounded-3xl sm:min-h-[560px] lg:min-h-[620px]"
    >
      <img
        src="https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=1600"
        alt="کشاورزی هوشمند"
        class="absolute inset-0 h-full w-full object-cover"
      />

      <div class="absolute inset-0 bg-black/50"></div>

      <div
        class="relative z-10 flex min-h-[500px] items-center px-6 py-16 sm:min-h-[560px] sm:px-10 md:px-14 lg:min-h-[620px] lg:px-20"
      >
        <div class="max-w-2xl text-white">
          <span
            class="inline-block rounded-full bg-white/20 px-4 py-2 text-xs font-medium backdrop-blur sm:px-5 sm:text-sm"
          >
            🌱 سامانه هوشمند مدیریت کشاورزی
          </span>

          <h1
            class="mt-5 text-3xl font-extrabold leading-[1.4] sm:mt-6 sm:text-4xl md:text-5xl lg:text-6xl"
          >
            آینده کشاورزی
            <br />
            از اینجا آغاز می‌شود
          </h1>

          <p
            class="mt-5 max-w-xl text-sm leading-7 text-slate-200 sm:mt-6 sm:text-base sm:leading-8 lg:text-lg"
          >
            اقلیم یار بستری هوشمند برای مدیریت مزارع، پیش‌بینی آب‌وهوا،
            گزارش‌های تحلیلی و افزایش بهره‌وری کشاورزی است.
          </p>

          <div class="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row">
            <RouterLink
              to="/login"
              class="rounded-2xl bg-green-600 px-7 py-3.5 text-center text-sm font-bold transition hover:bg-green-700 sm:px-8 sm:py-4 sm:text-base"
            >
              ورود به سامانه
            </RouterLink>

            <a
              href="#about"
              class="rounded-2xl border border-white px-7 py-3.5 text-center text-sm font-semibold transition hover:bg-white hover:text-slate-900 sm:px-8 sm:py-4 sm:text-base"
            >
              درباره اقلیم یار
            </a>
          </div>
        </div>
      </div>

      <div
        class="absolute bottom-6 left-6 hidden rounded-2xl bg-white/95 p-5 shadow-2xl backdrop-blur sm:block lg:bottom-8 lg:left-8 lg:p-6"
      >
        <p class="text-2xl font-extrabold text-green-600 lg:text-3xl">
          +500
        </p>

        <p class="mt-1 text-sm font-semibold text-slate-700">
          مزرعه فعال
        </p>

        <span class="mt-1 block text-xs text-slate-500">
          مدیریت شده در سامانه
        </span>
      </div>
    </div>
  </section>
</template>

<script setup>
import { RouterLink } from "vue-router";
</script>