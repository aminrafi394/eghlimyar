<template>
  <div class="bg-white rounded-2xl border border-slate-200 shadow-sm p-6">

    <div class="flex items-center justify-between mb-6">
      <h2 class="text-lg font-bold text-slate-800">
        آمار تولید هفتگی
      </h2>

      <span class="text-sm text-slate-500">
        ۷ روز گذشته
      </span>
    </div>

    <div class="space-y-5">

      <div
        v-for="item in chartData"
        :key="item.id"
      >
        <div class="flex justify-between mb-2 text-sm">

          <span class="font-medium text-slate-700">
            {{ item.day }}
          </span>

          <span class="text-slate-500">
            {{ item.value }}%
          </span>

        </div>

        <div class="w-full h-3 bg-slate-200 rounded-full overflow-hidden">

          <div
            class="h-full bg-green-600 rounded-full transition-all duration-500"
            :style="{ width: item.value + '%' }"
          />

        </div>

      </div>

    </div>

  </div>
</template>

<script setup>

const chartData = [
  { id: 1, day: "شنبه", value: 65 },
  { id: 2, day: "یکشنبه", value: 82 },
  { id: 3, day: "دوشنبه", value: 48 },
  { id: 4, day: "سه شنبه", value: 90 },
  { id: 5, day: "چهارشنبه", value: 72 },
  { id: 6, day: "پنجشنبه", value: 55 },
  { id: 7, day: "جمعه", value: 95 }
]

</script>