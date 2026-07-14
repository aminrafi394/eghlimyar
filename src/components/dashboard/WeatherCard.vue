<template>
  <div
    class="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 h-full"
  >
    <div class="flex items-center justify-between">

      <div>

        <h3 class="text-lg font-bold text-slate-800">
          وضعیت آب و هوا
        </h3>

        <p class="text-sm text-slate-500 mt-1">
          امروز
        </p>

      </div>

      <SunMedium
        :size="38"
        class="text-yellow-400"
      />

    </div>

    <div class="mt-8">

      <div class="flex items-end gap-3">

        <span
          class="text-5xl font-black text-slate-800"
        >
          ۲۸°
        </span>

        <span class="text-slate-500 pb-2">
          اصفهان
        </span>

      </div>

      <p
        class="text-green-600 font-semibold mt-3"
      >
        آفتابی
      </p>

    </div>

    <div
      class="grid grid-cols-3 gap-4 mt-8"
    >

      <div
        class="bg-slate-50 rounded-xl py-3 text-center"
      >
        <p class="text-xs text-slate-500">
          رطوبت
        </p>

        <h4 class="font-bold mt-2">
          ۴۳٪
        </h4>
      </div>

      <div
        class="bg-slate-50 rounded-xl py-3 text-center"
      >
        <p class="text-xs text-slate-500">
          باد
        </p>

        <h4 class="font-bold mt-2">
          ۱۲ km/h
        </h4>
      </div>

      <div
        class="bg-slate-50 rounded-xl py-3 text-center"
      >
        <p class="text-xs text-slate-500">
          بارش
        </p>

        <h4 class="font-bold mt-2">
          ۰٪
        </h4>
      </div>

    </div>

  </div>
</template>

<script setup>
import { SunMedium } from "lucide-vue-next";
</script>