<template>
  <div
    class="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
  >
    <!-- Header -->
    <div class="mb-6">
      <h2 class="text-xl font-bold text-slate-800">
        پیش‌بینی ۵ روز آینده
      </h2>

      <p class="mt-1 text-sm text-slate-500">
        وضعیت دما و احتمال بارش
      </p>
    </div>

    <!-- Forecast List -->
    <div class="space-y-3">
      <div
        v-for="day in weatherStore.forecastList"
        :key="day.id"
        class="flex flex-col gap-4 rounded-xl bg-slate-50 p-4 transition hover:bg-slate-100 sm:flex-row sm:items-center sm:justify-between"
      >
        <!-- Day -->
        <div class="flex min-w-0 items-center gap-4">
          <div
            class="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white text-2xl shadow-sm"
          >
            {{ day.icon }}
          </div>

          <div class="min-w-0">
            <p class="font-semibold text-slate-800">
              {{ day.day }}
            </p>

            <p class="mt-1 text-sm text-slate-500">
              {{ day.status }}
            </p>
          </div>
        </div>

        <!-- Weather Details -->
        <div
          class="grid grid-cols-2 gap-6 border-t border-slate-200 pt-3 sm:flex sm:items-center sm:gap-6 sm:border-0 sm:pt-0"
        >
          <!-- Temperature -->
          <div>
            <p class="text-xs text-slate-400">
              دما
            </p>

            <p class="mt-1 font-bold text-slate-800">
              {{ day.maxTemp }}°
              <span class="font-normal text-slate-400">
                / {{ day.minTemp }}°
              </span>
            </p>
          </div>

          <!-- Rain -->
          <div>
            <p class="text-xs text-slate-400">
              احتمال بارش
            </p>

            <p
              class="mt-1 font-bold"
              :class="day.rain >= 50 ? 'text-blue-600' : 'text-slate-600'"
            >
              {{ day.rain }}٪
            </p>
          </div>
        </div>
      </div>

      <!-- Empty State -->
      <div
        v-if="weatherStore.forecastList.length === 0"
        class="rounded-xl bg-slate-50 py-10 text-center"
      >
        <p class="font-semibold text-slate-700">
          اطلاعات پیش‌بینی در دسترس نیست
        </p>

        <p class="mt-2 text-sm text-slate-500">
          بعداً دوباره تلاش کنید.
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useWeatherStore } from "@/stores/weatherStore";

const weatherStore = useWeatherStore();
</script>