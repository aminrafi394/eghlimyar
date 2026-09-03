<template>
  <div class="space-y-8">

    <!-- Dashboard Header -->
    <section
      class="relative overflow-hidden rounded-3xl border border-slate-200 bg-white px-6 py-7 shadow-sm sm:px-8"
    >
      <!-- Decorative background -->
      <div
        class="pointer-events-none absolute -left-16 -top-16 h-40 w-40 rounded-full bg-green-50 blur-2xl"
      ></div>

      <div
        class="pointer-events-none absolute -bottom-20 right-1/3 h-40 w-40 rounded-full bg-emerald-50 blur-3xl"
      ></div>

      <div
        class="relative flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between"
      >
        <!-- Welcome -->
        <div>
          <div class="mb-3 flex items-center gap-3">
            <span
              class="flex h-10 w-10 items-center justify-center rounded-xl bg-green-100 text-xl"
            >
              🌱
            </span>

            <span
              class="rounded-full bg-green-50 px-3 py-1 text-xs font-semibold text-green-700"
            >
              سامانه اقلیم یار
            </span>
          </div>

          <h1
            class="text-2xl font-black tracking-tight text-slate-900 sm:text-3xl"
          >
            خوش اومدی 👋
          </h1>

          <p
            class="mt-2 max-w-xl text-sm leading-7 text-slate-500 sm:text-base"
          >
            وضعیت مزارع، آب‌وهوا، گزارش‌ها و فعالیت‌های اخیرت رو
            در یک نگاه بررسی کن.
          </p>
        </div>

        <!-- Actions -->
        <div class="flex flex-col gap-3 sm:flex-row lg:shrink-0">
          <RouterLink
            to="/dashboard/farms"
            class="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-green-200 hover:bg-green-50 hover:text-green-700"
          >
            مشاهده مزارع
          </RouterLink>

          <RouterLink
            to="/dashboard/add-farm"
            class="inline-flex items-center justify-center gap-2 rounded-xl bg-green-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-green-700 hover:shadow-md"
          >
            <span class="text-lg leading-none">+</span>
            افزودن مزرعه
          </RouterLink>
        </div>
      </div>
    </section>

    <!-- Dashboard Content -->
    <DashboardContent />

  </div>
</template>

<script setup>
import { RouterLink } from "vue-router";
import DashboardContent from "@/components/dashboard/DashboardContent.vue";
</script>