<template>
  <div
    class="overflow-x-auto rounded-2xl bg-white shadow-sm border border-slate-200"
  >
    <!-- Empty State -->
    <div
      v-if="reportStore.reports.length === 0"
      class="flex flex-col items-center justify-center px-6 py-16 text-center"
    >
      <div
        class="flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-100 text-3xl"
      >
        📋
      </div>

      <h3
        class="mt-4 text-lg font-bold text-slate-700"
      >
        هنوز گزارشی ثبت نشده است
      </h3>

      <p
        class="mt-2 text-sm text-slate-400"
      >
        اولین گزارش خود را ثبت کنید.
      </p>
    </div>

    <!-- Table -->
    <table
      v-else
      class="min-w-full"
    >
      <thead class="bg-slate-100">
        <tr>
          <th
            class="whitespace-nowrap px-4 py-4 text-right text-sm font-semibold text-slate-700 sm:px-6"
          >
            عنوان
          </th>

          <th
            class="whitespace-nowrap px-4 py-4 text-right text-sm font-semibold text-slate-700 sm:px-6"
          >
            مزرعه
          </th>

          <th
            class="whitespace-nowrap px-4 py-4 text-right text-sm font-semibold text-slate-700 sm:px-6"
          >
            تاریخ
          </th>

          <th
            class="whitespace-nowrap px-4 py-4 text-right text-sm font-semibold text-slate-700 sm:px-6"
          >
            وضعیت
          </th>

          <th
            class="whitespace-nowrap px-4 py-4 text-right text-sm font-semibold text-slate-700 sm:px-6"
          >
            عملیات
          </th>
        </tr>
      </thead>

      <tbody>
        <tr
          v-for="report in reportStore.reports"
          :key="report.id"
          class="border-t border-slate-100 transition hover:bg-slate-50"
        >

          <!-- Title -->
          <td
            class="whitespace-nowrap px-4 py-4 text-sm font-semibold text-slate-700 sm:px-6"
          >
            {{ report.title }}
          </td>

          <!-- Farm -->
          <td
            class="whitespace-nowrap px-4 py-4 text-sm text-slate-500 sm:px-6"
          >
            {{ report.farm }}
          </td>

          <!-- Date -->
          <td
            class="whitespace-nowrap px-4 py-4 text-sm text-slate-500 sm:px-6"
          >
            {{ report.createdAt }}
          </td>

          <!-- Status -->
          <td
            class="whitespace-nowrap px-4 py-4 sm:px-6"
          >
            <span
              class="inline-flex rounded-full px-3 py-1 text-xs font-semibold"
              :class="getStatusClass(report.status)"
            >
              {{ report.statusLabel }}
            </span>
          </td>

          <!-- Actions -->
          <td
            class="whitespace-nowrap px-4 py-4 sm:px-6"
          >
            <RouterLink
              :to="{
                name: 'report-detail',
                params: {
                  id: report.id,
                },
              }"
            >
              <button
                type="button"
                class="rounded-lg bg-green-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-green-700"
              >
                مشاهده
              </button>
            </RouterLink>
          </td>

        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import { useReportStore } from '@/stores/reportStore.js'

const reportStore = useReportStore()

const getStatusClass = (status) => {
  if (status === 'ready') {
    return 'bg-green-100 text-green-700'
  }

  if (status === 'processing') {
    return 'bg-yellow-100 text-yellow-700'
  }

  return 'bg-slate-100 text-slate-600'
}
</script>