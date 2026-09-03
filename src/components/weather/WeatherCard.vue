<template>
  <div
    class="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-lg"
  >
    <div class="flex items-center justify-between gap-4">
      <div class="min-w-0">
        <p class="text-sm text-slate-500">
          وضعیت آب و هوا
        </p>

        <p class="mt-1 text-sm font-medium text-slate-400">
          {{ weatherStore.locationName }}
        </p>

        <h2 class="mt-2 text-4xl font-extrabold text-slate-800">
          {{ weatherStore.currentWeather.temp }}°
        </h2>

        <p class="mt-2 text-slate-600">
          {{ weatherStore.currentWeather.status }}
        </p>
      </div>

      <div
        class="flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-green-100 text-5xl"
      >
        {{ weatherStore.currentWeather.icon }}
      </div>
    </div>

    <div class="mt-8 grid grid-cols-3 gap-4">
      <div class="text-center">
        <p class="text-xs text-slate-400">
          رطوبت
        </p>

        <p class="mt-1 font-bold text-slate-700">
          {{ weatherStore.currentWeather.humidity }}%
        </p>
      </div>

      <div class="text-center">
        <p class="text-xs text-slate-400">
          باد
        </p>

        <p class="mt-1 font-bold text-slate-700">
          {{ weatherStore.currentWeather.wind }} km/h
        </p>
      </div>

      <div class="text-center">
        <p class="text-xs text-slate-400">
          بارش
        </p>

        <p class="mt-1 font-bold text-slate-700">
          {{ weatherStore.currentWeather.rain }}%
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useWeatherStore } from "@/stores/weatherStore";

const weatherStore = useWeatherStore();
</script>