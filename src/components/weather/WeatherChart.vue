<template>
  <div class="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
    <div class="mb-6 flex items-center justify-between">
      <h2 class="text-xl font-bold text-slate-800">
        تغییرات دما
      </h2>

      <span class="text-sm text-slate-500">
        ۷ روز گذشته
      </span>
    </div>

    <div class="flex h-64 items-end justify-between gap-3">
      <div
        v-for="item in chartData"
        :key="item.day"
        class="flex flex-1 flex-col items-center"
      >
        <div
          class="w-full rounded-t-xl bg-green-500 transition hover:bg-green-600"
          :style="{ height: item.height + '%' }"
        ></div>

        <span class="mt-3 text-xs text-slate-500">
          {{ item.day }}
        </span>

        <span class="mt-1 text-sm font-semibold text-slate-700">
          {{ item.temp }}°
        </span>
      </div>
    </div>
  </div>
</template>

<script setup>
const chartData = [
  { day: "ش", temp: 28, height: 45 },
  { day: "ی", temp: 30, height: 60 },
  { day: "د", temp: 31, height: 68 },
  { day: "س", temp: 27, height: 40 },
  { day: "چ", temp: 29, height: 55 },
  { day: "پ", temp: 33, height: 85 },
  { day: "ج", temp: 32, height: 75 },
];
</script>