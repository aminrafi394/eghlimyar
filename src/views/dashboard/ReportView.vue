<template>
  <div class="space-y-8">

    <!-- Header -->
    <div
      class="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between"
    >
      <div>
        <h1 class="text-3xl font-extrabold text-slate-800">
          گزارش‌ها
        </h1>

        <p class="mt-2 text-slate-500">
          گزارش‌های ثبت شده مزارع
        </p>
      </div>

      <!-- Add Report -->
      <button
        type="button"
        class="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-green-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-green-700 hover:shadow-md"
        @click="goToAddReport"
      >
        <span class="text-lg">
          +
        </span>

        ثبت گزارش جدید
      </button>
    </div>

    <!-- Statistics -->
    <div
      class="grid grid-cols-1 gap-6 md:grid-cols-3"
    >

      <!-- Total -->
      <div
        class="rounded-2xl bg-green-600 p-6 text-white shadow-sm"
      >
        <p class="text-sm text-white/80">
          کل گزارش‌ها
        </p>

        <h2 class="mt-3 text-4xl font-bold">
          {{ reportStore.totalReports }}
        </h2>
      </div>

      <!-- Ready -->
      <div
        class="rounded-2xl bg-blue-600 p-6 text-white shadow-sm"
      >
        <p class="text-sm text-white/80">
          آماده
        </p>

        <h2 class="mt-3 text-4xl font-bold">
          {{ reportStore.readyReports }}
        </h2>
      </div>

      <!-- Processing -->
      <div
        class="rounded-2xl bg-yellow-500 p-6 text-white shadow-sm"
      >
        <p class="text-sm text-white/80">
          در حال پردازش
        </p>

        <h2 class="mt-3 text-4xl font-bold">
          {{ reportStore.processingReports }}
        </h2>
      </div>

    </div>

    <!-- Reports Table -->
    <ReportTable />

  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { useReportStore } from '@/stores/reportStore.js'

import ReportTable from '@/components/report/ReportTable.vue'

const router = useRouter()

const reportStore = useReportStore()

const goToAddReport = () => {
  router.push({
    name: 'add-report',
  })
}
</script>