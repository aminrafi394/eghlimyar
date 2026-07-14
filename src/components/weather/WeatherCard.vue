<template>
  <div
    class="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-lg"
  >
    <div class="flex items-center justify-between">
      <div>
        <p class="text-slate-500 text-sm">
          وضعیت آب و هوا
        </p>

        <h2 class="mt-2 text-4xl font-extrabold text-slate-800">
          {{ weather.temp }}°
        </h2>

        <p class="mt-2 text-slate-600">
          {{ weather.status }}
        </p>
      </div>

      <div
        class="flex h-20 w-20 items-center justify-center rounded-full bg-green-100 text-5xl"
      >
        ☀️
      </div>
    </div>

    <div class="mt-8 grid grid-cols-3 gap-4">
      <div class="text-center">
        <p class="text-xs text-slate-400">
          رطوبت
        </p>

        <p class="mt-1 font-bold text-slate-700">
          {{ weather.humidity }}%
        </p>
      </div>

      <div class="text-center">
        <p class="text-xs text-slate-400">
          باد
        </p>

        <p class="mt-1 font-bold text-slate-700">
          {{ weather.wind }} km/h
        </p>
      </div>

      <div class="text-center">
        <p class="text-xs text-slate-400">
          بارش
        </p>

        <p class="mt-1 font-bold text-slate-700">
          {{ weather.rain }}%
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
const weather = {
  temp: 31,
  status: "آفتابی",
  humidity: 45,
  wind: 12,
  rain: 5,
};
</script>