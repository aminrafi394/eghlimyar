<template>
  <div
    class="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
  >
    <!-- Header -->
    <div class="mb-6 flex items-center justify-between">
      <div>
        <h2 class="text-lg font-bold text-slate-800">
          آخرین گزارش‌ها
        </h2>

        <p class="mt-1 text-sm text-slate-500">
          آخرین گزارش‌های ثبت شده
        </p>
      </div>

      <RouterLink
        to="/dashboard/reports"
        class="text-sm font-medium text-green-600 transition hover:text-green-700"
      >
        مشاهده همه
      </RouterLink>
    </div>

    <!-- Reports -->
    <div class="space-y-4">
      <RouterLink
        v-for="report in latestReports"
        :key="report.id"
        :to="`/dashboard/reports/${report.id}`"
        class="block rounded-xl border border-slate-200 p-4 transition hover:bg-slate-50 hover:shadow-sm"
      >
        <div class="flex items-start justify-between gap-4">
          <div class="min-w-0">
            <h3 class="truncate font-bold text-slate-700">
              {{ report.title }}
            </h3>

            <p class="mt-2 text-sm text-slate-500">
              {{ report.createdAt }}
            </p>

            <p
              v-if="report.farm"
              class="mt-1 text-xs text-slate-400"
            >
              {{ report.farm }}
            </p>
          </div>

          <span
            class="shrink-0 rounded-full px-3 py-1 text-xs font-semibold"
            :class="statusClass(report.status)"
          >
            {{ report.statusLabel }}
          </span>
        </div>
      </RouterLink>

      <!-- Empty State -->
      <div
        v-if="latestReports.length === 0"
        class="py-10 text-center"
      >
        <p class="font-semibold text-slate-700">
          هنوز گزارشی ثبت نشده است
        </p>

        <p class="mt-2 text-sm text-slate-500">
          بعد از ثبت گزارش، اینجا نمایش داده می‌شود.
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { RouterLink } from "vue-router";
import { useReportStore } from "@/stores/reportStore";

const reportStore = useReportStore();

const latestReports = computed(() => {
  return [...reportStore.reports]
    .sort((a, b) => Number(b.id) - Number(a.id))
    .slice(0, 3);
});

const statusClass = (status) => {
  if (status === "ready") {
    return "bg-green-100 text-green-700";
  }

  if (status === "processing") {
    return "bg-yellow-100 text-yellow-700";
  }

  return "bg-slate-100 text-slate-600";
};
</script>