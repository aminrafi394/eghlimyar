<template>
  <div
    class="h-full rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
  >
    <div class="flex items-center justify-between">
      <div>
        <h3 class="text-lg font-bold text-slate-800">
          وضعیت آب و هوا
        </h3>

        <p class="mt-1 text-sm text-slate-500">
          امروز
        </p>
      </div>

      <span class="text-yellow-400">
        {{ weather.icon }}
      </span>
    </div>

    <div class="mt-8">
      <div class="flex items-end gap-3">
        <span class="text-5xl font-black text-slate-800">
          {{ weather.temp }}°
        </span>

        <span class="pb-2 text-slate-500">
          {{ weatherStore.location.city }}
        </span>
      </div>

      <p class="mt-3 font-semibold text-green-600">
        {{ weather.status }}
      </p>
    </div>

    <div class="mt-8 grid grid-cols-3 gap-4">
      <div
        class="rounded-xl bg-slate-50 py-3 text-center"
      >
        <p class="text-xs text-slate-500">
          رطوبت
        </p>

        <h4 class="mt-2 font-bold">
          {{ weather.humidity }}٪
        </h4>
      </div>

      <div
        class="rounded-xl bg-slate-50 py-3 text-center"
      >
        <p class="text-xs text-slate-500">
          باد
        </p>

        <h4 class="mt-2 font-bold">
          {{ weather.wind }} km/h
        </h4>
      </div>

      <div
        class="rounded-xl bg-slate-50 py-3 text-center"
      >
        <p class="text-xs text-slate-500">
          بارش
        </p>

        <h4 class="mt-2 font-bold">
          {{ weather.rain }}٪
        </h4>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useWeatherStore } from "@/stores/weatherStore";

const weatherStore = useWeatherStore();

const weather = computed(() => weatherStore.currentWeather);
</script>