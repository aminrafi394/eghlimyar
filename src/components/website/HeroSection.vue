<template>
  <section class="relative overflow-hidden bg-slate-50">
    <!-- Background decoration -->
    <div
      class="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-green-100/60 blur-3xl"
    ></div>

    <div
      class="pointer-events-none absolute -bottom-40 left-0 h-96 w-96 rounded-full bg-emerald-100/50 blur-3xl"
    ></div>

    <div
      class="relative mx-auto grid min-h-[calc(100vh-80px)] max-w-7xl items-center gap-12 px-4 py-14 sm:px-6 sm:py-20 lg:grid-cols-2 lg:gap-16 lg:px-8 lg:py-24"
    >
      <!-- Content -->
      <div class="text-right">
        <!-- Badge -->
        <div
          class="mb-6 inline-flex items-center gap-2 rounded-full border border-green-200 bg-green-50 px-4 py-2"
        >
          <span class="h-2 w-2 rounded-full bg-green-500"></span>

          <span class="text-xs font-bold text-green-700 sm:text-sm">
            نسل جدید مدیریت هوشمند کشاورزی
          </span>
        </div>

        <!-- Title -->
        <h1
          class="text-4xl font-black leading-[1.45] tracking-tight text-slate-900 sm:text-5xl lg:text-6xl"
        >
          مزرعه‌ات را
          <span class="text-green-600">
            هوشمندتر
          </span>

          <br />

          مدیریت کن.
        </h1>

        <!-- Description -->
        <p
          class="mt-6 max-w-xl text-sm leading-8 text-slate-500 sm:text-base sm:leading-9 lg:text-lg"
        >
          اقلیم‌یار ابزارهای موردنیاز برای مدیریت بهتر مزرعه را
          در یک محیط ساده و یکپارچه در اختیار شما قرار می‌دهد؛
          از مدیریت مزارع و بررسی آب‌وهوا تا گزارش‌ها و توصیه‌های کاربردی.
        </p>

        <!-- CTA -->
        <div class="mt-8 flex flex-col gap-3 sm:flex-row">
          <RouterLink
            to="/signup"
            class="inline-flex items-center justify-center rounded-2xl bg-green-600 px-7 py-4 text-sm font-bold text-white shadow-lg shadow-green-600/20 transition hover:-translate-y-0.5 hover:bg-green-700 hover:shadow-xl sm:px-8 sm:text-base"
          >
            شروع کار با اقلیم‌یار

            <ArrowLeft
              :size="18"
              class="mr-2"
            />
          </RouterLink>

          <a
            href="#features"
            class="inline-flex items-center justify-center rounded-2xl border border-slate-200 bg-white px-7 py-4 text-sm font-bold text-slate-700 transition hover:border-green-200 hover:bg-green-50 hover:text-green-700 sm:px-8 sm:text-base"
          >
            آشنایی با امکانات

            <ArrowDown
              :size="17"
              class="mr-2"
            />
          </a>
        </div>

        <!-- Trust -->
        <div
          class="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-xs text-slate-400 sm:text-sm"
        >
          <span class="flex items-center gap-2">
            <CheckCircle2
              :size="16"
              class="text-green-600"
            />
            مدیریت مزارع
          </span>

          <span class="flex items-center gap-2">
            <CheckCircle2
              :size="16"
              class="text-green-600"
            />
            پیش‌بینی آب‌وهوا
          </span>

          <span class="flex items-center gap-2">
            <CheckCircle2
              :size="16"
              class="text-green-600"
            />
            گزارش‌های کاربردی
          </span>
        </div>
      </div>

      <!-- Product Preview -->
      <div class="relative">
        <!-- Main Image -->
        <div
          class="relative overflow-hidden rounded-[2rem] border border-white bg-slate-900 p-2 shadow-2xl"
        >
          <div
            class="relative h-[420px] overflow-hidden rounded-[1.5rem] sm:h-[500px]"
          >
            <img
              src="../../../public/images/farm.png"
              alt="نمایی از یک مزرعه"
              class="h-full w-full object-cover"
            />

            <div
              class="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-900/10 to-transparent"
            ></div>

            <!-- Weather Card -->
            <div
              class="absolute right-4 top-4 w-[190px] rounded-2xl border border-white/20 bg-white/95 p-4 shadow-xl backdrop-blur sm:right-6 sm:top-6"
            >
              <div class="flex items-center justify-between">
                <div>
                  <p class="text-[10px] text-slate-400">
                    وضعیت امروز
                  </p>

                  <p class="mt-1 text-xs font-bold text-slate-700">
                    تهران
                  </p>
                </div>

                <Sun
                  :size="25"
                  class="text-amber-500"
                />
              </div>

              <div class="mt-4 flex items-end gap-2">
                <span class="text-3xl font-black text-slate-900">
                  ۳۱°
                </span>

                <span class="pb-1 text-xs text-green-600">
                  آفتابی
                </span>
              </div>

              <div
                class="mt-3 flex justify-between border-t border-slate-100 pt-3 text-[10px] text-slate-400"
              >
                <span>رطوبت ۴۵٪</span>
                <span>باد ۱۲ km/h</span>
              </div>
            </div>

            <!-- Farm Status -->
            <div
              class="absolute bottom-5 right-5 left-5 rounded-2xl border border-white/10 bg-slate-950/75 p-4 text-white backdrop-blur-md sm:bottom-6 sm:right-6 sm:left-6"
            >
              <div class="flex items-center justify-between">
                <div>
                  <p class="text-xs text-slate-300">
                    وضعیت مزرعه
                  </p>

                  <p class="mt-1 font-bold">
                    مزرعه گندم
                  </p>
                </div>

                <span
                  class="inline-flex items-center gap-1.5 rounded-full bg-green-500/15 px-3 py-1 text-xs font-semibold text-green-300"
                >
                  <span class="h-1.5 w-1.5 rounded-full bg-green-400"></span>
                  فعال
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { RouterLink } from "vue-router";
import {
  ArrowLeft,
  ArrowDown,
  CheckCircle2,
  Sun,
} from "lucide-vue-next";
</script>