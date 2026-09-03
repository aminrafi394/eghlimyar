<template>
  <div
    class="h-full rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
  >
    <!-- Header -->
    <div class="flex items-center justify-between">
      <div>
        <h3 class="text-lg font-bold text-slate-800">
          کیفیت هوا
        </h3>

        <p class="mt-1 text-sm text-slate-500">
          وضعیت فعلی
        </p>
      </div>

      <div
        class="flex h-11 w-11 items-center justify-center rounded-xl bg-green-100 text-xl"
      >
        🌿
      </div>
    </div>

    <!-- AQI -->
    <div class="mt-8 flex items-center gap-5">
      <div
        class="flex h-24 w-24 shrink-0 items-center justify-center rounded-full border-8 border-green-100"
      >
        <div class="text-center">
          <span class="block text-2xl font-black text-slate-800">
            {{ air.aqi }}
          </span>

          <span class="text-[10px] text-slate-400">
            AQI
          </span>
        </div>
      </div>

      <div>
        <p class="text-sm text-slate-500">
          شاخص کیفیت هوا
        </p>

        <h4 class="mt-1 text-lg font-bold text-green-600">
          {{ air.status }}
        </h4>

        <p class="mt-1 text-xs text-slate-400">
          شرایط مناسب برای فعالیت‌های کشاورزی
        </p>
      </div>
    </div>

    <!-- Details -->
    <div class="mt-8 grid grid-cols-2 gap-4">
      <div
        class="rounded-xl bg-slate-50 p-4"
      >
        <p class="text-xs text-slate-500">
          PM2.5
        </p>

        <div class="mt-2 flex items-end gap-1">
          <span class="text-xl font-bold text-slate-800">
            {{ air.pm25 }}
          </span>

          <span class="pb-0.5 text-xs text-slate-400">
            µg/m³
          </span>
        </div>
      </div>

      <div
        class="rounded-xl bg-slate-50 p-4"
      >
        <p class="text-xs text-slate-500">
          PM10
        </p>

        <div class="mt-2 flex items-end gap-1">
          <span class="text-xl font-bold text-slate-800">
            {{ air.pm10 }}
          </span>

          <span class="pb-0.5 text-xs text-slate-400">
            µg/m³
          </span>
        </div>
      </div>
    </div>

    <!-- Status -->
    <div
      class="mt-5 flex items-center gap-2 rounded-xl bg-green-50 px-4 py-3"
    >
      <span class="h-2.5 w-2.5 rounded-full bg-green-500"></span>

      <span class="text-sm font-medium text-green-700">
        کیفیت هوا مناسب است
      </span>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useWeatherStore } from "@/stores/weatherStore";

const weatherStore = useWeatherStore();

const air = computed(() => weatherStore.airQuality);
</script>