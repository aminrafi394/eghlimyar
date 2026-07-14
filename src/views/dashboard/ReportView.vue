<template>
  <div class="space-y-8">

    <div>
      <h1 class="text-3xl font-extrabold text-slate-800">
        گزارش‌ها
      </h1>

      <p class="mt-2 text-slate-500">
        گزارش‌های ثبت شده مزارع
      </p>
    </div>

    <div class="grid grid-cols-1 gap-6 md:grid-cols-3">

      <div class="rounded-2xl bg-green-600 p-6 text-white">
        <p>کل گزارش‌ها</p>
        <h2 class="mt-3 text-4xl font-bold">42</h2>
      </div>

      <div class="rounded-2xl bg-blue-600 p-6 text-white">
        <p>آماده</p>
        <h2 class="mt-3 text-4xl font-bold">35</h2>
      </div>

      <div class="rounded-2xl bg-yellow-500 p-6 text-white">
        <p>در حال پردازش</p>
        <h2 class="mt-3 text-4xl font-bold">7</h2>
      </div>

    </div>

    <ReportTable />

  </div>
</template>

<script setup>
import ReportTable from "@/components/report/ReportTable.vue";
</script>