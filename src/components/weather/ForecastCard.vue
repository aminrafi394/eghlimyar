<template>
  <div
    class="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
  >
    <h2 class="mb-6 text-xl font-bold text-slate-800">
      پیش‌بینی ۵ روز آینده
    </h2>

    <div class="space-y-4">
      <div
        v-for="day in forecast"
        :key="day.id"
        class="flex items-center justify-between rounded-xl bg-slate-50 px-4 py-3"
      >
        <div class="flex items-center gap-4">
          <span class="text-2xl">
            {{ day.icon }}
          </span>

          <div>
            <p class="font-semibold text-slate-800">
              {{ day.day }}
            </p>

            <p class="text-sm text-slate-500">
              {{ day.status }}
            </p>
          </div>
        </div>

        <span class="font-bold text-green-600">
          {{ day.temp }}°
        </span>
      </div>
    </div>
  </div>
</template>

<script setup>
const forecast = [
  {
    id: 1,
    day: "شنبه",
    temp: 31,
    status: "آفتابی",
    icon: "☀️",
  },
  {
    id: 2,
    day: "یکشنبه",
    temp: 29,
    status: "نیمه ابری",
    icon: "⛅",
  },
  {
    id: 3,
    day: "دوشنبه",
    temp: 27,
    status: "بارانی",
    icon: "🌧️",
  },
  {
    id: 4,
    day: "سه شنبه",
    temp: 30,
    status: "آفتابی",
    icon: "☀️",
  },
  {
    id: 5,
    day: "چهارشنبه",
    temp: 28,
    status: "ابری",
    icon: "☁️",
  },
];
</script>