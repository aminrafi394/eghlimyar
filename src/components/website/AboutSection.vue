<template>
  <section class="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">

    <div class="grid items-center gap-14 lg:grid-cols-2">

      <!-- Image -->

      <div class="relative">

        <img
          src="https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=900"
          alt="Smart Farm"
          class="h-[500px] w-full rounded-3xl object-cover shadow-xl"
        >

        <div
          class="absolute -bottom-8 -left-8 rounded-3xl bg-green-600 p-6 text-white shadow-xl"
        >
          <h3 class="text-4xl font-extrabold">
            +10
          </h3>

          <p class="mt-2">
            سال تجربه
          </p>
        </div>

      </div>

      <!-- Content -->

      <div>

        <span
          class="rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-700"
        >
          درباره اقلیم یار
        </span>

        <h2
          class="mt-6 text-4xl font-extrabold leading-tight text-slate-800 md:text-5xl"
        >
          آینده کشاورزی
          <br>
          با مدیریت هوشمند
        </h2>

        <p
          class="mt-8 leading-8 text-slate-600"
        >
          اقلیم یار یک سامانه هوشمند برای مدیریت مزارع، بررسی وضعیت
          آب‌وهوا، تحلیل اطلاعات و ارائه پیشنهادهای تخصصی است تا
          کشاورزان بتوانند تصمیم‌های دقیق‌تر و سودآورتری بگیرند.
        </p>

        <div class="mt-10 space-y-5">

          <div class="flex items-center gap-4">
            <div
              class="flex h-10 w-10 items-center justify-center rounded-full bg-green-600 text-white"
            >
              ✓
            </div>

            <p class="font-medium text-slate-700">
              مدیریت کامل اطلاعات مزارع
            </p>
          </div>

          <div class="flex items-center gap-4">
            <div
              class="flex h-10 w-10 items-center justify-center rounded-full bg-green-600 text-white"
            >
              ✓
            </div>

            <p class="font-medium text-slate-700">
              پیش‌بینی دقیق وضعیت آب و هوا
            </p>
          </div>

          <div class="flex items-center gap-4">
            <div
              class="flex h-10 w-10 items-center justify-center rounded-full bg-green-600 text-white"
            >
              ✓
            </div>

            <p class="font-medium text-slate-700">
              گزارش‌های تحلیلی و توصیه‌های هوشمند
            </p>
          </div>

        </div>

        <RouterLink
          to="/about"
          class="mt-12 inline-block rounded-2xl bg-green-600 px-8 py-4 font-semibold text-white transition hover:bg-green-700"
        >
          بیشتر بخوانید
        </RouterLink>

      </div>

    </div>

  </section>
</template>

<script setup>
import { RouterLink } from "vue-router";
</script>