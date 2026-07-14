<template>
  <div
    class="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-lg"
  >
    <div class="flex items-center justify-between">
      <div>
        <p class="text-sm text-slate-500">
          کیفیت هوا
        </p>

        <h2 class="mt-2 text-3xl font-extrabold text-slate-800">
          {{ air.aqi }}
        </h2>

        <span
          class="mt-3 inline-block rounded-full bg-green-100 px-4 py-1 text-sm font-semibold text-green-700"
        >
          {{ air.status }}
        </span>
      </div>

      <div
        class="flex h-20 w-20 items-center justify-center rounded-full bg-green-100 text-5xl"
      >
        🌿
      </div>
    </div>

    <div class="mt-8 grid grid-cols-2 gap-4">

      <div class="rounded-xl bg-slate-50 p-4 text-center">
        <p class="text-xs text-slate-500">
          PM2.5
        </p>

        <p class="mt-2 text-xl font-bold text-slate-800">
          {{ air.pm25 }}
        </p>
      </div>

      <div class="rounded-xl bg-slate-50 p-4 text-center">
        <p class="text-xs text-slate-500">
          PM10
        </p>

        <p class="mt-2 text-xl font-bold text-slate-800">
          {{ air.pm10 }}
        </p>
      </div>

    </div>
  </div>
</template>

<script setup>
const air = {
  aqi: 42,
  status: "سالم",
  pm25: 18,
  pm10: 30,
};
</script>