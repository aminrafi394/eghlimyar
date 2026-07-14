<template>
  <div class="overflow-x-auto rounded-2xl bg-white shadow-sm">
    <table class="min-w-full">
      <thead class="bg-slate-100">
        <tr>
          <th class="px-6 py-4 text-right">عنوان</th>
          <th class="px-6 py-4 text-right">تاریخ</th>
          <th class="px-6 py-4 text-right">وضعیت</th>
          <th class="px-6 py-4 text-right">عملیات</th>
        </tr>
      </thead>

      <tbody>
        <tr
          v-for="report in reports"
          :key="report.id"
          class="border-t"
        >
          <td class="px-6 py-4">{{ report.title }}</td>

          <td class="px-6 py-4">{{ report.date }}</td>

          <td class="px-6 py-4">
            {{ report.status }}
          </td>

          <td class="px-6 py-4">
            <RouterLink :to="`/dashboard/reports/${report.id}`">
              <button
                class="rounded-lg bg-green-600 px-4 py-2 text-white hover:bg-green-700"
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
import { RouterLink } from "vue-router";

const reports = [
  {
    id: 1,
    title: "گزارش مزرعه گندم",
    date: "1405/04/24",
    status: "آماده",
  },
  {
    id: 2,
    title: "تحلیل آبیاری",
    date: "1405/04/22",
    status: "آماده",
  },
  {
    id: 3,
    title: "بررسی خاک",
    date: "1405/04/20",
    status: "در حال پردازش",
  },
];
</script>